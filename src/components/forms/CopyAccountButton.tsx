'use client';

import { useState } from 'react';

interface CopyAccountButtonProps {
  accountNumber: string;
}

export default function CopyAccountButton({ accountNumber }: CopyAccountButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = accountNumber;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/40 hover:text-white"
      type="button"
    >
      {copied ? 'Copied!' : 'Copy account number'}
    </button>
  );
}
