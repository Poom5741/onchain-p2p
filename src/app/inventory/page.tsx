import Link from "next/link";
import {
  Bell,
  Settings,
  Wand2,
  Store,
  ShoppingCart,
  Database,
  History,
  HelpCircle,
  LogOut,
  Plus,
  ArrowDownToLine,
  ArrowRightLeft,
  CircleDollarSign,
  TrendingUp,
  Zap,
  User,
} from "lucide-react";

export default function AssetInventory() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      {/* TopNavBar */}
      <nav className="bg-[#0d0e13]/80 backdrop-blur-xl fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20 shadow-[0_20px_40px_rgba(197,154,255,0.08)]">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c59aff] to-[#9547f7] font-headline">Aureum</span>
          <div className="hidden md:flex gap-8 items-center font-headline tracking-tight font-bold">
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="/">Marketplace</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="/trade/buyer">Trades</Link>
            <Link className="text-[#c59aff] border-b-2 border-[#c59aff] pb-1" href="#">Wallet</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Help</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#f7f5fd]/60 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-[#f7f5fd]/60 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
              <Settings className="w-5 h-5" />
            </button>
          </div>
          <button className="bg-gradient-to-r from-[#c59aff] to-[#9547f7] text-[#330066] px-6 py-2.5 rounded-full font-bold active:scale-95 transition-all">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 pt-24 bg-[#121319] flex-col border-r border-[#f7f5fd]/5 hidden md:flex z-40">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center">
              <Wand2 className="text-[#c59aff] w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-bold text-[#c59aff] font-headline">Aureum P2P</p>
              <p className="text-[10px] text-on-surface-variant tracking-widest uppercase">The Neon Alchemist</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm font-body" href="/merchant">
            <Store className="w-5 h-5" />
            Merchant Dashboard
          </Link>
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm font-body" href="/trade/buyer">
            <ShoppingCart className="w-5 h-5" />
            Buyer Portal
          </Link>
          <Link className="flex items-center gap-3 bg-[#c59aff]/10 text-[#c59aff] rounded-r-full py-3 px-6 border-l-4 border-[#c59aff] font-medium text-sm font-body" href="/inventory">
            <Database className="w-5 h-5" />
            Asset Inventory
          </Link>
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm font-body" href="#">
            <History className="w-5 h-5" />
            Trade History
          </Link>
        </nav>
        <div className="p-6 border-t border-[#f7f5fd]/5 space-y-1">
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm" href="#">
            <HelpCircle className="w-5 h-5" />
            Support
          </Link>
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm" href="#">
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      <main className="md:ml-64 pt-32 px-8 pb-12 max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface">Asset Inventory</h1>
            <p className="text-on-surface-variant mt-2 text-lg">Manage your synthetic precious metals and liquidity.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-highest text-secondary font-bold hover:bg-surface-container transition-all font-body">
              <Plus className="w-5 h-5" /> Deposit
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-highest text-on-surface font-bold hover:bg-surface-container transition-all font-body">
              <ArrowDownToLine className="w-5 h-5" /> Withdraw
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all font-body">
              <ArrowRightLeft className="w-5 h-5" /> Transfer
            </button>
          </div>
        </header>

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Metal Assets Column */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Synthetic Gold */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] via-[#FDB931] to-[#917403] flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-background rounded-full mix-blend-overlay"></div>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl">Synthetic Gold</h3>
                    <p className="text-on-surface-variant text-sm font-mono tracking-tighter">sXAU / AU_INDEX</p>
                  </div>
                </div>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-body">Metal</span>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-on-surface-variant text-sm mb-1 uppercase tracking-widest font-bold font-body">Total Balance</p>
                  <p className="text-4xl font-extrabold font-headline text-on-surface">142.50 <span className="text-lg text-primary">sXAU</span></p>
                  <p className="text-secondary text-sm mt-1 font-body">≈ $285,420.00 USD</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 font-body">
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Available</p>
                    <p className="text-lg font-bold text-on-surface">130.00</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-error uppercase tracking-widest mb-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">lock</span> In Escrow
                    </p>
                    <p className="text-lg font-bold text-on-surface">12.50</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Synthetic Silver */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/10 blur-3xl rounded-full"></div>
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E5E4E2] via-[#C0C0C0] to-[#71706E] flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-background rounded-full mix-blend-overlay"></div>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl">Synthetic Silver</h3>
                    <p className="text-on-surface-variant text-sm font-mono tracking-tighter">sXAG / AG_INDEX</p>
                  </div>
                </div>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-body">Metal</span>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-on-surface-variant text-sm mb-1 uppercase tracking-widest font-bold font-body">Total Balance</p>
                  <p className="text-4xl font-extrabold font-headline text-on-surface">2,840.15 <span className="text-lg text-primary">sXAG</span></p>
                  <p className="text-secondary text-sm mt-1 font-body">≈ $68,163.60 USD</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 font-body">
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Available</p>
                    <p className="text-lg font-bold text-on-surface">2,840.15</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-error uppercase tracking-widest mb-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">lock</span> In Escrow
                    </p>
                    <p className="text-lg font-bold text-on-surface">0.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fiat Balance / Diversification */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-white/5 md:col-span-2 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center border border-white/10">
                      <CircleDollarSign className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-xl">Fiat Balance</h3>
                      <p className="text-on-surface-variant text-sm font-body">Collateral and liquidity pool</p>
                    </div>
                  </div>
                  <div className="space-y-6 font-body">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1 font-bold">Total USD Equivalent</p>
                        <p className="text-5xl font-extrabold font-headline text-on-surface tracking-tighter">$52,480.00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-secondary text-sm font-bold flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" /> +2.4%
                        </p>
                        <p className="text-[10px] text-on-surface-variant uppercase">This week</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-10 rounded-full bg-primary"></div>
                        <div>
                          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">USD Tether</p>
                          <p className="text-xl font-bold">$40,000</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-10 rounded-full bg-secondary"></div>
                        <div>
                          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Euro Token</p>
                          <p className="text-xl font-bold">€11,250</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-surface-container-highest/30 rounded-xl">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle className="text-white/5" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
                      <circle className="text-primary" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502" strokeDashoffset="120" strokeWidth="12"></circle>
                      <circle className="text-secondary" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502" strokeDashoffset="400" strokeWidth="12"></circle>
                    </svg>
                    <div className="absolute text-center font-body">
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Diversification</p>
                      <p className="text-2xl font-black font-headline">84.2</p>
                      <p className="text-[8px] text-primary uppercase font-bold tracking-tighter">Index Score</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Allocation & Vault */}
          <div className="space-y-8">
            {/* Allocation Matrix */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-white/5">
              <h3 className="font-headline font-bold text-xl mb-6">Allocation Matrix</h3>
              <div className="space-y-6 font-body">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs uppercase tracking-widest font-bold">
                    <span className="text-on-surface">Gold (sXAU)</span>
                    <span className="text-on-surface-variant">72%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FFD700] to-[#917403] rounded-full" style={{ width: "72%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs uppercase tracking-widest font-bold">
                    <span className="text-on-surface">Silver (sXAG)</span>
                    <span className="text-on-surface-variant">18%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#E5E4E2] to-[#71706E] rounded-full" style={{ width: "18%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs uppercase tracking-widest font-bold">
                    <span className="text-on-surface">Fiat Reserve</span>
                    <span className="text-on-surface-variant">10%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-secondary to-secondary-container rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-4 bg-surface-container-highest rounded-xl border border-white/5 font-body">
                <div className="flex gap-4 items-center">
                  <Zap className="text-primary w-5 h-5 fill-primary" />
                  <p className="text-xs text-on-surface-variant italic">Allocation suggests increasing Fiat reserves to optimize for upcoming sXAU volatility.</p>
                </div>
              </div>
            </div>

            {/* Alchemy Vault */}
            <div className="bg-gradient-to-br from-surface-container-low to-[#1a1c24] rounded-xl p-8 border border-primary/10">
              <h3 className="font-headline font-bold text-xl mb-4">Alchemy Vault</h3>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed font-body">Lock your synthetic assets in the high-yield vault to earn protocol rewards in AUREUM tokens.</p>
              <button className="w-full py-4 bg-surface-container-highest text-primary font-bold rounded-xl border border-primary/20 hover:bg-primary/5 transition-all font-body">
                Open Vault Settings
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <section className="bg-surface-container-low rounded-xl p-8 border border-white/5">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-headline font-bold text-2xl">Recent Activity</h3>
            <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline font-body">
              View All History <ArrowRightLeft className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4 font-body">
            {/* Activity 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 items-center p-4 hover:bg-surface-container rounded-xl transition-all gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <ArrowDownToLine className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">Deposit</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">Oct 24, 2023</p>
                </div>
              </div>
              <div className="text-on-surface-variant text-sm">USDT via Bank Wire</div>
              <div className="font-bold text-secondary text-right md:text-left">+ $5,000.00</div>
              <div className="flex justify-end">
                <span className="px-3 py-1 bg-surface-container-highest text-[10px] uppercase font-black text-on-surface-variant rounded-full">Completed</span>
              </div>
            </div>
            {/* Activity 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 items-center p-4 hover:bg-surface-container rounded-xl transition-all gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ArrowRightLeft className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">P2P Trade</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">Oct 23, 2023</p>
                </div>
              </div>
              <div className="text-on-surface-variant text-sm">Bought 2.5 sXAU</div>
              <div className="font-bold text-on-surface text-right md:text-left">- $4,985.20</div>
              <div className="flex justify-end">
                <span className="px-3 py-1 bg-surface-container-highest text-[10px] uppercase font-black text-primary rounded-full">In Escrow</span>
              </div>
            </div>
            {/* Activity 3 */}
            <div className="grid grid-cols-1 md:grid-cols-4 items-center p-4 hover:bg-surface-container rounded-xl transition-all gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error shrink-0">
                  <ArrowDownToLine className="w-5 h-5 rotate-180" />
                </div>
                <div>
                  <p className="font-bold">Withdrawal</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">Oct 21, 2023</p>
                </div>
              </div>
              <div className="text-on-surface-variant text-sm">EUR to IBAN</div>
              <div className="font-bold text-error text-right md:text-left">- €1,200.00</div>
              <div className="flex justify-end">
                <span className="px-3 py-1 bg-surface-container-highest text-[10px] uppercase font-black text-on-surface-variant rounded-full">Completed</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0d0e13] border-t border-white/5 flex justify-around items-center z-50">
        <button className="flex flex-col items-center gap-1 text-[#f7f5fd]/50">
          <Store className="w-5 h-5" />
          <span className="text-[10px] font-bold">Market</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#f7f5fd]/50">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-[10px] font-bold">Buyer</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <Database className="w-5 h-5 fill-primary/20" />
          <span className="text-[10px] font-bold">Assets</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#f7f5fd]/50">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>
    </div>
  );
}
