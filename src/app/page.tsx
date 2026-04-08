import { Search, Settings, ChevronDown, SlidersHorizontal, CreditCard, ShieldCheck, Zap, ArrowDownUp, Shield } from "lucide-react";
import TopNavBar from "@/components/layout/TopNavBar";
import SideNavBar from "@/components/layout/SideNavBar";
import MerchantCard from "@/components/cards/MerchantCard";
import OfferCard from "@/components/cards/OfferCard";

export default function Home() {
  const sideNavItems = [
    { href: "/merchant", label: "Merchant Dashboard", icon: <Settings className="w-5 h-5" /> },
    { href: "/trade/buyer", label: "Buyer Portal", icon: <Search className="w-5 h-5" /> },
    { href: "#", label: "Asset Inventory", icon: <Settings className="w-5 h-5" />, isActive: true },
    { href: "#", label: "Trade History", icon: <Settings className="w-5 h-5" /> },
  ];

  const bottomNavItems = [
    { href: "#", label: "Support", icon: <Settings className="w-5 h-5" /> },
    { href: "#", label: "Sign Out", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <TopNavBar activePath="marketplace" showSearch />

      <SideNavBar
        items={sideNavItems}
        bottomItems={bottomNavItems}
        actionButton={
          <button className="w-full py-3 bg-secondary/10 text-secondary border border-secondary/20 rounded-xl font-bold font-headline flex items-center justify-center gap-2 hover:bg-secondary/20 transition-all">
            <span className="text-lg">+</span>
            New Trade
          </button>
        }
      />

      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto lg:pl-72">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-6 leading-[1.1]">
                Alchemy of <br/>
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
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-full cursor-pointer hover:bg-surface-bright transition-colors">
            <span className="text-sm font-bold font-headline">Amount Range</span>
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-full cursor-pointer hover:bg-surface-bright transition-colors">
            <span className="text-sm font-bold font-headline">Payment Method</span>
            <CreditCard className="w-4 h-4" />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Sort By:</span>
            <div className="flex items-center gap-2 bg-surface-container rounded-full px-4 py-2">
              <span className="text-sm font-bold">Best Price</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Marketplace Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Highlighted Merchants / Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-headline font-extrabold text-xl px-2">Top Merchants</h3>

            <MerchantCard
              name="Nova_Trade"
              avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAvN2wPHLr4NEGFHPvDFMsyXt5UiOLZDsAJm5PnO9RWfHml2OFtNUgerhd9YSy8dzLDpesAkWNKbKY9lDCjVv9LJIf06q1MzyNM3ImK33LW99hyo5-zlJpCL6znCTgTec2_QMgB0-etttM8RfxrH_XayxSbBXCztbmrP1dBPzh8UwhLzA1yvo5rw4xgs1V-1GGpcCiQRvxzzzlpIkBddLoWhpuNBCBVcSVR553g6JNAC0RX3gZcaI2N5mZp6UzQ1XdKPtfzj9yAVP0"
              avatarBgClass="bg-primary/20"
              rating={99.8}
              tradesCount="12,400+"
              speed="2m avg"
            />

            <MerchantCard
              name="SilverFox_P2P"
              avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBaHVGrlaC99VyNIHzH-PYG0_lmOVa4jznxQ5rsyPcWpKQUA6UoW9Uj_p8mkFMgKqkB7DAIJYl8gxwuT6YQxjA5eHn33w8NZxasjOm6M4ZiyuXhGaGU3bkSVBuhUxf1-kI6hQgcCMQbnO9XKUZdq5xAfsbxOb6wtTsEji3JTl_qu0mVzXCv6eSmsxF4t9fs3WBQMODMQishiPg7FgB0b55ubw6HtdrMFGldL8SrO8sY4hgG-uRwpqtexXEv0BzXN_RzYI8m40i6vZw"
              avatarBgClass="bg-secondary/20"
              rating={100}
              tradesCount="5,201"
              speed="5m avg"
            />
          </div>

          {/* Main Offers List / Right Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            <OfferCard
              asset="sXAU"
              assetSub="Synthetic Gold"
              icon={<CreditCard className="text-on-primary-fixed w-8 h-8" />}
              iconBgClass="bg-gradient-to-br from-[#bf953f] to-[#fcf6ba]"
              borderColorClass="border-primary"
              titleColorClass="metallic-gold"
              badgeLabel="BEST PRICE"
              badgeContainerClass="bg-secondary/10"
              badgeTextClass="text-secondary"
              priceLabel="Price per Oz"
              priceValue="$2,145.20"
              limitLabel="Limits"
              limitValue="500.00 - 15,000.00 USD"
              footerIcon={<ShieldCheck className="text-secondary w-4 h-4" />}
              footerText="Instant Settlement"
              actionText="BUY sXAU"
              actionClass="bg-gradient-to-r from-secondary to-secondary-container text-on-secondary"
            />

            <OfferCard
              asset="sXAG"
              assetSub="Synthetic Silver"
              icon={<ArrowDownUp className="text-on-primary-fixed w-8 h-8" />}
              iconBgClass="bg-gradient-to-br from-[#e8e8e8] to-[#70706f]"
              borderColorClass="border-secondary"
              titleColorClass="metallic-silver"
              badgeLabel="NEW OFFER"
              badgeContainerClass="bg-primary/10"
              badgeTextClass="text-primary"
              priceLabel="Price per Oz"
              priceValue="$24.88"
              limitLabel="Limits"
              limitValue="100.00 - 2,500.00 EUR"
              footerIcon={<Zap className="text-primary w-4 h-4" />}
              footerText="P2P Escrow"
              actionText="SELL sXAG"
              actionClass="bg-gradient-to-r from-primary to-primary-dim text-on-primary-container"
            />

            <OfferCard
              asset="USD / EUR"
              assetSub="Fiat Bridge"
              icon={<CreditCard className="text-on-surface w-8 h-8" />}
              iconBgClass="bg-surface-container-highest"
              borderColorClass="border-on-surface-variant"
              priceLabel="Exchange Rate"
              priceValue="0.925"
              limitLabel="Available"
              limitValue="45,000.00 USD"
              footerIcon={<Shield className="text-on-surface-variant w-4 h-4" />}
              footerText="SEPA / Wire"
              actionText="EXCHANGE"
              actionClass="bg-surface-container-highest text-on-surface"
            />

            <OfferCard
              asset="sXAU"
              assetSub="Synthetic Gold"
              icon={<CreditCard className="text-on-primary-fixed w-8 h-8" />}
              iconBgClass="bg-gradient-to-br from-[#bf953f] to-[#fcf6ba]"
              borderColorClass="border-primary"
              titleColorClass="metallic-gold"
              priceLabel="Price per Oz"
              priceValue="$2,148.50"
              limitLabel="Limits"
              limitValue="1,000.00 - 50,000.00 USD"
              footerIcon={<ShieldCheck className="text-secondary w-4 h-4" />}
              footerText="Insured Trade"
              actionText="BUY sXAU"
              actionClass="bg-gradient-to-r from-secondary to-secondary-container text-on-secondary"
            />
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

      {/* FAB (Contextual for Home/Marketplace) */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-primary-dim rounded-full shadow-2xl flex items-center justify-center group active:scale-90 transition-all z-50">
        <span className="text-on-primary-container text-3xl group-hover:rotate-90 transition-transform">+</span>
      </button>
    </div>
  );
}
