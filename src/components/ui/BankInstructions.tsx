import React from "react";
import { Database, Copy, Info } from "lucide-react";

interface BankInstructionsProps {
  bankName: string;
  iban: string;
  accountHolder: string;
  referenceCode: string;
  infoText: string;
}

export default function BankInstructions({
  bankName,
  iban,
  accountHolder,
  referenceCode,
  infoText,
}: BankInstructionsProps) {
  return (
    <div className="bg-surface-container-low rounded-xl overflow-hidden">
      <div className="bg-surface-container-high px-8 py-4 border-b border-outline-variant/10">
        <h3 className="font-headline font-bold flex items-center gap-2">
          <Database className="w-5 h-5 text-secondary" />
          Bank Transfer Instructions
        </h3>
      </div>
      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">
                Bank Name
              </label>
              <p className="text-lg font-headline font-semibold text-on-surface">{bankName}</p>
            </div>
            <div>
              <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">
                IBAN
              </label>
              <div className="flex items-center justify-between bg-surface-container-highest p-3 rounded-lg mt-1">
                <span className="font-mono text-secondary">{iban}</span>
                <button className="text-on-surface-variant hover:text-on-surface">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">
                Account Holder
              </label>
              <p className="text-lg font-headline font-semibold text-on-surface">{accountHolder}</p>
            </div>
            <div>
              <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">
                Reference Code (Mandatory)
              </label>
              <div className="flex items-center justify-between bg-primary/10 p-3 rounded-lg mt-1 border border-primary/20">
                <span className="font-mono text-primary font-bold">{referenceCode}</span>
                <button className="text-primary hover:text-on-primary-container">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-highest/50 p-4 rounded-lg flex gap-4 items-start border border-outline-variant/10">
          <Info className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-sm text-on-surface-variant leading-relaxed">{infoText}</p>
        </div>
      </div>
    </div>
  );
}
