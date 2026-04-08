import React from "react";

type AssetType = "sXAU" | "sXAG" | "USD/EUR" | string;

interface OfferCardProps {
  asset: AssetType;
  assetSub: string;
  icon: React.ReactNode;
  iconBgClass: string;
  borderColorClass: string;
  priceLabel: string;
  priceValue: string;
  limitLabel: string;
  limitValue: string;
  badgeLabel?: string;
  badgeContainerClass?: string;
  badgeTextClass?: string;
  footerIcon?: React.ReactNode;
  footerText: string;
  actionText: string;
  actionClass: string;
  onAction?: () => void;
  titleColorClass?: string;
}

export default function OfferCard({
  asset,
  assetSub,
  icon,
  iconBgClass,
  borderColorClass,
  priceLabel,
  priceValue,
  limitLabel,
  limitValue,
  badgeLabel,
  badgeContainerClass,
  badgeTextClass,
  footerIcon,
  footerText,
  actionText,
  actionClass,
  onAction,
  titleColorClass = "text-on-surface",
}: OfferCardProps) {
  return (
    <div
      className={`glass-card rounded-xl p-8 flex flex-col border-l-4 ${borderColorClass} group hover:bg-[#1e1f26] transition-all duration-300`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${iconBgClass}`}>
            {icon}
          </div>
          <div>
            <h4 className={`${titleColorClass} font-headline font-extrabold text-2xl tracking-tighter`}>
              {asset}
            </h4>
            <span className="text-xs font-bold text-on-surface-variant">{assetSub}</span>
          </div>
        </div>
        {badgeLabel && (
          <div className={`${badgeContainerClass} px-3 py-1 rounded-full`}>
            <span className={`${badgeTextClass} text-xs font-bold font-headline uppercase tracking-tighter`}>
              {badgeLabel}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between items-baseline">
          <span className="text-on-surface-variant text-sm font-medium">{priceLabel}</span>
          <span className="text-2xl font-extrabold font-headline">{priceValue}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-on-surface-variant text-sm font-medium">{limitLabel}</span>
          <span className="text-sm font-bold">{limitValue}</span>
        </div>
      </div>
      <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
        <div className="flex items-center gap-2">
          {footerIcon}
          <span className="text-xs font-bold text-on-surface-variant">{footerText}</span>
        </div>
        <button
          onClick={onAction}
          className={`${actionClass} px-8 py-3 rounded-full font-headline font-extrabold text-sm group-hover:scale-105 transition-transform`}
        >
          {actionText}
        </button>
      </div>
    </div>
  );
}
