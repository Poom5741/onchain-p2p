import React from "react";

interface HistoryItemProps {
  icon: React.ReactNode;
  iconBgClass: string;
  actionText: string;
  timeAgo: string;
  counterparty: string;
  counterpartyClass?: string;
  amountText: string;
  amountContainerClass?: string;
  isLast?: boolean;
}

export default function HistoryItem({
  icon,
  iconBgClass,
  actionText,
  timeAgo,
  counterparty,
  counterpartyClass = "text-primary",
  amountText,
  amountContainerClass = "bg-surface-container-highest",
  isLast = false,
}: HistoryItemProps) {
  return (
    <div
      className={`flex items-start gap-4 ${
        !isLast ? "pb-6 border-b border-outline-variant/10" : ""
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgClass}`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <span className="font-bold text-sm">{actionText}</span>
          <span className="text-xs text-on-surface-variant">{timeAgo}</span>
        </div>
        <p className="text-xs text-on-surface-variant mb-2">
          Counterparty: <span className={counterpartyClass}>{counterparty}</span>
        </p>
        <div className={`${amountContainerClass} rounded-lg px-3 py-1.5 inline-block`}>
          <span className="text-xs font-bold text-on-surface">{amountText}</span>
        </div>
      </div>
    </div>
  );
}
