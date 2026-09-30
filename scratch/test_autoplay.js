import { spawn } from 'child_process';
import path from 'path';

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log('Testing auto-carousel behavior...');
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const userDataDir = path.resolve('scratch/edge_profile_autoplay');

  const edgeProcess = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9223',
    `--user-data-dir=${userDataDir}`,
    '--disable-gpu',
    '--no-first-run',
    '--autoplay-policy=no-user-gesture-required',
    '--window-size=1280,900',
    'http://localhost:8080/'
  ]);

  try {
    let wsUrl = null;
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch('http://127.0.0.1:9223/json/list');
        const list = await res.json();
        const page = list.find((p) => p.type === 'page');
        if (page && page.webSocketDebuggerUrl) {
          wsUrl = page.webSocketDebuggerUrl;
          break;
        }
      } catch (err) {}
      await sleep(300);
    }

    if (!wsUrl) throw new Error('Failed to find CDP target in Edge');

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

    await new Promise((resolve) => (ws.onopen = resolve));

    function send(method, params = {}) {
      const id = messageId++;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    console.log('Waiting for initial hydration...');
    await sleep(2500);

    // Function to get active counter text e.g. "01 / 05"
    async function getActiveCounter() {
      const res = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const counter = document.querySelector('.stories-showcase .font-mono.tracking-wider');
            const name = document.querySelector('.stories-showcase .font-display.text-xl, .stories-showcase .font-display.text-2xl');
            return {
              counter: counter ? counter.textContent.trim() : '',
              name: name ? name.textContent.trim() : ''
            };
          })()
        `,
        returnByValue: true
      });
      return res.result?.value;
    }

    const initial = await getActiveCounter();
    console.log('Initial slide (not playing):', initial);

    // Wait 5s to see if it automatically advances
    console.log('Waiting 5.0 seconds for auto-advance...');
    await sleep(5000);

    const afterAuto = await getActiveCounter();
    console.log('After auto-advance interval:', afterAuto);

    const autoAdvanced = initial.counter !== afterAuto.counter;
    console.log('Did auto-carousel advance when not playing?', autoAdvanced);

    // Now play the video
    console.log('Starting video playback...');
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const playBtn = document.querySelector('.stories-showcase button[aria-label^="Play testimonial"]');
          if (playBtn) playBtn.click();
        })()
      `
    });
    await sleep(1000);

    const playingSlide = await getActiveCounter();
    console.log('Slide right after clicking play:', playingSlide);

    const videoStatus = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const v = document.querySelector('.stories-showcase video');
          return v ? { paused: v.paused, currentTime: v.currentTime } : null;
        })()
      `,
      returnByValue: true
    });
    console.log('Video status after play click:', videoStatus.result?.value);

    // Wait 7.5 seconds while playing: MUST NOT ADVANCE!
    console.log('Waiting 7.5 seconds while video is PLAYING...');
    await sleep(7500);

    const duringPlaySlide = await getActiveCounter();
    console.log('Slide after 7.5s while video was playing:', duringPlaySlide);

    const remainedPlayingSlide = playingSlide.counter === duringPlaySlide.counter;
    console.log('Did carousel STAY on current slide while video is playing?', remainedPlayingSlide);

    // Now pause the video
    console.log('Pausing video...');
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const video = document.querySelector('.stories-showcase video');
          if (video) video.pause();
        })()
      `
    });
    await sleep(1000);

    const pausedSlide = await getActiveCounter();
    console.log('Slide right after pause:', pausedSlide);

    // Wait 6.5 seconds after pausing: MUST RESUME AUTO-CAROUSEL!
    console.log('Waiting 6.5 seconds after pause...');
    await sleep(6500);

    const resumedSlide = await getActiveCounter();
    console.log('Slide after resuming auto-carousel:', resumedSlide);

    const resumedAuto = pausedSlide.counter !== resumedSlide.counter;
    console.log('Did auto-carousel resume after pausing?', resumedAuto);

    ws.close();
  } finally {
    edgeProcess.kill();
  }
}

run().catch((err) => {
  console.error('Error in test:', err);
  process.exit(1);
});
