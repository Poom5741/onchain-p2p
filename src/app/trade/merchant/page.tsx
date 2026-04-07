import Image from "next/image";
import {
  Bell,
  Settings,
  Store,
  ShoppingCart,
  Database,
  History,
  HelpCircle,
  LogOut,
  CheckCircle,
  CreditCard,
  LockOpen,
  Phone,
  MoreVertical,
  Maximize2,
  Send,
  PlusCircle,
  User,
  Wallet
} from "lucide-react";
import Link from "next/link";

export default function MerchantTrade() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-[#0d0e13]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(197,154,255,0.08)] flex justify-between items-center px-8 h-20">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c59aff] to-[#9547f7] font-headline">Aureum</span>
          <nav className="hidden md:flex gap-6 font-headline tracking-tight font-bold">
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="/">Marketplace</Link>
            <Link className="text-[#c59aff] border-b-2 border-[#c59aff] pb-1" href="/trade/merchant">Trades</Link>
            <a className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Wallet</a>
            <a className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Help</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
              <Bell className="w-5 h-5 text-on-surface-variant" />
            </button>
            <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95 duration-200">
              <Settings className="w-5 h-5 text-on-surface-variant" />
            </button>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
            <Image width={40} height={40} alt="User profile avatar" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsaXmP_emmZc4SYnp9FEknIHRQi4g1efPzD3Z9o7cGmyVVQider5uf86TeGuK5DXmouPCiFfRceA3lKKTJ0s1TO9CDuTRTXc73j5PaAQYY3lPpp-tmMJMS2amU3geX96dPjat9sDhAtmtjM-RI4Nc_57ruex1XzW5ZihIJyQxKIWbPKqLYupvESnSL9oxbhgwb-dz0_bct-rSGcpgy6yqO_a-q-HKRDk45SmyXip0VS4VRJfL48aWkb-v_jNsSUVbphSHnWU3KiYc" />
          </div>
        </div>
      </header>

      {/* SideNavBar (Desktop Only) */}
      <aside className="h-screen w-64 fixed left-0 top-0 pt-24 hidden lg:flex flex-col bg-[#121319] border-r border-[#f7f5fd]/5 z-40">
        <div className="px-6 mb-8">
          <h2 className="text-lg font-bold text-[#c59aff] font-headline">Aureum P2P</h2>
          <p className="text-xs text-on-surface-variant">The Neon Alchemist</p>
        </div>
        <nav className="flex-grow flex flex-col font-body font-medium text-sm">
          <a className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all" href="/trade/merchant">
            <Store className="w-5 h-5" /> Merchant Dashboard
          </a>
          <a className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all" href="/trade/buyer">
            <ShoppingCart className="w-5 h-5" /> Buyer Portal
          </a>
          <a className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all" href="#">
            <Database className="w-5 h-5" /> Asset Inventory
          </a>
          <a className="flex items-center gap-3 bg-[#c59aff]/10 text-[#c59aff] rounded-r-full py-3 px-6 border-l-4 border-[#c59aff]" href="#">
            <History className="w-5 h-5" /> Trade History
          </a>
        </nav>
        <div className="p-6 mt-auto">
          <button className="w-full bg-[#181920] py-3 rounded-xl border border-[#c59aff]/20 text-[#c59aff] font-bold hover:bg-[#c59aff]/10 transition-all">
            New Trade
          </button>
        </div>
        <div className="border-t border-[#f7f5fd]/5 py-4">
          <a className="flex items-center gap-3 text-[#f7f5fd]/50 py-2 px-6 hover:bg-[#181920]" href="#">
            <HelpCircle className="w-5 h-5 text-sm" /> Support
          </a>
          <a className="flex items-center gap-3 text-[#f7f5fd]/50 py-2 px-6 hover:bg-[#181920]" href="#">
            <LogOut className="w-5 h-5 text-sm" /> Sign Out
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lg:pl-64 pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto p-6 md:p-8 space-y-6">
          {/* Trade Header Notification */}
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <CheckCircle className="w-6 h-6 fill-primary text-on-primary" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-headline font-bold text-on-surface">Buyer has marked as paid</h1>
                <p className="text-on-surface-variant text-sm md:text-base">Order #AX-9942 • Please verify payment in your bank account before releasing.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-on-surface-variant text-sm font-medium">Auto-cancel in 08:42</span>
            </div>
          </div>

          {/* Bento Layout Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Trade Details */}
            <div className="lg:col-span-4 space-y-6">
              {/* Asset Card */}
              <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
                <div className="relative z-10">
                  <span className="bg-secondary-container text-on-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Selling Asset</span>
                  <div className="mt-6">
                    <h3 className="text-4xl font-headline font-extrabold text-on-surface">50.00 sXAG</h3>
                    <p className="text-on-surface-variant font-medium">Synthetic Silver Ounces</p>
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Price per unit</span>
                      <span className="text-on-surface font-bold">$24.85 USD</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Total Receive</span>
                      <span className="text-on-surface font-bold text-lg text-secondary">$1,242.50 USD</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-12 -bottom-12 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Image width={192} height={192} alt="Metallic silver asset" className="w-48 h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnXA9tstEu3QE_jKazCrKJWXqG9NvxdC0eL5M9oMvUztpPtHQZSy3gLaFG-_llwWr7bTj6D9jIL2VBfhbtswej_Q1F2lBRQB7a1KE-mq0B7yHvJIIcwp3be5PtCsobvuMEUiEkwCo5Jd6SADmZc3yLsrh29cMK1JJ4oHJs5gln2_qVpsfqaQouBFeFLwB1gmZT21YlFatOesOqc2IdvmiYtGyawjm04T9SOJDY9bl6wHXhMqLIYLsNQN_zI5WqX35vsderBjnieow" />
                </div>
              </div>

              {/* Payment Details Card */}
              <div className="bg-surface-container p-6 rounded-xl space-y-4">
                <h4 className="font-headline font-bold text-on-surface flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-secondary" /> Payment Method
                </h4>
                <div className="bg-surface-container-highest p-4 rounded-lg">
                  <p className="text-xs text-on-surface-variant mb-1">Zelle Transfer</p>
                  <p className="text-on-surface font-bold">alchemist.pay@aureum.p2p</p>
                  <p className="text-sm text-on-surface-variant mt-2">Memo: Trade Ref AX-9942</p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20">
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Always check your external account for the exact amount. Do not rely solely on buyer screenshots.
                  </p>
                </div>
              </div>

              {/* Action Column */}
              <div className="space-y-4">
                <button className="w-full h-16 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-headline font-bold rounded-full shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                  <LockOpen className="w-5 h-5 fill-on-primary-container text-primary-dim" />
                  Release Crypto
                </button>
                <button className="w-full py-4 bg-surface-container-highest text-secondary font-bold rounded-full hover:bg-surface-container-high transition-all border border-secondary/10">
                  Appeal Trade
                </button>
              </div>
            </div>

            {/* Right Column: Chat Interface */}
            <div className="lg:col-span-8 flex flex-col bg-surface-container rounded-xl overflow-hidden min-h-[600px]">
              {/* Chat Header */}
              <div className="bg-surface-container-high px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                      <Image width={40} height={40} alt="Buyer avatar" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfIZDCYFDijH1xpMcYddZoSEn5yr-WWH9bP4jQwhSBxktElvVMBsTl1OdA7FZneElZvCaeMSFc9FXYwOrDIN_R8bsqy4UuX4NMRayvPMKdKREI1zSoBO9HfmX5yA30wEq4wt2rghG5GYOVuGZQh7_pvC3l4ovZ2HKprz584wSa2c8z6jBj_XvUNw0FG3g9CrOMRL776Ljxkl_1JVt9H1V-ILCN2Wjpe6FlTESCr4QCljSIRFWDSO41U_-RndNc5gUnw2XxhO1dDWo" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-surface-container-high"></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">NeonTrader_88</p>
                    <p className="text-xs text-secondary">Online • 4.98 Rating</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors">
                    <Phone className="w-5 h-5 text-on-surface-variant" />
                  </button>
                  <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-on-surface-variant" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-grow p-6 space-y-6 overflow-y-auto">
                {/* System Message */}
                <div className="flex justify-center">
                  <span className="bg-surface-container-low px-4 py-1 rounded-full text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Trade Started Oct 24, 14:20</span>
                </div>

                {/* Buyer Message */}
                <div className="flex gap-4 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest mt-1 overflow-hidden flex-shrink-0">
                    <Image width={32} height={32} alt="Buyer avatar" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcr9j_QVnL2Dg3IQs2ApBKupL2MVZYYrIBncK23gQu3eZEldF2u5ZNpPB0GZgfRMvM85V7R7rWFacNMU2nWyxjRtacx1rpz31MtI7zGiU8UfxTw6M6XgcrdKe1LIiNSkbe-1EUqEsmDSLdrjshP8RBZ4_mUABrH_alFVvxBHZEcL1qvuGzqCGnrYgHxKzsNOEzl0nTL4PqVWG2ub4lnnZ1vMF1tkgQ0h5Z9ksdHG1lbKk5GeICWoJarjDR5A67o61NSxKNlo9qihI" />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-surface-container-highest p-4 rounded-2xl rounded-tl-none">
                      <p className="text-sm text-on-surface">Hi there! Sending the payment now. Please wait a moment.</p>
                    </div>
                    <span className="text-[10px] text-on-surface-variant ml-2">14:21</span>
                  </div>
                </div>

                {/* Buyer Message with Image */}
                <div className="flex gap-4 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest mt-1 overflow-hidden flex-shrink-0">
                    <Image width={32} height={32} alt="Buyer avatar" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAISrtxQK5CQrHEteq55geYGFYnLCreT2udOvQ_I39S4jAdiINuwIyDCJuxWbYSjsj4d3hBW3Z9EVAvhd2VQR8HFHbGIX8vqacZP706vmebjdxbMm7KwUkXrR7OPgu5ny3P7zkxi_3mnF88sx3jsJjJyRfbRcOwQcAOkEq2XL9dwVqDe4MtuYvBfXmhmcbMEl-4TQzvkKxknXIQ1pF8rokYOHHskiapb_8qncNKhjmy3AIoVdfax4CHO3ReCYgjqipkB9xD2BKmOOg" />
                  </div>
                  <div className="space-y-3">
                    <div className="bg-surface-container-highest p-4 rounded-2xl rounded-tl-none space-y-3">
                      <p className="text-sm text-on-surface">Payment sent! Attached the receipt below. Please release when you confirm.</p>
                      <div className="rounded-xl overflow-hidden border border-outline-variant/10 group cursor-pointer">
                        <Image width={400} height={225} alt="Payment Proof" className="w-full aspect-video object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYq243dfPul0bQuYTFEqs9DumHwUxXTF2jzPPbwxoeW1D8kO2I90WDLYwX99KoATncKGUGHEbWxVcCyv0yAaIXcqZkXgCmuokVmmS8GDaHEbguJb4BD4qYFitHYJHasYGsQlxjx5jkM6QpgbjCJV6B9Qc8p94ZDAOqFcjnRE6SURSTdvbkHBn5r6nEqg3r4RPO8VWoKcOyfU3S6AjZzfWopvjnbJkFPrFKnghc-aqp8hBz-kOQwwjR2Ci56bLTtC2lZf8SpIUAkiM" />
                        <div className="p-2 bg-surface-container-low flex items-center justify-between">
                          <span className="text-[10px] text-on-surface-variant">receipt_AX9942.jpg</span>
                          <Maximize2 className="w-4 h-4 text-secondary" />
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-on-surface-variant ml-2">14:25</span>
                  </div>
                </div>

                {/* Merchant (Self) Message */}
                <div className="flex flex-row-reverse gap-4 ml-auto max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="space-y-2 text-right">
                    <div className="bg-primary/10 p-4 rounded-2xl rounded-tr-none border border-primary/20">
                      <p className="text-sm text-on-surface">Received the notification. Checking my bank account now, will release in a minute if everything looks good!</p>
                    </div>
                    <span className="text-[10px] text-on-surface-variant mr-2">14:26</span>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-6 bg-surface-container-high">
                <div className="flex items-center gap-4 bg-surface-container-highest rounded-full px-6 py-2 border border-outline-variant/10 focus-within:border-secondary/40 transition-all">
                  <button className="text-on-surface-variant hover:text-secondary transition-colors">
                    <PlusCircle className="w-5 h-5" />
                  </button>
                  <input className="bg-transparent border-none outline-none focus:ring-0 w-full text-sm py-3 text-on-surface placeholder:text-on-surface-variant" placeholder="Write a message..." type="text" />
                  <button className="text-secondary p-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-all">
                    <Send className="w-5 h-5 fill-secondary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <footer className="md:hidden fixed bottom-0 w-full bg-surface-container-low border-t border-outline-variant/10 flex justify-around items-center h-20 px-4 z-50">
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <Store className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <History className="w-5 h-5 fill-primary" />
          <span className="text-[10px] font-bold">Trades</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <Wallet className="w-5 h-5" />
          <span className="text-[10px] font-bold">Wallet</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </footer>
    </div>
  );
}
