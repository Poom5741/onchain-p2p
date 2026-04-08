import Link from "next/link";
import { Bell, Settings, Search } from "lucide-react";

interface TopNavBarProps {
  activePath?: "marketplace" | "trades" | "wallet" | "help";
  showSearch?: boolean;
  variant?: "dashboard" | "landing";
}

export default function TopNavBar({ activePath = "marketplace", showSearch = false, variant = "dashboard" }: TopNavBarProps) {
  const isMarketplace = activePath === "marketplace";
  const isTrades = activePath === "trades";
  const isLanding = variant === "landing";

  return (
    <nav className={`fixed top-0 w-full z-50 ${isLanding ? 'bg-transparent backdrop-blur-xl px-8 py-6' : 'bg-[#0d0e13]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(197,154,255,0.08)] px-8 h-20'} flex justify-between items-center`}>
      <div className={isLanding ? "flex justify-between items-center max-w-7xl mx-auto w-full" : "flex justify-between items-center w-full"}>
      <div className="flex items-center gap-8 md:gap-12">
        <span className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c59aff] to-[#9547f7] font-headline">
          Aureum
        </span>
        <div className="hidden md:flex items-center gap-6 font-headline font-bold text-sm tracking-tight">
          <Link
            className={
              isMarketplace
                ? "text-[#c59aff] border-b-2 border-[#c59aff] pb-1"
                : "text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors"
            }
            href="/"
          >
            Marketplace
          </Link>
          <Link
            className={
              isTrades
                ? "text-[#c59aff] border-b-2 border-[#c59aff] pb-1"
                : "text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors"
            }
            href="/trade/buyer"
          >
            Trades
          </Link>
          <Link
            className={
              activePath === "wallet"
                ? "text-[#c59aff] border-b-2 border-[#c59aff] pb-1"
                : "text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors"
            }
            href="#"
          >
            Wallet
          </Link>
          <Link
            className={
              activePath === "help"
                ? "text-[#c59aff] border-b-2 border-[#c59aff] pb-1"
                : "text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors"
            }
            href="#"
          >
            Help
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {isLanding ? (
          <>
            <button className="hidden lg:block text-[#f7f5fd] font-bold py-2 px-4 hover:text-[#c59aff] transition-all text-sm font-headline">Merchant Portal</button>
            <button className="bg-gradient-to-r from-[#c59aff] to-[#9547f7] text-[#330066] font-bold py-3 px-8 rounded-full scale-95 active:opacity-80 transition-all text-sm font-headline">Start Trading</button>
          </>
        ) : (
          <>
            {showSearch && (
              <div className="hidden lg:flex bg-surface-container-high rounded-full px-4 py-2 items-center gap-2">
                <Search className="text-on-surface-variant w-4 h-4" />
                <input
                  className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface outline-none"
                  placeholder="Search markets..."
                  type="text"
                />
              </div>
            )}
            <div className="flex items-center gap-4 text-[#f7f5fd]/60">
              <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
                <Settings className="w-5 h-5" />
              </button>
            </div>
            {!showSearch && <div className="h-10 w-px bg-outline-variant/30 hidden md:block"></div>}
            <button className="bg-gradient-to-r from-[#c59aff] to-[#9547f7] text-on-primary-container px-6 py-2.5 rounded-full font-headline font-bold text-sm hover:opacity-90 transition-all active:scale-95">
              Connect Wallet
            </button>
          </>
        )}
      </div>
      </div>
    </nav>
  );
}
