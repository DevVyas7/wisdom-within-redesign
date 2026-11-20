import { useState } from "react";
import { Copy, Check, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { whatsappUrl, whatsappNumber } from "@/lib/site";

export interface PayableItem {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  duration?: string;
  badge?: string;
  paymentUrl?: string;
}

interface PaymentGatewayModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PayableItem | null;
}

function GooglePayLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 shrink-0">
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7v3.1h3.9c2.3-2.1 3.5-5.2 3.5-9z" fill="#4285F4"/>
        <path d="M12 24c3.2 0 6-1.1 8-3l-3.9-3.1c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.8-5H1.1v3.2C3.1 21.3 7.3 24 12 24z" fill="#34A853"/>
        <path d="M5.2 14.1c-.2-.7-.4-1.5-.4-2.1s.2-1.4.4-2.1V6.7H1.1C.4 8.1 0 9.7 0 12s.4 3.9 1.1 5.3l4.1-3.2z" fill="#FBBC05"/>
        <path d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.3 0 3.1 2.7 1.1 6.7l4.1 3.2c1-2.9 3.7-5.1 6.8-5.1z" fill="#EA4335"/>
      </svg>
    </span>
  );
}

export function PaymentGatewayModal({ isOpen, onClose, item }: PaymentGatewayModalProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [gpayTriggered, setGpayTriggered] = useState<boolean>(false);

  if (!item) return null;

  const upiId = "9692117171@cnrb";
  const payeeName = "PRIYA RANJAN SAHU";

  // Dynamic UPI URI containing the exact amount - locks in the price on scan!
  const note = `The Wisdom Bharat - ${item.name.slice(0, 30)}`;
  const dynamicUpiUri = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&mc=7298&am=${item.priceNumber}&cu=INR&tn=${encodeURIComponent(note)}`;
  const gpayIntentUri = `gpay://upi/pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&mc=7298&am=${item.priceNumber}&cu=INR&tn=${encodeURIComponent(note)}`;

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleGPayClick = () => {
    setGpayTriggered(true);
    // On mobile devices, triggers Google Pay directly
    if (typeof window !== "undefined") {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = gpayIntentUri;
        setTimeout(() => {
          window.location.href = dynamicUpiUri;
        }, 600);
      }
    }
  };

  const whatsappConfirmText = encodeURIComponent(
    `Hello Dr. Priya Ranjan Sahu,\n\nI have completed the payment of ${item.price} for "${item.name}" via Google Pay (UPI: ${upiId}).\n\nPlease find my payment confirmation attached to schedule my session.`
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[375px] sm:max-w-[385px] w-[92vw] p-0 border border-border/70 shadow-2xl bg-card rounded-3xl overflow-hidden focus:outline-none">
        {/* Top Header with Trust Badge - Centered */}
        <DialogHeader className="bg-gradient-to-b from-primary/10 via-primary/5 to-transparent px-5 pt-4 pb-2 text-center sm:text-center items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase border border-primary/20">
              <ShieldCheck size={12} className="text-primary" />
              <span>Verified UPI Gateway</span>
            </span>
          </div>

          <DialogTitle className="font-display text-lg font-bold text-foreground leading-tight mt-1.5 text-center sm:text-center w-full">
            {item.name}
          </DialogTitle>

          <div className="flex items-baseline justify-center gap-1.5 mt-0.5 text-center sm:text-center w-full">
            <DialogDescription className="font-display text-2xl font-extrabold text-primary tracking-tight text-center sm:text-center">
              {item.price}
            </DialogDescription>
            {item.duration && (
              <span className="text-[11px] font-medium text-muted-foreground">
                • {item.duration}
              </span>
            )}
          </div>
        </DialogHeader>

        {/* Premium QR Payment Card - Warm Aesthetic matching the website */}
        <div className="px-5 py-1">
          <div className="bg-primary/[0.04] rounded-2xl p-3 border border-primary/20 flex flex-col items-center relative">
            {/* Viewfinder Corner Accents */}
            <div className="relative p-2 rounded-xl">
              <div className="absolute top-0.5 left-0.5 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-md pointer-events-none" />
              <div className="absolute top-0.5 right-0.5 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-md pointer-events-none" />
              <div className="absolute bottom-0.5 left-0.5 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-md pointer-events-none" />
              <div className="absolute bottom-0.5 right-0.5 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-md pointer-events-none" />

              {/* Dynamic QR with Transparent Background */}
              <QRCodeSVG
                value={dynamicUpiUri}
                size={164}
                level="H"
                bgColor="transparent"
                fgColor="#1c1917"
                marginSize={1}
                className="block rounded-lg"
                imageSettings={{
                  src: "/images/payments/logo-circle.png",
                  height: 34,
                  width: 34,
                  excavate: true,
                }}
              />
            </div>

            {/* Supported UPI Apps Row */}
            <div className="mt-2 pt-2 border-t border-primary/10 flex items-center justify-between w-full px-2 text-[11px]">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Scan with any app
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold">
                <span className="inline-flex items-center gap-1 text-foreground">
                  <GooglePayLogo className="w-3.5 h-3.5" />
                  <span>GPay</span>
                </span>
                <span className="text-muted-foreground/40">•</span>
                <span className="text-[#5f259f] font-bold">PhonePe</span>
                <span className="text-muted-foreground/40">•</span>
                <span className="text-[#00b9f5] font-bold">Paytm</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 2 Essential Details: Name & Google Pay UPI (Sleek Fintech Capsule) */}
        <div className="px-5 py-1.5 flex flex-col items-center justify-center gap-1.5 text-center">
          {/* Detail 1: Payee Name with Verified Seal */}
          <div className="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <span className="text-[11px] uppercase tracking-wider font-medium">Payee:</span>
            <span className="font-bold text-foreground tracking-wide text-xs">
              {payeeName}
            </span>
            <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
          </div>

          {/* Detail 2: Interactive UPI ID Capsule with Integrated 1-Click Copy */}
          <button
            type="button"
            onClick={handleCopy}
            title="Click to copy Google Pay UPI ID"
            className="group inline-flex items-center justify-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary/[0.06] hover:bg-primary/[0.12] active:scale-[0.98] border border-primary/25 transition-all cursor-pointer shadow-2xs"
          >
            <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider">
              UPI ID
            </span>
            <span className="w-px h-3.5 bg-primary/25" />
            <span className="text-xs font-mono font-bold text-foreground select-all tracking-tight">
              {upiId}
            </span>
            <span className="w-px h-3.5 bg-primary/25" />
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary transition-colors">
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-600" />
                  <span className="text-emerald-600 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy</span>
                </>
              )}
            </span>
          </button>
        </div>

        {/* Direct Google Pay Action Button */}
        <div className="px-5 pt-1 space-y-1">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 hover:from-neutral-800 hover:to-neutral-700 text-white font-medium h-10 rounded-xl flex items-center justify-center gap-2 border border-neutral-700 shadow-md cursor-pointer transition-all active:scale-[0.99]"
          >
            <a href={gpayIntentUri} onClick={handleGPayClick}>
              <GooglePayLogo className="w-4 h-4" />
              <span className="text-xs font-bold text-white tracking-wide">
                Pay {item.price} with Google Pay
              </span>
              <ArrowRight size={14} className="text-white/80" />
            </a>
          </Button>

          {gpayTriggered && (
            <p className="text-[10px] text-center text-muted-foreground leading-tight px-1 italic">
              Opening Google Pay... On a computer, scan the QR code above or send {item.price} to <strong className="text-foreground">{upiId}</strong>.
            </p>
          )}
        </div>

        {/* WhatsApp Confirmation Bar */}
        <div className="p-3 bg-muted/20 border-t border-border/60 mt-1">
          <Button
            asChild
            className="w-full bg-[#1b7e45] hover:bg-[#156a39] text-white font-semibold h-9 text-xs rounded-lg shadow-xs transition-colors"
          >
            <a
              href={`${whatsappUrl}?text=${whatsappConfirmText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle size={14} />
              <span>Confirm on WhatsApp ({whatsappNumber})</span>
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}