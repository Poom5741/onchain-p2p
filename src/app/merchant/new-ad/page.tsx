import Link from "next/link";
import Image from "next/image";

export default function ForgeNewAd() {
  return (
    <div className="bg-background text-on-surface">
      {/* Shared Component: TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d0e13]/80 backdrop-blur-xl flex justify-between items-center px-8 h-20 shadow-[0_20px_40px_rgba(197,154,255,0.08)]">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c59aff] to-[#9547f7] font-headline">Aureum</Link>
          <div className="hidden md:flex items-center gap-6">
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="/marketplace">Marketplace</Link>
            <Link className="text-[#c59aff] border-b-2 border-[#c59aff] pb-1 font-headline tracking-tight font-bold" href="#">Trades</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="#">Wallet</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="#">Help</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          </button>
          <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined text-on-surface-variant">settings</span>
          </button>
          <button className="bg-gradient-to-r from-[#c59aff] to-[#9547f7] text-on-primary-container font-bold px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(197,154,255,0.4)] transition-all active:scale-95 duration-200">
            Connect Wallet
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        {/* Hero Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tighter mb-4 text-on-surface font-headline">Forge a New Ad</h1>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">Configure your peer-to-peer synthetic trade parameters with the precision of a digital alchemist.</p>
        </header>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-16 relative px-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-highest -z-10 -translate-y-1/2"></div>
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary text-on-primary-container flex items-center justify-center font-bold neon-glow-primary">
              <span className="material-symbols-outlined">layers</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Asset</span>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Pricing</span>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">
              <span className="material-symbols-outlined">tune</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Limits</span>
          </div>
        </div>

        {/* Step 1 Content: Asset Selection & Side */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Asset Selection */}
          <section className="md:col-span-8 space-y-8">
            <div className="bg-surface-container-low p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 font-headline">
                <span className="text-secondary material-symbols-outlined">database</span>
                Select Asset &amp; Side
              </h2>

              {/* Buy/Sell Toggle */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <button className="group p-6 rounded-lg bg-surface-container-highest border-2 border-transparent hover:border-secondary transition-all text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold tracking-widest uppercase text-secondary">Buy Asset</span>
                    <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">check_circle</span>
                  </div>
                  <p className="text-on-surface-variant text-sm">You want to acquire synthetics with Fiat.</p>
                </button>
                <button className="group p-6 rounded-lg bg-surface-container border-2 border-primary/40 text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold tracking-widest uppercase text-primary">Sell Asset</span>
                  </div>
                  <p className="text-on-surface-variant text-sm">Offer your assets for local currency.</p>
                </button>
              </div>

              {/* Synthetic Selection */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest px-1">Synthetic Asset</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Asset: Gold */}
                  <div className="flex items-center gap-4 p-5 rounded-lg bg-surface-container-highest border border-outline-variant/10 cursor-pointer hover:bg-surface-container transition-colors">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#FFD700] to-[#B8860B] flex items-center justify-center">
                      <span className="material-symbols-outlined text-background text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight font-headline">sXAU</h3>
                      <p className="text-xs text-on-surface-variant">Synthetic Gold Oracle</p>
                    </div>
                    <div className="ml-auto">
                      <span className="material-symbols-outlined text-primary">radio_button_checked</span>
                    </div>
                  </div>

                  {/* Asset: Silver */}
                  <div className="flex items-center gap-4 p-5 rounded-lg bg-surface-container-low border border-outline-variant/10 cursor-pointer hover:bg-surface-container-highest transition-colors opacity-60">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#C0C0C0] to-[#708090] flex items-center justify-center">
                      <span className="material-symbols-outlined text-background text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight font-headline">sXAG</h3>
                      <p className="text-xs text-on-surface-variant">Synthetic Silver Oracle</p>
                    </div>
                    <div className="ml-auto">
                      <span className="material-symbols-outlined text-on-surface-variant">radio_button_unchecked</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fiat Selection */}
              <div className="mt-8 space-y-4">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest px-1">Fiat Currency</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-on-surface-variant">public</span>
                  </div>
                  <select className="w-full bg-surface-container-highest border-none rounded-lg py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-secondary/40 transition-all appearance-none outline-none">
                    <option>USD - United States Dollar</option>
                    <option>EUR - Euro</option>
                    <option>GBP - British Pound</option>
                    <option>JPY - Japanese Yen</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Sidebar info/preview */}
          <aside className="md:col-span-4 space-y-6">
            <div className="bg-surface-container p-6 rounded-xl border border-primary/10">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 font-headline">
                <span className="material-symbols-outlined text-primary">info</span>
                Alchemy Tips
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Selling <span className="text-primary font-bold">sXAU</span> allows you to leverage market premiums. Ensure your wallet has sufficient synthetic collateral before finalizing.
              </p>
              <div className="bg-surface-container-low p-4 rounded-lg">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-on-surface-variant">Market Price</span>
                  <span className="font-mono text-secondary">$2,042.45 / oz</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant">Network Fee</span>
                  <span className="font-mono text-error">~0.002 ETH</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img className="w-full h-full object-cover" alt="Digital Asset Visual" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9Adzj07sjRvgB-yIzQYZ0m9OYehmeY0iY2UvxqgWIXxUu6Yta_tOaRgTNIQoYlvANzn5T-VjXXfe4h_4IS01SOQjSKt8_mDi30UvCH9qsBMsC0iCJzEhFjhHvE6d4WP7EFmtBspyXKq6OLghzZZABFbimx6oIwY81YTADiSssCyW7wUfOoWrtZV2L4KnZer_PwAjN4V6YJhNtW8Mvqo7WR4wCr2jNxkt-p0aMB4M8lm6C-Rq80u_KMKgFNqu9Iky0902jUiLIsUA" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary/20 backdrop-blur-md text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">Verified Security</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Navigation Actions */}
        <footer className="mt-12 flex items-center justify-between pt-8 border-t border-surface-container-highest">
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-bold">
            <span className="material-symbols-outlined">arrow_back</span>
            Cancel
          </button>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-surface-container-highest rounded-full text-on-surface-variant font-bold hover:bg-surface-container transition-all">
              Draft
            </button>
            <button className="px-10 py-3 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container rounded-full font-extrabold flex items-center gap-2 neon-glow-primary hover:scale-105 active:scale-95 transition-all">
              Next Step
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </footer>
      </main>

      {/* Mobile Navigation (Hidden on desktop) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#0d0e13]/80 backdrop-blur-xl px-6 py-4 flex justify-around items-center z-50">
        <div className="flex flex-col items-center text-[#c59aff]">
          <span className="material-symbols-outlined">storefront</span>
          <span className="text-[10px] mt-1 font-bold">Market</span>
        </div>
        <div className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[10px] mt-1 font-bold">Buy</span>
        </div>
        <div className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">database</span>
          <span className="text-[10px] mt-1 font-bold">Inventory</span>
        </div>
        <div className="flex flex-col items-center text-on-surface-variant">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[10px] mt-1 font-bold">History</span>
        </div>
      </div>
    </div>
  );
}
