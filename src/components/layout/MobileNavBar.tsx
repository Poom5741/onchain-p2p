import Link from "next/link";
import React from "react";

export interface MobileNavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

interface MobileNavBarProps {
  items: MobileNavItem[];
}

export default function MobileNavBar({ items }: MobileNavBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 w-full h-16 bg-[#0d0e13]/90 backdrop-blur-xl border-t border-outline-variant/10 flex justify-around items-center px-4 z-50">
      {items.map((item, idx) => {
        return (
          <Link
            key={idx}
            href={item.href}
            className={
              item.isActive
                ? "flex flex-col items-center gap-1 text-primary"
                : "flex flex-col items-center gap-1 text-on-surface-variant hover:text-secondary transition-colors"
            }
          >
            {item.icon}
            <span className="text-[10px] font-bold">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
