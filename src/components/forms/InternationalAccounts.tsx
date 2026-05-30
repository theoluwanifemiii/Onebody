'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CopyAccountButton from './CopyAccountButton';

function AccountCard({ bank, currency, accountNumber }: { bank: string; currency: string; accountNumber: string }) {
  return (
    <div className="border border-white/10 p-8 space-y-6">
      <div className="border-b border-white/10 pb-6">
        <p className="ob-kicker-dim mb-2">Bank</p>
        <p className="text-xl font-medium text-white tracking-tight">{bank}</p>
      </div>
      <div className="border-b border-white/10 pb-6">
        <p className="ob-kicker-dim mb-2">Account Name</p>
        <p className="text-xl font-medium text-white tracking-tight">Onebody Church</p>
      </div>
      <div className="border-b border-white/10 pb-6">
        <p className="ob-kicker-dim mb-2">Currency</p>
        <p className="text-xl font-medium text-white tracking-tight">{currency}</p>
      </div>
      <div>
        <p className="ob-kicker-dim mb-2">Account Number</p>
        <p className="text-3xl font-semibold text-white tracking-widest mb-4">{accountNumber}</p>
        <CopyAccountButton accountNumber={accountNumber} />
      </div>
    </div>
  );
}

export default function InternationalAccounts() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-16 border-t border-white/10 pt-12">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 group"
      >
        <p className="ob-kicker">International Giving</p>
        <ChevronDown
          className={`h-4 w-4 text-white/40 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl">
          <AccountCard bank="Sterling Bank" currency="US Dollar (USD)" accountNumber="0092757542" />
          <AccountCard bank="Sterling Bank" currency="British Pound (GBP)" accountNumber="0092757528" />
          <AccountCard bank="Sterling Bank" currency="Euro (EUR)" accountNumber="0092757535" />
        </div>
      )}
    </div>
  );
}
