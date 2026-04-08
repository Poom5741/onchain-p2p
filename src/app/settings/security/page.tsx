import Link from "next/link";
import Image from "next/image";

export default function SecuritySettings() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary/30 selection:text-primary min-h-screen">
      {/* Top Navigation Shell */}
      <nav className="bg-[#0d0e13]/80 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_20px_40px_rgba(197,154,255,0.08)] flex justify-between items-center px-8 h-20">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c59aff] to-[#9547f7] font-headline">Aureum</Link>
          <div className="hidden md:flex gap-6">
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="/marketplace">Marketplace</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="#">Trades</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="#">Wallet</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="#">Help</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-[#f7f5fd]/60 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined align-middle" data-icon="notifications">notifications</span>
          </button>
          <button className="p-2 text-[#c59aff] border-b-2 border-[#c59aff] pb-1 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined align-middle" data-icon="settings">settings</span>
          </button>
          <div className="h-10 w-10 rounded-full overflow-hidden border border-primary/20">
            <img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjPyfvYY_m4giafi0Gn-u1fuYr_kBv-43aVQerJD1a1efJpnl0g1lQ6w6ehcXvl5jS82QsvI5g2GfjTR5Jl7CCOTCydKZvOoXFzwvzwBHMbQklnVIWkbiwySzKxh-dZoHAoqSrdlsgfeTO_OWX7HdRI88k3O_GKNUaimc12-LXXqiX52L9E8x20gSvTtBB5l8K6_eLwwoFxDA4RevkCYUU1G3A3FRWR9MxWAI1IDfPNNHRjBLF_GV0r57D7v-WSY6picOQhBK5cK0" />
          </div>
        </div>
      </nav>

      {/* Side Navigation Shell (Hidden on Mobile) */}
      <aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 pt-24 bg-[#121319] border-r border-[#f7f5fd]/5 z-40">
        <div className="px-6 mb-8">
          <span className="text-lg font-bold text-[#c59aff] font-headline">Aureum P2P</span>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#f7f5fd]/40 mt-1">The Neon Alchemist</p>
        </div>
        <div className="flex flex-col flex-1">
          <nav className="space-y-1">
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm" href="/merchant">
              <span className="material-symbols-outlined text-xl align-middle" data-icon="storefront">storefront</span>
              <span>Merchant Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm" href="#">
              <span className="material-symbols-outlined text-xl align-middle" data-icon="shopping_cart">shopping_cart</span>
              <span>Buyer Portal</span>
            </Link>
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm" href="/inventory">
              <span className="material-symbols-outlined text-xl align-middle" data-icon="database">database</span>
              <span>Asset Inventory</span>
            </Link>
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm" href="#">
              <span className="material-symbols-outlined text-xl align-middle" data-icon="history">history</span>
              <span>Trade History</span>
            </Link>
          </nav>
          <div className="mt-auto pb-8 border-t border-[#f7f5fd]/5 pt-4">
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm" href="#">
              <span className="material-symbols-outlined text-xl align-middle" data-icon="help_outline">help_outline</span>
              <span>Support</span>
            </Link>
            <Link className="flex items-center gap-3 text-error/70 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm" href="#">
              <span className="material-symbols-outlined text-xl align-middle" data-icon="logout">logout</span>
              <span>Sign Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="lg:ml-64 pt-28 pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Page Header & Identity Badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-on-surface">Security &amp; <span className="text-secondary">Payments</span></h1>
              <p className="text-on-surface-variant max-w-xl">Configure your payment gateways and fortify your digital vault with advanced cryptographic protection.</p>
            </div>
            {/* KYC Badge */}
            <div className="bg-surface-container border border-secondary/20 rounded-xl px-5 py-3 flex items-center gap-4">
              <div className="bg-secondary/10 p-2 rounded-full">
                <span className="material-symbols-outlined text-secondary align-middle" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-secondary/70">Account Status</p>
                <p className="text-on-surface font-headline font-bold">Verified Merchant</p>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Payment Methods Section (Wide) */}
            <section className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-bold font-headline">Payment Gateways</h2>
                <button className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-secondary-fixed transition-colors">
                  <span className="material-symbols-outlined text-lg align-middle" data-icon="add_circle">add_circle</span>
                  Add New Gateway
                </button>
              </div>
              <div className="bg-surface-container-low rounded-xl overflow-hidden">
                {/* Method Item: Bank */}
                <div className="p-6 flex items-center justify-between border-b border-surface-container-highest last:border-0 hover:bg-surface-container transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl align-middle" data-icon="account_balance">account_balance</span>
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-on-surface">Main Savings (Bank)</h3>
                      <p className="text-sm text-on-surface-variant">JPMorgan Chase •••• 4492</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Primary</span>
                    <button className="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant"><span className="material-symbols-outlined text-lg align-middle" data-icon="edit">edit</span></button>
                    <button className="p-2 hover:bg-error/10 rounded-full text-error/60"><span className="material-symbols-outlined text-lg align-middle" data-icon="delete">delete</span></button>
                  </div>
                </div>
                {/* Method Item: Revolut */}
                <div className="p-6 flex items-center justify-between border-b border-surface-container-highest last:border-0 hover:bg-surface-container transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-2xl align-middle" data-icon="credit_card">credit_card</span>
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-on-surface">Revolut Business</h3>
                      <p className="text-sm text-on-surface-variant">@aureum_trades • EUR / USD</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant"><span className="material-symbols-outlined text-lg align-middle" data-icon="edit">edit</span></button>
                    <button className="p-2 hover:bg-error/10 rounded-full text-error/60"><span className="material-symbols-outlined text-lg align-middle" data-icon="delete">delete</span></button>
                  </div>
                </div>
                {/* Method Item: Zelle */}
                <div className="p-6 flex items-center justify-between border-b border-surface-container-highest last:border-0 hover:bg-surface-container transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-dim">
                      <span className="material-symbols-outlined text-2xl align-middle" data-icon="bolt">bolt</span>
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-on-surface">Zelle Personal</h3>
                      <p className="text-sm text-on-surface-variant">aureum.vault@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant"><span className="material-symbols-outlined text-lg align-middle" data-icon="edit">edit</span></button>
                    <button className="p-2 hover:bg-error/10 rounded-full text-error/60"><span className="material-symbols-outlined text-lg align-middle" data-icon="delete">delete</span></button>
                  </div>
                </div>
              </div>

              {/* Security Alert Card */}
              <div className="bg-gradient-to-r from-primary-dim/10 to-transparent p-6 rounded-xl border border-primary/10 flex items-start gap-4">
                <span className="material-symbols-outlined text-primary align-middle" data-icon="security">security</span>
                <div className="space-y-1">
                  <h4 className="font-bold text-on-surface">Fraud Protection Active</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">All payment gateways are monitored by the Aureum Alchemist engine. Transactions are escrowed until the asset is verified on-chain.</p>
                </div>
              </div>
            </section>

            {/* Security Sidebar (Narrow) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-surface-container-low rounded-xl p-6 space-y-6">
                <h2 className="text-xl font-bold font-headline">Security Center</h2>
                {/* Toggle Controls */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-bold text-sm text-on-surface">Two-Factor Auth</p>
                      <p className="text-[10px] text-on-surface-variant">Authenticator App / SMS</p>
                    </div>
                    <div className="w-12 h-6 bg-secondary rounded-full relative flex items-center px-1">
                      <div className="w-4 h-4 bg-surface-container-lowest rounded-full absolute right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-bold text-sm text-on-surface">Bio-Unlock</p>
                      <p className="text-[10px] text-on-surface-variant">Use Fingerprint or FaceID</p>
                    </div>
                    <div className="w-12 h-6 bg-surface-container-highest rounded-full relative flex items-center px-1">
                      <div className="w-4 h-4 bg-on-surface-variant rounded-full absolute left-1"></div>
                    </div>
                  </div>
                </div>
                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-surface-container-highest">
                  <button className="w-full text-left p-3 rounded-lg bg-surface-container hover:bg-surface-container-highest transition-colors flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors align-middle" data-icon="lock_reset">lock_reset</span>
                      <span className="text-sm font-medium">Change Password</span>
                    </div>
                    <span className="material-symbols-outlined text-sm text-on-surface-variant align-middle" data-icon="chevron_right">chevron_right</span>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-surface-container hover:bg-surface-container-highest transition-colors flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors align-middle" data-icon="key">key</span>
                      <span className="text-sm font-medium">Passkey Settings</span>
                    </div>
                    <span className="material-symbols-outlined text-sm text-on-surface-variant align-middle" data-icon="chevron_right">chevron_right</span>
                  </button>
                </div>
              </div>

              {/* Sessions List */}
              <div className="bg-surface-container-low rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm font-headline">Active Sessions</h3>
                  <button className="text-[10px] font-bold text-error uppercase tracking-wider">Kill All</button>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-secondary text-lg mt-1 align-middle" data-icon="devices">devices</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">MacBook Pro M2 • London, UK</p>
                      <p className="text-[10px] text-on-surface-variant">Current Session • Chrome</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start opacity-60">
                    <span className="material-symbols-outlined text-on-surface-variant text-lg mt-1 align-middle" data-icon="smartphone">smartphone</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">iPhone 15 Pro • Berlin, DE</p>
                      <p className="text-[10px] text-on-surface-variant">2 hours ago • Aureum App</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Trade Security Visual (Marketing Component) */}
          <div className="relative w-full h-48 rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent z-10"></div>
            <img alt="Trade Security Visual" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTSpRTCV7luxorES2X8mzPP-ET0ZbNqAkFxRQbVP8kJVvgajvBAIJEF5JIgtGIKZCAG1cs87IhhaQL630L92MMO0i2W4eNp5QfCkqHQZjmmG0eo0u-95qQtQj8pcsH_Ol_008q0YT3l7bgkSk8oiZAEL0N6O5DR7ropxCHLAQTwdc0BvqB80ia2RB8wNgjlSZPzHOmPXXwqEoN8yPvOCKiYUp50zAtf4tHRKmLapuhj6iOzPSjdqLj5yds67KF2RtLiYqJq5XpTSE" />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-extrabold font-headline text-on-surface">Immutable Escrow</h2>
              <p className="text-on-surface-variant max-w-sm mt-2 text-sm leading-relaxed">Your funds never touch central servers. They are locked in an alchemical smart contract until trade fulfillment.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Shell (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#121319]/90 backdrop-blur-xl border-t border-[#f7f5fd]/5 z-50 flex items-center justify-around h-20 px-4 shadow-[0_-20px_40px_rgba(197,154,255,0.08)]">
        <button className="flex flex-col items-center gap-1 text-[#f7f5fd]/50">
          <span className="material-symbols-outlined align-middle" data-icon="storefront">storefront</span>
          <span className="text-[10px] font-bold">Market</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#f7f5fd]/50">
          <span className="material-symbols-outlined align-middle" data-icon="history">history</span>
          <span className="text-[10px] font-bold">History</span>
        </button>
        <div className="relative -top-6">
          <button className="w-14 h-14 bg-gradient-to-br from-[#c59aff] to-[#9547f7] rounded-full shadow-lg flex items-center justify-center text-[#330066] active:scale-95 transition-transform">
            <span className="material-symbols-outlined align-middle" data-icon="add" style={{ fontVariationSettings: "'wght' 700" }}>add</span>
          </button>
        </div>
        <button className="flex flex-col items-center gap-1 text-[#f7f5fd]/50">
          <span className="material-symbols-outlined align-middle" data-icon="account_balance_wallet">account_balance_wallet</span>
          <span className="text-[10px] font-bold">Wallet</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#c59aff]">
          <span className="material-symbols-outlined align-middle" data-icon="settings" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
          <span className="text-[10px] font-bold">Settings</span>
        </button>
      </nav>
    </div>
  );
}
