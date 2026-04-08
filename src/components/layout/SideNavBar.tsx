import Link from "next/link";
import { Sparkles } from "lucide-react";
import React from "react";

export interface SideNavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

interface SideNavBarProps {
  items: SideNavItem[];
  bottomItems?: SideNavItem[];
  headerTitle?: string;
  headerSubtitle?: string;
  headerIcon?: React.ReactNode;
  actionButton?: React.ReactNode;
  isCollapsed?: boolean;
}

export default function SideNavBar({
  items,
  bottomItems,
  headerTitle = "Aureum P2P",
  headerSubtitle = "The Neon Alchemist",
  headerIcon = <Sparkles className="text-primary w-5 h-5" />,
  actionButton,
  isCollapsed = false,
}: SideNavBarProps) {
  if (isCollapsed) {
    return (
      <aside className="hidden md:flex h-screen w-20 fixed left-0 top-0 pt-24 bg-[#121319] flex-col items-center gap-8 border-r border-[#f7f5fd]/5 z-40">
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className={
              item.isActive
                ? "w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl border-l-4 border-primary"
                : "w-12 h-12 flex items-center justify-center text-[#f7f5fd]/50 hover:bg-[#181920] hover:text-secondary transition-all rounded-xl"
            }
            title={item.label}
          >
            {item.icon}
          </Link>
        ))}
        {bottomItems &&
          bottomItems.map((item, idx) => (
            <Link
              key={`bottom-${idx}`}
              href={item.href}
              className={`w-12 h-12 flex items-center justify-center text-[#f7f5fd]/50 hover:bg-[#181920] hover:text-secondary transition-all rounded-xl ${
                idx === 0 ? "mt-auto mb-8" : "mb-8"
              }`}
              title={item.label}
            >
              {item.icon}
            </Link>
          ))}
      </aside>
    );
  }

  return (
    <aside className="hidden lg:flex h-screen w-64 fixed left-0 top-0 pt-24 bg-[#121319] flex-col border-r border-[#f7f5fd]/5 z-40">
      <div className="flex items-center gap-3 px-6 mb-10">
        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center font-bold text-xl text-on-primary">
          {headerIcon}
        </div>
        <div>
          <p className="text-lg font-bold text-[#c59aff] font-headline">{headerTitle}</p>
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
            {headerSubtitle}
          </p>
        </div>
      </div>

      <nav className="flex flex-col flex-1 font-body font-medium text-sm">
        {items.map((item, idx) => (
          <Link
            key={idx}
            className={
              item.isActive
                ? "flex items-center gap-3 bg-[#c59aff]/10 text-[#c59aff] rounded-r-full py-3 px-6 border-l-4 border-[#c59aff] transition-all duration-300 ease-in-out"
                : "flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] hover:text-[#00f2ea] transition-all duration-300 ease-in-out"
            }
            href={item.href}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}

        {actionButton && <div className="mt-8 px-6">{actionButton}</div>}

        <div className="mt-auto pb-8 space-y-1">
          {bottomItems &&
            bottomItems.map((item, idx) => (
              <Link
                key={`bottom-${idx}`}
                className={
                  item.label === "Sign Out"
                    ? "flex items-center gap-3 text-error/70 py-3 px-6 hover:text-error transition-all"
                    : "flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all"
                }
                href={item.href}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
        </div>
      </nav>
    </aside>
  );
}
