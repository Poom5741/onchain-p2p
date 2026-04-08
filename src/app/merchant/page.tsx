import Link from "next/link";
import Image from "next/image";

export default function MerchantDashboard() {
  return (
    <div className="bg-background text-on-background selection:bg-primary/30">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d0e13]/80 backdrop-blur-xl flex justify-between items-center px-8 h-20 shadow-[0_20px_40px_rgba(197,154,255,0.08)]">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c59aff] to-[#9547f7] font-headline">Aureum</Link>
          <div className="hidden md:flex items-center gap-8 font-headline tracking-tight font-bold">
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="/marketplace">Marketplace</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Trades</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Wallet</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Help</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-[#f7f5fd]/60">
            <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div className="h-10 w-px bg-outline-variant/30"></div>
          <button className="bg-gradient-to-r from-[#c59aff] to-[#9547f7] text-on-primary-container px-6 py-2.5 rounded-full font-bold hover:opacity-90 active:scale-95 transition-all">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 pt-24 bg-[#121319] border-r border-[#f7f5fd]/5 flex-col font-body font-medium text-sm hidden lg:flex z-40">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center text-on-primary font-bold text-xl">A</div>
            <div>
              <h3 className="text-lg font-bold text-[#c59aff]">Aureum P2P</h3>
              <p className="text-xs text-on-surface-variant/70">The Neon Alchemist</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link className="flex items-center gap-3 bg-[#c59aff]/10 text-[#c59aff] rounded-r-full py-3 px-6 border-l-4 border-[#c59aff] transition-all duration-300 ease-in-out" href="/merchant">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>storefront</span>
            Merchant Dashboard
          </Link>
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] hover:text-[#00f2ea] transition-all duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined">shopping_cart</span>
            Buyer Portal
          </Link>
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] hover:text-[#00f2ea] transition-all duration-300 ease-in-out" href="/inventory">
            <span className="material-symbols-outlined">database</span>
            Asset Inventory
          </Link>
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] hover:text-[#00f2ea] transition-all duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined">history</span>
            Trade History
          </Link>
        </nav>
        <div className="p-6 space-y-4">
          <Link href="/merchant/new-ad" className="w-full bg-secondary text-on-secondary py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
            New Trade
          </Link>
          <div className="border-t border-outline-variant/20 pt-4">
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-2 px-3 hover:text-on-surface transition-all" href="#">
              <span className="material-symbols-outlined">help_outline</span>
              Support
            </Link>
            <Link className="flex items-center gap-3 text-error/70 py-2 px-3 hover:text-error transition-all" href="#">
              <span className="material-symbols-outlined">logout</span>
              Sign Out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="lg:ml-64 pt-24 pb-12 px-8 min-h-screen">
        {/* Header & Stats Section */}
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight font-headline text-on-surface mb-2">Merchant Command</h1>
              <p className="text-on-surface-variant font-body">Manage your synthetic alchemy and peer-to-peer liquidity.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-surface-container-low px-6 py-3 rounded-2xl flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Reliability</p>
                  <p className="text-xl font-bold text-secondary">98.5%</p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-secondary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Bento Grid Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Total Volume Main Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-surface-container-low to-surface-container rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">account_balance_wallet</span>
            </div>
            <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Total Ecosystem Volume</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-extrabold font-headline">€142,500</span>
                <span className="text-secondary font-bold">+12.4%</span>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="bg-surface-container-highest px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="text-xs font-bold text-primary">sXAU</span>
                  <span className="text-sm font-medium">24.50 oz</span>
                </div>
                <div className="bg-surface-container-highest px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="text-xs font-bold text-secondary">sXAG</span>
                  <span className="text-sm font-medium">1,240 oz</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Ads Summary */}
          <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between border-b-4 border-primary">
            <span className="material-symbols-outlined text-primary text-3xl mb-4">campaign</span>
            <div>
              <p className="text-4xl font-extrabold font-headline mb-1">12</p>
              <p className="text-on-surface-variant text-sm font-bold">Active Listings</p>
            </div>
          </div>

          {/* Pending Trades */}
          <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between border-b-4 border-secondary">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">sync_alt</span>
            <div>
              <p className="text-4xl font-extrabold font-headline mb-1">04</p>
              <p className="text-on-surface-variant text-sm font-bold">Open Disputes</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ad Management List */}
          <section className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-headline">Active Marketplace Ads</h2>
              <button className="text-sm font-bold text-primary hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {/* Ad Item 1 */}
              <div className="bg-surface-container p-6 rounded-xl flex items-center justify-between hover:bg-surface-container-high transition-all group">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#24252d] flex items-center justify-center overflow-hidden">
                    <img className="w-10 h-10 object-cover" alt="sXAU" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz1GJdw6QZuGQblk4NcYZ4ad5XMNpYe4MUyL0lDsOQhpbrCVtYs4qXq4K7nrJYl8ZSP5OkurdqJlfIMz48w7vgP1ZRfHicxPDKwpVJngXa13h5xLgm96EI82I07zk7h2yfZR0baCTLZvFkNX7qQcUIT6pZ0F6HWe5XMkBLabJKW57z6pxqhO-gvK0PQ4E8ir-8ioZkr7s4CG0pxBZTF4oc3NdYyHk4bCoKQ1Mj9WEdm3HjNzUCjlbSVzob6Qz7hf9b5ceVtag60Rg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-0.5">Sell sXAU (Synthetic Gold)</h4>
                    <p className="text-sm text-on-surface-variant">Limit: €500 - €5,000 | Bank Transfer</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-10">
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Current Price</p>
                    <p className="text-xl font-extrabold text-on-surface">€2,145.20 <span className="text-xs text-secondary">+1.5%</span></p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                      <span className="ms-3 text-xs font-bold text-secondary uppercase">Online</span>
                    </label>
                    <button className="p-2 text-on-surface-variant hover:text-on-surface">
                      <span className="material-symbols-outlined text-xl">edit</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Ad Item 2 */}
              <div className="bg-surface-container p-6 rounded-xl flex items-center justify-between hover:bg-surface-container-high transition-all group">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#24252d] flex items-center justify-center overflow-hidden">
                    <img className="w-10 h-10 object-cover" alt="sXAG" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUuBEilHXs9GqyHSsw4Rf6rN_89yiQbrjyNBXCApzD7os6NLi7SbIFizvgXqYAHt_NZSnXgBNYjdRlwwVim47b4mNggoiiaLRTGxLdb9ucBdJ102MCArcZ29fbezf4gJ1_WVwVbj2yw-TFSGR93R5W3pk_nCm4YWXyNWmDX1Ygf8lnOLs5-2_4Lc3rwI2nZbFkmmlwFWk3e7dMkkB0FKFvlwXiZ5MT7FqKA9Ut8EX8P3qJc9_Mxy5yr4l2zmo522Bd6yqkGHSkoW0" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-0.5">Buy sXAG (Synthetic Silver)</h4>
                    <p className="text-sm text-on-surface-variant">Limit: €100 - €1,500 | Revolut, SEPA</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-10">
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Current Price</p>
                    <p className="text-xl font-extrabold text-on-surface">€28.45 <span className="text-xs text-error">-0.2%</span></p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                      <span className="ms-3 text-xs font-bold text-on-surface-variant uppercase">Offline</span>
                    </label>
                    <button className="p-2 text-on-surface-variant hover:text-on-surface">
                      <span className="material-symbols-outlined text-xl">edit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent History Sidebar */}
          <section className="lg:col-span-1">
            <div className="bg-surface-container-low rounded-xl p-6 h-full">
              <h2 className="text-xl font-bold font-headline mb-6">Recent Alchemy</h2>
              <div className="space-y-6">
                {/* History Item 1 */}
                <div className="flex items-start gap-4 pb-6 border-b border-outline-variant/10">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-sm">north_east</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-sm">Sold 2.5 oz sXAU</span>
                      <span className="text-xs text-on-surface-variant">2m ago</span>
                    </div>
                    <p className="text-xs text-on-surface-variant mb-2">Counterparty: <span className="text-primary">Neon_Mage_42</span></p>
                    <div className="bg-surface-container-highest rounded-lg px-3 py-1.5 inline-block">
                      <span className="text-xs font-bold text-on-surface">€5,363.00</span>
                    </div>
                  </div>
                </div>

                {/* History Item 2 */}
                <div className="flex items-start gap-4 pb-6 border-b border-outline-variant/10">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm">south_west</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-sm">Bought 100 oz sXAG</span>
                      <span className="text-xs text-on-surface-variant">45m ago</span>
                    </div>
                    <p className="text-xs text-on-surface-variant mb-2">Counterparty: <span className="text-primary">Argentum_Lord</span></p>
                    <div className="bg-surface-container-highest rounded-lg px-3 py-1.5 inline-block">
                      <span className="text-xs font-bold text-on-surface">€2,845.00</span>
                    </div>
                  </div>
                </div>

                {/* History Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-sm">north_east</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-sm">Sold 0.5 oz sXAU</span>
                      <span className="text-xs text-on-surface-variant">3h ago</span>
                    </div>
                    <p className="text-xs text-on-surface-variant mb-2">Counterparty: <span className="text-primary">Crypto_Knight</span></p>
                    <div className="bg-surface-container-highest rounded-lg px-3 py-1.5 inline-block">
                      <span className="text-xs font-bold text-on-surface">€1,072.60</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 rounded-xl border border-outline-variant/30 text-sm font-bold hover:bg-surface-container-highest transition-all">
                Full Ledger
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Navigation (Visible only on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 obsidian-glass flex items-center justify-around z-50">
        <button className="flex flex-col items-center gap-1 text-[#c59aff]">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
          <span className="text-[10px] font-bold">Dashboard</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#f7f5fd]/60">
          <span className="material-symbols-outlined">campaign</span>
          <span className="text-[10px] font-bold">Ads</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#f7f5fd]/60">
          <span className="material-symbols-outlined">sync_alt</span>
          <span className="text-[10px] font-bold">Trades</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#f7f5fd]/60">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Account</span>
        </button>
      </div>
    </div>
  );
}
