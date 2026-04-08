import {
  Store,
  ShoppingCart,
  Database,
  History,
  PlusCircle,
  HelpCircle,
  LogOut,
  BadgeCheck,
  Wallet,
  Megaphone,
  ArrowLeftRight,
  ArrowUpRight,
  ArrowDownLeft,
  User,
} from "lucide-react";
import TopNavBar from "@/components/layout/TopNavBar";
import SideNavBar from "@/components/layout/SideNavBar";
import MobileNavBar from "@/components/layout/MobileNavBar";
import AdCard from "@/components/cards/AdCard";
import HistoryItem from "@/components/cards/HistoryItem";

export default function MerchantDashboard() {
  const sideNavItems = [
    { href: "/merchant", label: "Merchant Dashboard", icon: <Store className="w-5 h-5" />, isActive: true },
    { href: "/trade/buyer", label: "Buyer Portal", icon: <ShoppingCart className="w-5 h-5" /> },
    { href: "/inventory", label: "Asset Inventory", icon: <Database className="w-5 h-5" /> },
    { href: "#", label: "Trade History", icon: <History className="w-5 h-5" /> },
  ];

  const bottomNavItems = [
    { href: "#", label: "Support", icon: <HelpCircle className="w-5 h-5" /> },
    { href: "#", label: "Sign Out", icon: <LogOut className="w-5 h-5" /> },
  ];

  const mobileNavItems = [
    { href: "/merchant", label: "Dashboard", icon: <Store className="w-5 h-5" />, isActive: true },
    { href: "#", label: "Ads", icon: <Megaphone className="w-5 h-5" /> },
    { href: "/trade/buyer", label: "Trades", icon: <ArrowLeftRight className="w-5 h-5" /> },
    { href: "#", label: "Account", icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/30">
      <TopNavBar activePath="marketplace" />

      <SideNavBar
        items={sideNavItems}
        bottomItems={bottomNavItems}
        headerIcon={<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center text-on-primary font-bold text-xl">A</div>}
        actionButton={
          <button className="w-full bg-secondary text-on-secondary py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
            <PlusCircle className="w-5 h-5 fill-secondary text-on-secondary" />
            New Trade
          </button>
        }
      />

      {/* Main Content Canvas */}
      <main className="lg:pl-64 pt-24 pb-12 px-8 min-h-screen">
        {/* Header & Stats Section */}
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight font-headline text-on-surface mb-2">Merchant Command</h1>
              <p className="text-on-surface-variant font-body">Manage your synthetic alchemy and peer-to-peer liquidity.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-surface-container-low px-6 py-3 rounded-2xl flex items-center gap-4 border border-outline-variant/10">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Reliability</p>
                  <p className="text-xl font-bold text-secondary">98.5%</p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-secondary/20 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-secondary fill-secondary/20" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Bento Grid Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Total Volume Main Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-surface-container-low to-surface-container rounded-xl p-8 relative overflow-hidden group border border-outline-variant/10">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Wallet className="w-32 h-32 text-on-surface" />
            </div>
            <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Total Ecosystem Volume</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-3 relative z-10">
                <span className="text-5xl font-extrabold font-headline">€142,500</span>
                <span className="text-secondary font-bold">+12.4%</span>
              </div>
              <div className="flex gap-4 mt-2 relative z-10">
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
            <Megaphone className="text-primary w-8 h-8 mb-4" />
            <div>
              <p className="text-4xl font-extrabold font-headline mb-1">12</p>
              <p className="text-on-surface-variant text-sm font-bold">Active Listings</p>
            </div>
          </div>

          {/* Pending Trades */}
          <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between border-b-4 border-secondary">
            <ArrowLeftRight className="text-secondary w-8 h-8 mb-4" />
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
              <AdCard
                assetName="Sell sXAU (Synthetic Gold)"
                assetDetails="Limit: €500 - €5,000 | Bank Transfer"
                assetSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAz1GJdw6QZuGQblk4NcYZ4ad5XMNpYe4MUyL0lDsOQhpbrCVtYs4qXq4K7nrJYl8ZSP5OkurdqJlfIMz48w7vgP1ZRfHicxPDKwpVJngXa13h5xLgm96EI82I07zk7h2yfZR0baCTLZvFkNX7qQcUIT6pZ0F6HWe5XMkBLabJKW57z6pxqhO-gvK0PQ4E8ir-8ioZkr7s4CG0pxBZTF4oc3NdYyHk4bCoKQ1Mj9WEdm3HjNzUCjlbSVzob6Qz7hf9b5ceVtag60Rg"
                price="€2,145.20"
                priceChangeStr="+1.5%"
                priceChangeClass="text-secondary"
                isOnline={true}
              />

              <AdCard
                assetName="Buy sXAG (Synthetic Silver)"
                assetDetails="Limit: €100 - €1,500 | Revolut, SEPA"
                assetSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCUuBEilHXs9GqyHSsw4Rf6rN_89yiQbrjyNBXCApzD7os6NLi7SbIFizvgXqYAHt_NZSnXgBNYjdRlwwVim47b4mNggoiiaLRTGxLdb9ucBdJ102MCArcZ29fbezf4gJ1_WVwVbj2yw-TFSGR93R5W3pk_nCm4YWXyNWmDX1Ygf8lnOLs5-2_4Lc3rwI2nZbFkmmlwFWk3e7dMkkB0FKFvlwXiZ5MT7FqKA9Ut8EX8P3qJc9_Mxy5yr4l2zmo522Bd6yqkGHSkoW0"
                price="€28.45"
                priceChangeStr="-0.2%"
                priceChangeClass="text-error"
                isOnline={false}
              />
            </div>
          </section>

          {/* Recent History Sidebar */}
          <section className="lg:col-span-1">
            <div className="bg-surface-container-low rounded-xl p-6 h-full border border-outline-variant/10">
              <h2 className="text-xl font-bold font-headline mb-6">Recent Alchemy</h2>
              <div className="space-y-6">
                <HistoryItem
                  icon={<ArrowUpRight className="text-secondary w-5 h-5" />}
                  iconBgClass="bg-secondary/10"
                  actionText="Sold 2.5 oz sXAU"
                  timeAgo="2m ago"
                  counterparty="Neon_Mage_42"
                  amountText="€5,363.00"
                />

                <HistoryItem
                  icon={<ArrowDownLeft className="text-primary w-5 h-5" />}
                  iconBgClass="bg-primary/10"
                  actionText="Bought 100 oz sXAG"
                  timeAgo="45m ago"
                  counterparty="Argentum_Lord"
                  amountText="€2,845.00"
                />

                <HistoryItem
                  icon={<ArrowUpRight className="text-secondary w-5 h-5" />}
                  iconBgClass="bg-secondary/10"
                  actionText="Sold 0.5 oz sXAU"
                  timeAgo="3h ago"
                  counterparty="Crypto_Knight"
                  amountText="€1,072.60"
                  isLast={true}
                />
              </div>
              <button className="w-full mt-8 py-3 rounded-xl border border-outline-variant/30 text-sm font-bold hover:bg-surface-container-highest transition-all">
                Full Ledger
              </button>
            </div>
          </section>
        </div>
      </main>

      <MobileNavBar items={mobileNavItems} />
    </div>
  );
}
