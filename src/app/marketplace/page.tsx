import Link from "next/link";
import Image from "next/image";

export default function Marketplace() {
  return (
    <div className="bg-background text-on-surface">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d0e13]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(197,154,255,0.08)] flex justify-between items-center px-8 h-20">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c59aff] to-[#9547f7] font-headline">Aureum</Link>
          <div className="hidden md:flex items-center gap-6 font-headline font-bold text-sm tracking-tight">
            <Link className="text-[#c59aff] border-b-2 border-[#c59aff] pb-1" href="/marketplace">Marketplace</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Trades</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Wallet</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Help</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex bg-surface-container-high rounded-full px-4 py-2 items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface outline-none" placeholder="Search markets..." type="text" />
          </div>
          <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-[#181920] rounded-full transition-all active:scale-95">notifications</button>
          <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-[#181920] rounded-full transition-all active:scale-95">settings</button>
          <button className="bg-gradient-to-r from-[#c59aff] to-[#9547f7] text-on-primary-container px-6 py-2.5 rounded-full font-headline font-bold text-sm hover:opacity-90 transition-all active:scale-95">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto lg:pl-72">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-6 leading-[1.1]">
                Alchemy of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Synthetic Markets</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed font-medium">
                Secure, peer-to-peer synthetic asset exchange. Trade tokenized precious metals and global currencies with instant settlement.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary flex flex-col gap-1">
                <span className="text-xs font-bold font-headline text-secondary tracking-widest uppercase">24H VOLUME</span>
                <span className="text-2xl font-bold font-headline">$4.2M</span>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary flex flex-col gap-1">
                <span className="text-xs font-bold font-headline text-primary tracking-widest uppercase">ACTIVE OFFERS</span>
                <span className="text-2xl font-bold font-headline">1,842</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Shell */}
        <div className="bg-surface-container-low rounded-xl p-4 mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-full cursor-pointer hover:bg-surface-bright transition-colors">
            <span className="text-sm font-bold font-headline">Asset Type</span>
            <span className="material-symbols-outlined text-xs">expand_more</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-full cursor-pointer hover:bg-surface-bright transition-colors">
            <span className="text-sm font-bold font-headline">Amount Range</span>
            <span className="material-symbols-outlined text-xs">tune</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-full cursor-pointer hover:bg-surface-bright transition-colors">
            <span className="text-sm font-bold font-headline">Payment Method</span>
            <span className="material-symbols-outlined text-xs">payments</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Sort By:</span>
            <div className="flex items-center gap-2 bg-surface-container rounded-full px-4 py-2">
              <span className="text-sm font-bold">Best Price</span>
              <span className="material-symbols-outlined text-xs">arrow_drop_down</span>
            </div>
          </div>
        </div>

        {/* Marketplace Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Highlighted Merchants / Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-headline font-extrabold text-xl px-2">Top Merchants</h3>

            {/* Merchant Card 1 */}
            <div className="bg-surface-container p-6 rounded-xl space-y-4 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3">
                <img alt="Nova_Trade Avatar" className="w-12 h-12 rounded-full bg-primary/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvN2wPHLr4NEGFHPvDFMsyXt5UiOLZDsAJm5PnO9RWfHml2OFtNUgerhd9YSy8dzLDpesAkWNKbKY9lDCjVv9LJIf06q1MzyNM3ImK33LW99hyo5-zlJpCL6znCTgTec2_QMgB0-etttM8RfxrH_XayxSbBXCztbmrP1dBPzh8UwhLzA1yvo5rw4xgs1V-1GGpcCiQRvxzzzlpIkBddLoWhpuNBCBVcSVR553g6JNAC0RX3gZcaI2N5mZp6UzQ1XdKPtfzj9yAVP0" />
                <div>
                  <p className="font-bold font-headline">Nova_Trade</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold text-secondary">99.8%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-surface-container-low p-3 rounded-lg text-center">
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase">TRADES</p>
                  <p className="text-sm font-bold">12,400+</p>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg text-center">
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase">SPEED</p>
                  <p className="text-sm font-bold">2m avg</p>
                </div>
              </div>
              <button className="w-full py-2 bg-surface-container-highest rounded-full text-xs font-bold hover:bg-primary/20 hover:text-primary transition-all">View Profile</button>
            </div>

            {/* Merchant Card 2 */}
            <div className="bg-surface-container p-6 rounded-xl space-y-4 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3">
                <img alt="SilverFox_P2P Avatar" className="w-12 h-12 rounded-full bg-secondary/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaHVGrlaC99VyNIHzH-PYG0_lmOVa4jznxQ5rsyPcWpKQUA6UoW9Uj_p8mkFMgKqkB7DAIJYl8gxwuT6YQxjA5eHn33w8NZxasjOm6M4ZiyuXhGaGU3bkSVBuhUxf1-kI6hQgcCMQbnO9XKUZdq5xAfsbxOb6wtTsEji3JTl_qu0mVzXCv6eSmsxF4t9fs3WBQMODMQishiPg7FgB0b55ubw6HtdrMFGldL8SrO8sY4hgG-uRwpqtexXEv0BzXN_RzYI8m40i6vZw" />
                <div>
                  <p className="font-bold font-headline">SilverFox_P2P</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold text-secondary">100%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-surface-container-low p-3 rounded-lg text-center">
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase">TRADES</p>
                  <p className="text-sm font-bold">5,201</p>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg text-center">
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase">SPEED</p>
                  <p className="text-sm font-bold">5m avg</p>
                </div>
              </div>
              <button className="w-full py-2 bg-surface-container-highest rounded-full text-xs font-bold hover:bg-primary/20 hover:text-primary transition-all">View Profile</button>
            </div>
          </div>

          {/* Main Offers List / Right Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Offer Card 1: Gold Buy */}
            <div className="glass-card rounded-xl p-8 flex flex-col border-l-4 border-primary group hover:bg-[#1e1f26] transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#bf953f] to-[#fcf6ba] flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                  </div>
                  <div>
                    <h4 className="metallic-gold font-headline font-extrabold text-2xl tracking-tighter">sXAU</h4>
                    <span className="text-xs font-bold text-on-surface-variant">Synthetic Gold</span>
                  </div>
                </div>
                <div className="bg-secondary/10 px-3 py-1 rounded-full">
                  <span className="text-secondary text-xs font-bold font-headline uppercase tracking-tighter">BEST PRICE</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface-variant text-sm font-medium">Price per Oz</span>
                  <span className="text-2xl font-extrabold font-headline">$2,145.20</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface-variant text-sm font-medium">Limits</span>
                  <span className="text-sm font-bold">500.00 - 15,000.00 USD</span>
                </div>
              </div>
              <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">shield</span>
                  <span className="text-xs font-bold text-on-surface-variant">Instant Settlement</span>
                </div>
                <Link href="/trade/buyer" className="bg-gradient-to-r from-secondary to-secondary-container text-on-secondary px-8 py-3 rounded-full font-headline font-extrabold text-sm group-hover:scale-105 transition-transform inline-block">
                  BUY sXAU
                </Link>
              </div>
            </div>

            {/* Offer Card 2: Silver Sell */}
            <div className="glass-card rounded-xl p-8 flex flex-col border-l-4 border-secondary group hover:bg-[#1e1f26] transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e8e8e8] to-[#70706f] flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>currency_exchange</span>
                  </div>
                  <div>
                    <h4 className="metallic-silver font-headline font-extrabold text-2xl tracking-tighter">sXAG</h4>
                    <span className="text-xs font-bold text-on-surface-variant">Synthetic Silver</span>
                  </div>
                </div>
                <div className="bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-primary text-xs font-bold font-headline uppercase tracking-tighter">NEW OFFER</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface-variant text-sm font-medium">Price per Oz</span>
                  <span className="text-2xl font-extrabold font-headline">$24.88</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface-variant text-sm font-medium">Limits</span>
                  <span className="text-sm font-bold">100.00 - 2,500.00 EUR</span>
                </div>
              </div>
              <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                  <span className="text-xs font-bold text-on-surface-variant">P2P Escrow</span>
                </div>
                <Link href="/trade/seller" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary-container px-8 py-3 rounded-full font-headline font-extrabold text-sm group-hover:scale-105 transition-transform inline-block">
                  SELL sXAG
                </Link>
              </div>
            </div>

            {/* Offer Card 3: Fiat Exchange */}
            <div className="glass-card rounded-xl p-8 flex flex-col border-l-4 border-on-surface-variant group hover:bg-[#1e1f26] transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                  </div>
                  <div>
                    <h4 className="text-on-surface font-headline font-extrabold text-2xl tracking-tighter">USD / EUR</h4>
                    <span className="text-xs font-bold text-on-surface-variant">Fiat Bridge</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface-variant text-sm font-medium">Exchange Rate</span>
                  <span className="text-2xl font-extrabold font-headline">0.925</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface-variant text-sm font-medium">Available</span>
                  <span className="text-sm font-bold">45,000.00 USD</span>
                </div>
              </div>
              <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">verified_user</span>
                  <span className="text-xs font-bold text-on-surface-variant">SEPA / Wire</span>
                </div>
                <button className="bg-surface-container-highest text-on-surface px-8 py-3 rounded-full font-headline font-extrabold text-sm group-hover:scale-105 transition-transform">
                  EXCHANGE
                </button>
              </div>
            </div>

            {/* Offer Card 4: Gold Buy (Alternative) */}
            <div className="glass-card rounded-xl p-8 flex flex-col border-l-4 border-primary group hover:bg-[#1e1f26] transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#bf953f] to-[#fcf6ba] flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                  </div>
                  <div>
                    <h4 className="metallic-gold font-headline font-extrabold text-2xl tracking-tighter">sXAU</h4>
                    <span className="text-xs font-bold text-on-surface-variant">Synthetic Gold</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface-variant text-sm font-medium">Price per Oz</span>
                  <span className="text-2xl font-extrabold font-headline">$2,148.50</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface-variant text-sm font-medium">Limits</span>
                  <span className="text-sm font-bold">1,000.00 - 50,000.00 USD</span>
                </div>
              </div>
              <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">shield</span>
                  <span className="text-xs font-bold text-on-surface-variant">Insured Trade</span>
                </div>
                <button className="bg-gradient-to-r from-secondary to-secondary-container text-on-secondary px-8 py-3 rounded-full font-headline font-extrabold text-sm group-hover:scale-105 transition-transform">
                  BUY sXAU
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Call to Action */}
        <section className="mt-24 bg-surface-container rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZX9huJj0B-UUpsEk5kIp79tpi-yfAgDIDBtZDfNIq1wpcsBlm7FUN_eCN0STaNJULv3CYgLQBAtiFQ1_mTgamvVKPkVVtqwLkVNxz90nrM3cehbEK7s6GLkngblUOE_-EC4h1HrCMt0gad4eBwdILiIlqzJ-O45nnmeTgqR1KM39ZBPJB8K_TW6axtfAwObq0vZ9YnR8QXzwsYkeQiS5eHrs9gvgNZWFvwq_tOTZMC6zPRbrm0xngJqI5PgUVYAKtyNnwOqu1X2E')" }}></div>
          <div className="relative z-10 p-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold mb-4 tracking-tight">Become an Aureum Merchant</h2>
              <p className="text-on-surface-variant font-medium">Create your own synthetic offers and earn competitive spreads on global trade volume.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary-container px-10 py-4 rounded-full font-headline font-extrabold text-base hover:shadow-[0_0_20px_rgba(197,154,255,0.4)] transition-all">Apply Now</button>
              <button className="bg-surface-container-highest border border-white/5 px-10 py-4 rounded-full font-headline font-extrabold text-base hover:bg-surface-bright transition-all">Merchant Guide</button>
            </div>
          </div>
        </section>
      </main>

      {/* SideNavBar (Hidden on Mobile) */}
      <aside className="hidden lg:flex h-screen w-64 fixed left-0 top-0 pt-24 bg-[#121319] flex-col border-r border-[#f7f5fd]/5 z-40">
        <div className="flex items-center gap-3 px-6 mb-10">
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">auto_fix_high</span>
          </div>
          <div>
            <p className="text-lg font-bold text-[#c59aff] font-headline">Aureum P2P</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">The Neon Alchemist</p>
          </div>
        </div>
        <nav className="flex flex-col flex-1 font-body font-medium text-sm">
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] hover:text-[#00f2ea] transition-all duration-300 ease-in-out" href="/merchant">
            <span className="material-symbols-outlined">storefront</span>
            <span>Merchant Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 bg-[#c59aff]/10 text-[#c59aff] rounded-r-full py-3 px-6 border-l-4 border-[#c59aff] transition-all duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span>Buyer Portal</span>
          </Link>
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] hover:text-[#00f2ea] transition-all duration-300 ease-in-out" href="/inventory">
            <span className="material-symbols-outlined">database</span>
            <span>Asset Inventory</span>
          </Link>
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] hover:text-[#00f2ea] transition-all duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined">history</span>
            <span>Trade History</span>
          </Link>
          <div className="mt-8 px-6">
            <button className="w-full py-3 bg-secondary/10 text-secondary border border-secondary/20 rounded-xl font-bold font-headline flex items-center justify-center gap-2 hover:bg-secondary/20 transition-all">
              <span className="material-symbols-outlined text-sm">add</span>
              New Trade
            </button>
          </div>
          <div className="mt-auto pb-8 space-y-1">
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all" href="#">
              <span className="material-symbols-outlined">help_outline</span>
              <span>Support</span>
            </Link>
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all" href="#">
              <span className="material-symbols-outlined">logout</span>
              <span>Sign Out</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* FAB (Contextual for Home/Marketplace) */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-primary-dim rounded-full shadow-2xl flex items-center justify-center group active:scale-90 transition-all z-50">
        <span className="material-symbols-outlined text-on-primary-container text-3xl group-hover:rotate-90 transition-transform">add</span>
      </button>
    </div>
  );
}
