"use client";

import Image from "next/image";
import {
  Verified,
  Shield,
  PlusCircle,
  Send,
  Grid,
  ShoppingCart,
  Database,
  HelpCircle,
  MessageSquare,
  User,
  Star
} from "lucide-react";
import TopNavBar from "@/components/layout/TopNavBar";
import SideNavBar from "@/components/layout/SideNavBar";
import MobileNavBar from "@/components/layout/MobileNavBar";
import BankInstructions from "@/components/ui/BankInstructions";
import ChatMessage from "@/components/ui/ChatMessage";

export default function BuyerTrade() {
  const sideNavItems = [
    { href: "/", label: "Marketplace", icon: <Grid className="w-6 h-6" /> },
    { href: "/trade/buyer", label: "Buyer Portal", icon: <ShoppingCart className="w-6 h-6" />, isActive: true },
    { href: "#", label: "Asset Inventory", icon: <Database className="w-6 h-6" /> },
  ];

  const bottomNavItems = [
    { href: "#", label: "Help", icon: <HelpCircle className="w-6 h-6" /> },
  ];

  const mobileNavItems = [
    { href: "/", label: "Home", icon: <Grid className="w-5 h-5" /> },
    { href: "/trade/buyer", label: "Trades", icon: <ShoppingCart className="w-5 h-5 fill-primary/20" />, isActive: true },
    { href: "#", label: "Chat", icon: <MessageSquare className="w-5 h-5" /> },
    { href: "#", label: "Profile", icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <TopNavBar activePath="trades" />

      <SideNavBar
        items={sideNavItems}
        bottomItems={bottomNavItems}
        isCollapsed={true}
      />

      <main className="pt-24 pb-12 px-4 md:px-8 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:pl-24">
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
                <Star className="w-8 h-8 text-primary fill-primary" />
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
                <span className="text-secondary text-3xl font-bold">€</span>
                <span className="text-2xl font-headline font-extrabold">4,821.50 EUR</span>
              </div>
              <p className="text-xs text-on-surface-variant mt-4 font-medium italic">Rate: 1 sXAU = 189.08 EUR</p>
            </div>
          </div>

          {/* Payment Instructions */}
          <BankInstructions
            bankName="NeoBank International SE"
            iban="DE89 3704 0044 0532 01"
            accountHolder="Aurum Liquidity Vault LLC"
            referenceCode="XAU-TRADE-9921-ALPHA"
            infoText="Ensure the transfer amount matches exactly. Transfers typically settle within 15-30 minutes for SEPA Instant. Once sent, click the &quot;I Have Paid&quot; button to notify the seller."
          />

          {/* Action Area */}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container py-4 rounded-full font-headline font-extrabold text-lg shadow-lg active:scale-95 transition-all" onClick={() => alert("Payment marked as complete!")}>
              I Have Paid
            </button>
            <button className="bg-surface-container-highest text-error px-8 py-4 rounded-full font-headline font-bold hover:bg-error-container hover:text-on-error transition-all active:scale-95" onClick={() => alert("Trade cancelled.")}>
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
                <Image width={48} height={48} alt="Seller Avatar" className="rounded-full bg-surface-container-highest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrmGe2X8F6w5OR-WjLM7EsBTBNW2uEgVHgT2vyeuqLgIX6n9siimPiaAVoco0uJBEDZlUJUXWKguWoFls5mkHkWLl5mCLLbNBpfTqKbZYK8K2PBt5wWwsu08uE9VH2WnR0WVPhhURw1vrJ4Ga1OAhkHglSi7i4UyJrrN8cbyoFNsNzJO3IgUyTRpUiJRt7pGIxh_TlMK8lTcBbJe68ekObUu4t1k7lIdexVQ3Fj_wSPk-7trx4Nkh_1NyIDhYU-TXpxoyIXk_OaAo" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-surface-container-high"></span>
              </div>
              <div>
                <h4 className="font-headline font-bold">AurumWhale_77</h4>
                <div className="flex items-center gap-1">
                  <Verified className="w-3 h-3 text-secondary fill-secondary/20" />
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

            <ChatMessage
              avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBByKObr0sB_QRAhxqj4KZ-falzEbX34QAHXO0lwx_XHAXGVe6gB4jA1UaPoi9XA6EfppeBtN1KMoYAi6CftG-cO5LPPY_5RnnX5CX5o7zWtlKKumEKLHRq0Kj04eH-w91Oed7buDJ6LqjSZONLCsq8yG-8XB0eGsqVcO90QPX_BjRxk298529xxP_vMn5IGh0xv3B6TcmCM2Gz3XB8w0vM_sSf6gkA3DtVFH6vdT60H3O10OEfYiub-WTOvYzsciaRDFbgnW8CCAY"
              message="Hi there! Thanks for the trade. I'm online and ready to release the sXAU as soon as the transfer hits my account. 🚀"
              timestamp="10:25 AM"
            />

            <ChatMessage
              isCurrentUser={true}
              message="Just initiated the SEPA transfer from my NeoBank account. Should be there in a few minutes!"
              timestamp="10:26 AM"
            />

            {/* System Alert */}
            <div className="bg-secondary/5 border border-secondary/10 p-4 rounded-lg flex gap-3">
              <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
              <p className="text-xs text-on-surface-variant">For your safety, never share your private keys or agree to trade outside of the Aureum escrow system.</p>
            </div>

            <ChatMessage
              avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDKE4bapKY5NmHJRlYLi6ND80Modd9HPYh6OLySbsXtgnj2yJjsLx_eehdR8cxsVvEAggJMKb99WigdBPKBTC_Fgo4xB2SRT94Eg75GyUgG4_S_LsN55Mu0ebUQcFGYIvsVqJ4glZECrLCvb7iA_blXZKXjTGa3AVyQj6PXjO12_OAbkeNBLwivjE-4JMJVxS8mIMXZaVapETRGTmT73VXNiY_SAXIXZU0S31x_fW8RHYX96wqd8K5OvjnxKwXGuR_JKRcnm9sp-Cg"
              message="Perfect. Please don't forget to attach a screenshot of the receipt if possible, helps speed things up!"
              timestamp="10:28 AM"
            />
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-surface-container-high">
            <div className="flex items-center gap-3 bg-surface-container p-2 rounded-full border border-outline-variant/10 focus-within:border-secondary/40 transition-all">
              <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors">
                <PlusCircle className="w-5 h-5 text-on-surface-variant" />
              </button>
              <input className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-sm placeholder:text-on-surface-variant" placeholder="Type a message..." type="text" />
              <button className="w-10 h-10 bg-secondary flex items-center justify-center rounded-full text-on-secondary shadow-lg active:scale-90 transition-all">
                <Send className="w-5 h-5 fill-on-secondary" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <MobileNavBar items={mobileNavItems} />
    </div>
  );
}
