import Link from "next/link";
import Image from "next/image";

export default function BuyerTradeDetail() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d0e13]/80 backdrop-blur-xl flex justify-between items-center px-8 h-20 shadow-[0_20px_40px_rgba(197,154,255,0.08)]">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c59aff] to-[#9547f7] font-headline">Aureum</Link>
          <div className="hidden md:flex items-center gap-6">
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-label" href="/marketplace">Marketplace</Link>
            <Link className="text-[#c59aff] border-b-2 border-[#c59aff] pb-1 font-label" href="#">Trades</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-label" href="#">Wallet</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors font-label" href="#">Help</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          </button>
          <button className="bg-gradient-to-r from-[#c59aff] to-[#9547f7] text-on-primary-container font-headline font-bold px-6 py-2.5 rounded-full active:scale-95 transition-all">
            Connect Wallet
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4 md:px-8 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Trade Details & Instructions */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Order Status Header */}
          <div className="bg-surface-container-low p-8 rounded-xl flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-headline font-extrabold tracking-tight">Trade #XAU-9921</h1>
                <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Awaiting Payment</span>
              </div>
              <p className="text-on-surface-variant font-medium">You are buying synthetic gold from <span className="text-secondary font-bold">AurumWhale_77</span></p>
            </div>
            <div className="text-right">
              <p className="text-on-surface-variant text-sm font-label uppercase tracking-wider">Remaining Time</p>
              <p className="text-2xl font-headline font-bold text-error">14:52</p>
            </div>
          </div>

          {/* Asset Bento Card */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container p-6 rounded-lg border-l-4 border-primary">
              <p className="text-on-surface-variant text-sm mb-1">Asset Amount</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                <span className="text-2xl font-headline font-extrabold">25.50 sXAU</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-full border border-outline-variant/20">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Synthetic Gold</span>
              </div>
            </div>
            <div className="bg-surface-container p-6 rounded-lg border-l-4 border-secondary">
              <p className="text-on-surface-variant text-sm mb-1">Total Payment</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">payments</span>
                <span className="text-2xl font-headline font-extrabold">4,821.50 EUR</span>
              </div>
              <p className="text-xs text-on-surface-variant mt-4 font-medium italic">Rate: 1 sXAU = 189.08 EUR</p>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden">
            <div className="bg-surface-container-high px-8 py-4 border-b border-outline-variant/10">
              <h3 className="font-headline font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">account_balance</span>
                Bank Transfer Instructions
              </h3>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Bank Name</label>
                    <p className="text-lg font-headline font-semibold text-on-surface">NeoBank International SE</p>
                  </div>
                  <div>
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">IBAN</label>
                    <div className="flex items-center justify-between bg-surface-container-highest p-3 rounded-lg mt-1">
                      <span className="font-mono text-secondary">DE89 3704 0044 0532 01</span>
                      <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface">content_copy</button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Account Holder</label>
                    <p className="text-lg font-headline font-semibold text-on-surface">Aurum Liquidity Vault LLC</p>
                  </div>
                  <div>
                    <label className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Reference Code (Mandatory)</label>
                    <div className="flex items-center justify-between bg-primary/10 p-3 rounded-lg mt-1 border border-primary/20">
                      <span className="font-mono text-primary font-bold">XAU-TRADE-9921-ALPHA</span>
                      <button className="material-symbols-outlined text-primary hover:text-on-primary-container">content_copy</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-highest/50 p-4 rounded-lg flex gap-4 items-start border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary">info</span>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Ensure the transfer amount matches exactly. Transfers typically settle within 15-30 minutes for SEPA Instant. Once sent, click the &quot;I Have Paid&quot; button to notify the seller.
                </p>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container py-4 rounded-full font-headline font-extrabold text-lg shadow-lg active:scale-95 transition-all">
              I Have Paid
            </button>
            <button className="bg-surface-container-highest text-error px-8 py-4 rounded-full font-headline font-bold hover:bg-error-container hover:text-on-error transition-all active:scale-95">
              Cancel Trade
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Chat */}
        <div className="lg:col-span-5 h-[calc(100vh-12rem)] flex flex-col bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/5">
          {/* Chat Header */}
          <div className="p-6 bg-surface-container-high flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img alt="Seller Avatar" className="w-12 h-12 rounded-full bg-surface-container-highest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrmGe2X8F6w5OR-WjLM7EsBTBNW2uEgVHgT2vyeuqLgIX6n9siimPiaAVoco0uJBEDZlUJUXWKguWoFls5mkHkWLl5mCLLbNBpfTqKbZYK8K2PBt5wWwsu08uE9VH2WnR0WVPhhURw1vrJ4Ga1OAhkHglSi7i4UyJrrN8cbyoFNsNzJO3IgUyTRpUiJRt7pGIxh_TlMK8lTcBbJe68ekObUu4t1k7lIdexVQ3Fj_wSPk-7trx4Nkh_1NyIDhYU-TXpxoyIXk_OaAo" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-surface-container-high"></span>
              </div>
              <div>
                <h4 className="font-headline font-bold">AurumWhale_77</h4>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-xs text-secondary font-bold uppercase tracking-tighter">Verified Merchant</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Trade Score</p>
              <p className="text-secondary font-headline font-extrabold">99.8%</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            <div className="flex flex-col items-center">
              <span className="bg-surface-container-highest text-[10px] text-on-surface-variant px-3 py-1 rounded-full uppercase tracking-widest font-bold">Trade Started - 10:24 AM</span>
            </div>

            {/* Seller Message */}
            <div className="flex gap-3 max-w-[85%]">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                <img alt="Seller" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBByKObr0sB_QRAhxqj4KZ-falzEbX34QAHXO0lwx_XHAXGVe6gB4jA1UaPoi9XA6EfppeBtN1KMoYAi6CftG-cO5LPPY_5RnnX5CX5o7zWtlKKumEKLHRq0Kj04eH-w91Oed7buDJ6LqjSZONLCsq8yG-8XB0eGsqVcO90QPX_BjRxk298529xxP_vMn5IGh0xv3B6TcmCM2Gz3XB8w0vM_sSf6gkA3DtVFH6vdT60H3O10OEfYiub-WTOvYzsciaRDFbgnW8CCAY" />
              </div>
              <div className="space-y-1">
                <div className="bg-surface-container-highest p-4 rounded-2xl rounded-tl-none">
                  <p className="text-sm leading-relaxed">Hi there! Thanks for the trade. I&apos;m online and ready to release the sXAU as soon as the transfer hits my account. 🚀</p>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium">10:25 AM</span>
              </div>
            </div>

            {/* Buyer Message (User) */}
            <div className="flex flex-row-reverse gap-3 max-w-[85%] ml-auto text-right">
              <div className="space-y-1">
                <div className="bg-primary p-4 rounded-2xl rounded-tr-none text-on-primary-container">
                  <p className="text-sm leading-relaxed font-medium">Just initiated the SEPA transfer from my NeoBank account. Should be there in a few minutes!</p>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium">10:26 AM</span>
              </div>
            </div>

            {/* System Alert */}
            <div className="bg-secondary/5 border border-secondary/10 p-4 rounded-lg flex gap-3">
              <span className="material-symbols-outlined text-secondary">security</span>
              <p className="text-xs text-on-surface-variant">For your safety, never share your private keys or agree to trade outside of the Aureum escrow system.</p>
            </div>

            {/* Seller Message */}
            <div className="flex gap-3 max-w-[85%]">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                <img alt="Seller" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKE4bapKY5NmHJRlYLi6ND80Modd9HPYh6OLySbsXtgnj2yJjsLx_eehdR8cxsVvEAggJMKb99WigdBPKBTC_Fgo4xB2SRT94Eg75GyUgG4_S_LsN55Mu0ebUQcFGYIvsVqJ4glZECrLCvb7iA_blXZKXjTGa3AVyQj6PXjO12_OAbkeNBLwivjE-4JMJVxS8mIMXZaVapETRGTmT73VXNiY_SAXIXZU0S31x_fW8RHYX96wqd8K5OvjnxKwXGuR_JKRcnm9sp-Cg" />
              </div>
              <div className="space-y-1">
                <div className="bg-surface-container-highest p-4 rounded-2xl rounded-tl-none">
                  <p className="text-sm leading-relaxed">Perfect. Please don&apos;t forget to attach a screenshot of the receipt if possible, helps speed things up!</p>
                </div>
                <span className="text-[10px] text-on-surface-variant font-medium">10:28 AM</span>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-surface-container-high">
            <div className="flex items-center gap-3 bg-surface-container p-2 rounded-full border border-outline-variant/10 focus-within:border-secondary/40 transition-all">
              <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant">add_circle</span>
              </button>
              <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder:text-on-surface-variant outline-none" placeholder="Type a message..." type="text" />
              <button className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full text-on-secondary shadow-lg active:scale-90 transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Side Navigation Shell (Desktop) */}
      <aside className="hidden md:flex h-screen w-20 fixed left-0 top-0 pt-24 bg-[#121319] flex-col items-center gap-8 border-r border-[#f7f5fd]/5">
        <Link href="/merchant" className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl border-l-4 border-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
        </Link>
        <Link href="#" className="w-12 h-12 flex items-center justify-center text-[#f7f5fd]/50 hover:bg-[#181920] hover:text-secondary transition-all rounded-xl">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
        <Link href="/inventory" className="w-12 h-12 flex items-center justify-center text-[#f7f5fd]/50 hover:bg-[#181920] hover:text-secondary transition-all rounded-xl">
          <span className="material-symbols-outlined">database</span>
        </Link>
        <Link href="#" className="w-12 h-12 flex items-center justify-center text-[#f7f5fd]/50 hover:bg-[#181920] hover:text-secondary transition-all rounded-xl mt-auto mb-8">
          <span className="material-symbols-outlined">help_outline</span>
        </Link>
      </aside>

      {/* Bottom Navigation (Mobile) */}
      <div className="md:hidden fixed bottom-0 w-full h-16 bg-[#0d0e13]/90 backdrop-blur-xl border-t border-outline-variant/10 flex justify-around items-center px-4 z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[10px] font-bold">Trades</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">chat</span>
          <span className="text-[10px] font-bold">Chat</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>
    </div>
  );
}
