import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Settings,
  Store,
  ShoppingCart,
  Database,
  History,
  HelpCircle,
  LogOut,
  BadgeCheck,
  PlusCircle,
  Landmark,
  CreditCard,
  Zap,
  Edit2,
  Trash2,
  ShieldAlert,
  RotateCcw,
  KeyRound,
  MonitorSmartphone,
  Smartphone,
  ChevronRight,
  Wallet
} from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/30 selection:text-primary">
      {/* Top Navigation Shell */}
      <nav className="bg-[#0d0e13]/80 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_20px_40px_rgba(197,154,255,0.08)] flex justify-between items-center px-8 h-20">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c59aff] to-[#9547f7] font-headline">Aureum</span>
          <div className="hidden md:flex gap-6">
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="/">Marketplace</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="/trade/buyer">Trades</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="#">Wallet</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-headline tracking-tight font-bold" href="#">Help</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-[#f7f5fd]/60 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-[#c59aff] border-b-2 border-[#c59aff] pb-1 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
            <Settings className="w-5 h-5" />
          </button>
          <div className="h-10 w-10 rounded-full overflow-hidden border border-primary/20">
            <Image width={40} height={40} alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjPyfvYY_m4giafi0Gn-u1fuYr_kBv-43aVQerJD1a1efJpnl0g1lQ6w6ehcXvl5jS82QsvI5g2GfjTR5Jl7CCOTCydKZvOoXFzwvzwBHMbQklnVIWkbiwySzKxh-dZoHAoqSrdlsgfeTO_OWX7HdRI88k3O_GKNUaimc12-LXXqiX52L9E8x20gSvTtBB5l8K6_eLwwoFxDA4RevkCYUU1G3A3FRWR9MxWAI1IDfPNNHRjBLF_GV0r57D7v-WSY6picOQhBK5cK0" />
          </div>
        </div>
      </nav>

      {/* Side Navigation Shell (Hidden on Mobile) */}
      <aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 pt-24 bg-[#121319] border-r border-[#f7f5fd]/5 z-40">
        <div className="px-6 mb-8">
          <span className="text-lg font-bold text-[#c59aff] font-headline">Aureum P2P</span>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#f7f5fd]/40 mt-1 font-body">The Neon Alchemist</p>
        </div>
        <div className="flex flex-col flex-1">
          <nav className="space-y-1">
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm font-body" href="/merchant">
              <Store className="w-5 h-5" />
              <span>Merchant Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm font-body" href="/trade/buyer">
              <ShoppingCart className="w-5 h-5" />
              <span>Buyer Portal</span>
            </Link>
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm font-body" href="/inventory">
              <Database className="w-5 h-5" />
              <span>Asset Inventory</span>
            </Link>
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm font-body" href="#">
              <History className="w-5 h-5" />
              <span>Trade History</span>
            </Link>
          </nav>
          <div className="mt-auto pb-8 border-t border-[#f7f5fd]/5 pt-4">
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm font-body" href="#">
              <HelpCircle className="w-5 h-5" />
              <span>Support</span>
            </Link>
            <Link className="flex items-center gap-3 text-error/70 py-3 px-6 hover:bg-[#181920] transition-all font-medium text-sm font-body" href="#">
              <LogOut className="w-5 h-5" />
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
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-on-surface">Security & <span className="text-secondary">Payments</span></h1>
              <p className="text-on-surface-variant max-w-xl font-body">Configure your payment gateways and fortify your digital vault with advanced cryptographic protection.</p>
            </div>
            {/* KYC Badge */}
            <div className="bg-surface-container border border-secondary/20 rounded-xl px-5 py-3 flex items-center gap-4">
              <div className="bg-secondary/10 p-2 rounded-full">
                <BadgeCheck className="w-6 h-6 text-secondary fill-secondary/20" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-secondary/70 font-body">Account Status</p>
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
                <button className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-secondary-fixed transition-colors font-body">
                  <PlusCircle className="w-5 h-5" />
                  Add New Gateway
                </button>
              </div>

              <div className="bg-surface-container-low rounded-xl overflow-hidden">
                {/* Method Item: Bank */}
                <div className="p-6 flex items-center justify-between border-b border-surface-container-highest last:border-0 hover:bg-surface-container transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                      <Landmark className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-on-surface">Main Savings (Bank)</h3>
                      <p className="text-sm text-on-surface-variant font-body">JPMorgan Chase •••• 4492</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter font-body">Primary</span>
                    <button className="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant"><Edit2 className="w-5 h-5" /></button>
                    <button className="p-2 hover:bg-error/10 rounded-full text-error/60"><Trash2 className="w-5 h-5" /></button>
                  </div>
                </div>

                {/* Method Item: Revolut */}
                <div className="p-6 flex items-center justify-between border-b border-surface-container-highest last:border-0 hover:bg-surface-container transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-on-surface">Revolut Business</h3>
                      <p className="text-sm text-on-surface-variant font-body">@aureum_trades • EUR / USD</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant"><Edit2 className="w-5 h-5" /></button>
                    <button className="p-2 hover:bg-error/10 rounded-full text-error/60"><Trash2 className="w-5 h-5" /></button>
                  </div>
                </div>

                {/* Method Item: Zelle */}
                <div className="p-6 flex items-center justify-between border-b border-surface-container-highest last:border-0 hover:bg-surface-container transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-dim">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-on-surface">Zelle Personal</h3>
                      <p className="text-sm text-on-surface-variant font-body">aureum.vault@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant"><Edit2 className="w-5 h-5" /></button>
                    <button className="p-2 hover:bg-error/10 rounded-full text-error/60"><Trash2 className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>

              {/* Security Alert Card */}
              <div className="bg-gradient-to-r from-primary-dim/10 to-transparent p-6 rounded-xl border border-primary/10 flex items-start gap-4">
                <ShieldAlert className="w-6 h-6 text-primary shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-bold text-on-surface font-body">Fraud Protection Active</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-body">All payment gateways are monitored by the Aureum Alchemist engine. Transactions are escrowed until the asset is verified on-chain.</p>
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
                      <p className="font-bold text-sm text-on-surface font-body">Two-Factor Auth</p>
                      <p className="text-[10px] text-on-surface-variant font-body">Authenticator App / SMS</p>
                    </div>
                    <div className="w-12 h-6 bg-secondary rounded-full relative flex items-center px-1 cursor-pointer">
                      <div className="w-4 h-4 bg-surface-container-lowest rounded-full absolute right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-bold text-sm text-on-surface font-body">Bio-Unlock</p>
                      <p className="text-[10px] text-on-surface-variant font-body">Use Fingerprint or FaceID</p>
                    </div>
                    <div className="w-12 h-6 bg-surface-container-highest rounded-full relative flex items-center px-1 cursor-pointer">
                      <div className="w-4 h-4 bg-on-surface-variant rounded-full absolute left-1"></div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-surface-container-highest">
                  <button className="w-full text-left p-3 rounded-lg bg-surface-container hover:bg-surface-container-highest transition-colors flex items-center justify-between group font-body">
                    <div className="flex items-center gap-3">
                      <RotateCcw className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium">Change Password</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-on-surface-variant" />
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-surface-container hover:bg-surface-container-highest transition-colors flex items-center justify-between group font-body">
                    <div className="flex items-center gap-3">
                      <KeyRound className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium">Passkey Settings</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-on-surface-variant" />
                  </button>
                </div>
              </div>

              {/* Sessions List */}
              <div className="bg-surface-container-low rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm font-headline">Active Sessions</h3>
                  <button className="text-[10px] font-bold text-error uppercase tracking-wider font-body">Kill All</button>
                </div>
                <div className="space-y-3 font-body">
                  <div className="flex gap-3 items-start">
                    <MonitorSmartphone className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="text-xs font-bold text-on-surface">MacBook Pro M2 • London, UK</p>
                      <p className="text-[10px] text-on-surface-variant">Current Session • Chrome</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start opacity-60">
                    <Smartphone className="w-5 h-5 text-on-surface-variant mt-1" />
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
            <Image width={1000} height={400} alt="Trade Security Visual" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTSpRTCV7luxorES2X8mzPP-ET0ZbNqAkFxRQbVP8kJVvgajvBAIJEF5JIgtGIKZCAG1cs87IhhaQL630L92MMO0i2W4eNp5QfCkqHQZjmmG0eo0u-95qQtQj8pcsH_Ol_008q0YT3l7bgkSk8oiZAEL0N6O5DR7ropxCHLAQTwdc0BvqB80ia2RB8wNgjlSZPzHOmPXXwqEoN8yPvOCKiYUp50zAtf4tHRKmLapuhj6iOzPSjdqLj5yds67KF2RtLiYqJq5XpTSE" />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-extrabold font-headline text-on-surface">Immutable Escrow</h2>
              <p className="text-on-surface-variant max-w-sm mt-2 text-sm leading-relaxed font-body">Your funds never touch central servers. They are locked in an alchemical smart contract until trade fulfillment.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Shell (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#121319]/90 backdrop-blur-xl border-t border-[#f7f5fd]/5 z-50 flex items-center justify-around h-20 px-4 shadow-[0_-20px_40px_rgba(197,154,255,0.08)]">
        <Link className="flex flex-col items-center gap-1 text-[#f7f5fd]/50" href="/merchant">
          <Store className="w-6 h-6" />
          <span className="text-[10px] font-bold font-body">Market</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-[#f7f5fd]/50" href="#">
          <History className="w-6 h-6" />
          <span className="text-[10px] font-bold font-body">History</span>
        </Link>
        <div className="relative -top-6">
          <button className="w-14 h-14 bg-gradient-to-br from-[#c59aff] to-[#9547f7] rounded-full shadow-[0_0_15px_rgba(197,154,255,0.4)] flex items-center justify-center text-[#330066] active:scale-95 transition-transform">
            <PlusCircle className="w-8 h-8 font-bold" />
          </button>
        </div>
        <Link className="flex flex-col items-center gap-1 text-[#f7f5fd]/50" href="#">
          <Wallet className="w-6 h-6" />
          <span className="text-[10px] font-bold font-body">Wallet</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-[#c59aff]" href="/security">
          <Settings className="w-6 h-6 fill-primary/20 text-primary" />
          <span className="text-[10px] font-bold font-body">Settings</span>
        </Link>
      </nav>
    </div>
  );
}
