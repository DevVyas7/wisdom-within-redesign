import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log('Launching Edge headless...');
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const userDataDir = path.resolve('scratch/edge_profile');
  
  const edgeProcess = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1280,900',
    'http://localhost:8080/'
  ]);

  try {
    // Wait for CDP to be available
    let wsUrl = null;
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch('http://127.0.0.1:9222/json/list');
        const list = await res.json();
        const page = list.find((p) => p.type === 'page');
        if (page && page.webSocketDebuggerUrl) {
          wsUrl = page.webSocketDebuggerUrl;
          break;
        }
      } catch (err) {
        // wait
      }
      await sleep(300);
    }

    if (!wsUrl) {
      throw new Error('Failed to find CDP target in Edge');
    }

    console.log('Connecting to CDP at:', wsUrl);
    const ws = new WebSocket(wsUrl);

    let messageId = 1;
    const pending = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };

    await new Promise((resolve) => {
      ws.onopen = resolve;
    });

    function send(method, params = {}) {
      const id = messageId++;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');
    await send('DOM.enable');

    console.log('Waiting for page hydration...');
    await sleep(2500);

    // Scroll directly to the video testimonial card centered
    await send('Runtime.evaluate', {
      expression: `
        const card = document.querySelector('.stories-showcase .max-w-4xl');
        if (card) card.scrollIntoView({ behavior: 'instant', block: 'center' });
      `
    });
    await sleep(800);

    // Measure exact heights on desktop
    const desktopInfo = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const card = document.querySelector('.stories-showcase .max-w-4xl');
          const leftCol = document.querySelector('.stories-showcase .md\\\\:col-span-5');
          const rightCol = document.querySelector('.stories-showcase .md\\\\:col-span-7');
          const videoContainer = document.querySelector('.stories-showcase .md\\\\:col-span-5 > div');
          const video = document.querySelector('.stories-showcase video');
          const quote = document.querySelector('.stories-showcase blockquote');
          const detail = document.querySelector('.stories-showcase p.text-muted-foreground.text-xs');
          
          return JSON.stringify({
            cardHeight: card ? Math.round(card.getBoundingClientRect().height) : 0,
            leftColHeight: leftCol ? Math.round(leftCol.getBoundingClientRect().height) : 0,
            rightColHeight: rightCol ? Math.round(rightCol.getBoundingClientRect().height) : 0,
            videoContainerHeight: videoContainer ? Math.round(videoContainer.getBoundingClientRect().height) : 0,
            videoHeight: video ? Math.round(video.getBoundingClientRect().height) : 0,
            quoteHeight: quote ? Math.round(quote.getBoundingClientRect().height) : 0,
            detailHeight: detail ? Math.round(detail.getBoundingClientRect().height) : 0
          });
        })()
      `,
      returnByValue: true
    });
    console.log('Detailed Element Heights:', desktopInfo.result?.value);

    // Capture centered desktop screenshot
    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/testimonials_desktop.png', Buffer.from(screenshot.data, 'base64'));
    console.log('Saved centered desktop screenshot to scratch/testimonials_desktop.png');

    // TEST SEEKING WITHOUT PAUSING
    console.log('--- TESTING VIDEO PLAY & SEEK BEHAVIOR ---');
    // 1. Click Play button
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const playBtn = document.querySelector('.stories-showcase button[aria-label^="Play testimonial"]');
          if (playBtn) playBtn.click();
        })()
      `
    });
    await sleep(1500);

    // Check if video is playing
    const playState1 = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const v = document.querySelector('.stories-showcase video');
          return JSON.stringify({ paused: v.paused, currentTime: v.currentTime, duration: v.duration });
        })()
      `,
      returnByValue: true
    });
    console.log('Playback state after clicking play:', playState1.result?.value);

    // 2. Perform a seek by clicking on the progress bar scrubber
    console.log('Performing seek on timeline progress bar while playing...');
    const seekResult = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const timeline = document.querySelector('.stories-showcase [class*="cursor-pointer group/timeline"]');
          if (!timeline) return 'Timeline not found';
          const rect = timeline.getBoundingClientRect();
          const targetX = rect.left + rect.width * 0.6; // seek to 60%
          const targetY = rect.top + rect.height / 2;

          timeline.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true, clientX: targetX, clientY: targetY, pointerId: 1 }));
          timeline.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true, clientX: targetX, clientY: targetY, pointerId: 1 }));
          timeline.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, clientX: targetX, clientY: targetY }));
          return 'Seek events dispatched';
        })()
      `,
      returnByValue: true
    });
    console.log('Seek action dispatch:', seekResult.result?.value);
    await sleep(1500);

    // Check state after seeking: MUST NOT BE PAUSED!
    const playState2 = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const v = document.querySelector('.stories-showcase video');
          return JSON.stringify({ paused: v.paused, currentTime: Math.round(v.currentTime * 10) / 10, duration: Math.round(v.duration) });
        })()
      `,
      returnByValue: true
    });
    console.log('Playback state AFTER seeking:', playState2.result?.value);

    // Test mobile viewport (390x844)
    console.log('--- TESTING MOBILE VIEWPORT (390x844) ---');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await sleep(500);

    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const title = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('Watch Client Experiences'));
          if (title) {
            const y = title.getBoundingClientRect().top + window.scrollY - 20;
            window.scrollTo(0, y);
          }
        })()
      `
    });
    await sleep(1000);

    const mobileInfo = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const card = document.querySelector('.stories-showcase .max-w-4xl');
          const cardRect = card ? card.getBoundingClientRect() : null;
          const bodyOverflow = document.documentElement.scrollWidth > window.innerWidth;
          return JSON.stringify({
            mobileCardHeight: cardRect ? Math.round(cardRect.height) : 0,
            hasHorizontalOverflow: bodyOverflow
          });
        })()
      `,
      returnByValue: true
    });
    console.log('Mobile Layout Measurements:', mobileInfo.result?.value);

    const mobileScreenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scratch/testimonials_mobile.png', Buffer.from(mobileScreenshot.data, 'base64'));
    console.log('Saved centered mobile screenshot to scratch/testimonials_mobile.png');

    ws.close();
  } finally {
    edgeProcess.kill();
  }
}

run().catch((err) => {
  console.error('Error running CDP test:', err);
  process.exit(1);
});
