import Image from "next/image";
import Link from "next/link";
import { CircleDollarSign, Banknote, ShieldCheck, Globe, Sparkles, Aperture, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
          <div className="text-2xl font-black bg-gradient-to-r from-primary to-primary-dim bg-clip-text text-transparent font-headline tracking-tight">
            Aureum
          </div>
          <div className="hidden md:flex items-center gap-10">
            <Link className="text-primary border-b-2 border-primary pb-1 font-headline font-bold tracking-tight transition-colors duration-300" href="/trade/buyer">Marketplace</Link>
            <Link className="text-on-background opacity-80 hover:text-primary transition-colors duration-300 font-headline font-bold tracking-tight" href="/trade/buyer">Trades</Link>
            <Link className="text-on-background opacity-80 hover:text-primary transition-colors duration-300 font-headline font-bold tracking-tight" href="#">Wallet</Link>
            <Link className="text-on-background opacity-80 hover:text-primary transition-colors duration-300 font-headline font-bold tracking-tight" href="#">Help</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/merchant" className="hidden lg:block text-on-background font-bold py-2 px-4 hover:text-primary transition-all">Merchant Portal</Link>
            <Link href="/trade/buyer" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-bold py-3 px-8 rounded-full scale-95 active:opacity-80 transition-all inline-block">Start Trading</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 px-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
                The Future of <span className="text-gradient">Synthetic</span> Peer-to-Peer Trading
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto lg:mx-0 mb-12 font-body">
                Exchange synthetic gold, silver, and fiat currencies directly with verified merchants. Secure, fast, and no middlemen.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link href="/trade/buyer" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-bold text-lg px-10 py-5 rounded-full aureum-glow transition-all hover:scale-105 active:scale-95 inline-block text-center">
                  Start Trading
                </Link>
                <Link href="/merchant" className="bg-surface-container-highest text-secondary font-bold text-lg px-10 py-5 rounded-full transition-all hover:bg-surface-container hover:scale-105 active:scale-95 inline-block text-center">
                  Become a Merchant
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all opacity-50"></div>
                <div className="relative bg-surface-container-low rounded-xl p-2 border border-outline-variant/15 overflow-hidden">
                  <Image
                    alt="Synthetic Assets Hero"
                    className="rounded-lg w-full h-[500px] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeRiVlOfT8EIaMYgpbpNMcWIZ7CZ2Qa4P3d7GXjS9YlmVUPygkQ7nsCVAIvTzZ1S-7v7ok3X1LT4rkGrfkz1uwLCYRWyMIShVZOpmiJIoW3rVv_QSDgl75TJ8q9QniHG9fUdAws5kAy-n225vYkkqB3dp4IPe_EUl5RQPDw7fskFRgmTShuVs8t3Rom1MtWOJHKQ4mK747pGPflryKlt0qxrUWWm_vI3jETwVgPjwg7zDySGz1G_odrp8PRs_kuU23NPleYMKlOtk"
                    width={800}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Aureum? */}
        <section className="py-24 px-8 bg-surface-container-low rounded-[3rem]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Why Aureum?</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
                <div className="w-14 h-14 bg-primary-container rounded-full flex items-center justify-center mb-6 text-on-primary-container">
                  <CircleDollarSign className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Synthetic Gold & Silver</h3>
                <p className="text-on-surface-variant font-body">Trade high-fidelity synthetic assets pegged to real-world commodity prices with zero physical friction.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all group">
                <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-6 text-on-secondary-container">
                  <Banknote className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Zero Fees</h3>
                <p className="text-on-surface-variant font-body">Our P2P architecture eliminates traditional brokerage fees, keeping more value in your digital vault.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
                <div className="w-14 h-14 bg-surface-container-highest rounded-full flex items-center justify-center mb-6 text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">24/7 Escrow Protection</h3>
                <p className="text-on-surface-variant font-body">Automated smart contract escrows ensure your assets are protected until both parties fulfill their terms.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all group">
                <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-6 text-on-secondary-container">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Global Liquidity</h3>
                <p className="text-on-surface-variant font-body">Access deep pools of liquidity from verified merchants spanning every continent and currency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Market Highlights */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Market Highlights</h2>
                <p className="text-on-surface-variant font-body">Real-time valuation of the world&apos;s most stable synthetic assets.</p>
              </div>
              <Link href="/trade/buyer" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                View All Markets <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Market Card 1 */}
              <div className="bg-surface-container-low rounded-lg p-8 flex items-center gap-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10">
                  <Sparkles className="w-40 h-40" />
                </div>
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gradient-to-br from-yellow-500/20 to-orange-600/20 flex-shrink-0 flex items-center justify-center">
                  <Image alt="sXAU" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGvDFUv28yk5LnL0gqICFbzDoRnybZQ8dg_JGgyrtdxu3rxmgro2w9irSiBoe_4i9MhOyAmqmW3aiVg17JFtNLphU3wvOhdKhLWwieZVSkzDRBaiuN8YSgCCH18J1yfRegdc17-b8CiSbC04D5U6oWJSoGz86RKTyKzhUCcQUVnMwD-gvXHPgfubRet1ojUM6KQjV-Kon-IFyW-L1Q_Lsq2Y0FuTXWMRv9ePitMKyElFOqK2plLuF228O4iYtFqebQAxP_yn2wv58" width={96} height={96} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold font-headline">sXAU / USD</h3>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold tracking-widest">+1.24%</span>
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="text-4xl font-black font-headline">$2,148.50</span>
                    <span className="text-on-surface-variant text-sm mb-1 font-body">Vol: $4.2M</span>
                  </div>
                </div>
              </div>
              {/* Market Card 2 */}
              <div className="bg-surface-container-low rounded-lg p-8 flex items-center gap-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10">
                  <Aperture className="w-40 h-40" />
                </div>
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gradient-to-br from-slate-400/20 to-slate-600/20 flex-shrink-0 flex items-center justify-center">
                  <Image alt="sXAG" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAD_UTqddDap_QjgBMoxtpJwh1SgIEMqwl0vmEUFUuKVk76ET51tKBgkWhZHz5EvWw3kwbDYx5XIsc1Dw5860GnfGGHdbBfkJylanaMg8XtdQg4rKZZBlwP8t88wBxH49BO3q4okQG4lWPjid7YApDOTIPxejTyzreG8xZHgs7IQ58CR-jrZH7ru3d3_TSTmcOEOL37ZRwTywYWobuWtPHToRFJUKEpBhyrCEaHBxWazyE9coyKgU4ehwAPeK61mJUufsD08C2Kp8" width={96} height={96} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold font-headline">sXAG / EUR</h3>
                    <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-xs font-bold tracking-widest">-0.45%</span>
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="text-4xl font-black font-headline">€23.12</span>
                    <span className="text-on-surface-variant text-sm mb-1 font-body">Vol: $1.8M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How it Works */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Forge Your Path</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto font-body">Trading synthetic assets has never been more intuitive. Follow our streamlined alchemy process.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connector Line (Desktop Only) */}
              <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20 z-0"></div>
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-surface-container-highest border-4 border-surface flex items-center justify-center mb-8 shadow-2xl group-hover:bg-primary-container transition-all">
                  <span className="text-3xl font-black text-primary group-hover:text-on-primary-container">1</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Connect Wallet</h3>
                <p className="text-on-surface-variant font-body">Securely link your decentralized wallet. We support MetaMask, WalletConnect, and more.</p>
              </div>
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-surface-container-highest border-4 border-surface flex items-center justify-center mb-8 shadow-2xl group-hover:bg-secondary-container transition-all">
                  <span className="text-3xl font-black text-secondary group-hover:text-on-secondary-container">2</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Pick a Merchant</h3>
                <p className="text-on-surface-variant font-body">Browse our curated marketplace of verified liquidity providers with transparent trust ratings.</p>
              </div>
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-surface-container-highest border-4 border-surface flex items-center justify-center mb-8 shadow-2xl group-hover:bg-primary-container transition-all">
                  <span className="text-3xl font-black text-primary group-hover:text-on-primary-container">3</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Receive Assets</h3>
                <p className="text-on-surface-variant font-body">Confirm your trade. The smart contract escrows the assets until you receive your payment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Final CTA */}
        <section className="py-24 px-8 relative">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-surface-container-high to-surface-container-lowest rounded-xl p-16 text-center border border-primary/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image alt="Background texture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdW079lqqSRsyvSEG2oRn_NhtAf-sk9RJa0LAR1Z8Z4W2YrC4x-SiPk8ooVTd8XcGwAOTgin_p1qZdmI9T_FbDUjZKhmDX6CADsHGtNQTXO-0DmkRK0Obf84uITd9g1Glg8xkQ5tCYSLNNa2Tt4xmo_gNLnT4M_2M3nczs9SszAqkpsa4CuEmO1tNos609pG1hjrLIhxO0G-4VSbEgTXebUBW2tqmhILKSOrarWNlzLtLiAD2Ip1qe49DSbFuitspRyBCqv36nyQ8" fill />
            </div>
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8">Ready to Forge Your First Trade?</h2>
              <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-body">
                Join thousands of merchants and traders already leveraging the Aureum liquidity network.
              </p>
              <Link href="/trade/buyer" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-black text-2xl px-12 py-6 rounded-full aureum-glow transition-all hover:scale-110 active:opacity-80 inline-block">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] mt-20 bg-[#121319]">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-lg font-bold text-on-background font-headline">Aureum P2P</div>
            <p className="text-on-background opacity-60 text-sm font-body tracking-wide">© 2024 Aureum P2P. Secure Synthetic Alchemy.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="text-on-background opacity-60 text-sm tracking-wide font-body hover:text-primary transition-all underline-offset-4 hover:underline" href="#">Terms of Service</Link>
            <Link className="text-on-background opacity-60 text-sm tracking-wide font-body hover:text-primary transition-all underline-offset-4 hover:underline" href="#">Privacy Policy</Link>
            <Link className="text-on-background opacity-60 text-sm tracking-wide font-body hover:text-primary transition-all underline-offset-4 hover:underline" href="#">Risk Disclosure</Link>
            <Link className="text-on-background opacity-60 text-sm tracking-wide font-body hover:text-primary transition-all underline-offset-4 hover:underline" href="#">Community</Link>
            <Link className="text-on-background opacity-60 text-sm tracking-wide font-body hover:text-primary transition-all underline-offset-4 hover:underline" href="#">Audit Reports</Link>
          </div>
        </div>
      </footer>
    </>
  );
}