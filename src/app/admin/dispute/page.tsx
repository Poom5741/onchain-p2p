import Link from "next/link";
import Image from "next/image";

export default function AdminDispute() {
  return (
    <div className="bg-background text-on-surface">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d0e13]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(197,154,255,0.08)] flex justify-between items-center px-8 h-20 w-full">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#c59aff] to-[#9547f7] font-headline">Aureum</Link>
          <div className="hidden md:flex items-center gap-8 font-headline tracking-tight font-bold">
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="/marketplace">Marketplace</Link>
            <Link className="text-[#c59aff] border-b-2 border-[#c59aff] pb-1" href="#">Trades</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Wallet</Link>
            <Link className="text-[#f7f5fd]/60 hover:text-[#f7f5fd] transition-colors" href="#">Help</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            </button>
            <button className="p-2 hover:bg-[#181920] rounded-full transition-all active:scale-95">
              <span className="material-symbols-outlined text-on-surface-variant">settings</span>
            </button>
          </div>
          <button className="bg-[#c59aff] text-[#330066] px-6 py-2.5 rounded-full font-bold transition-all active:scale-95">Connect Wallet</button>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 pt-24 bg-[#121319] flex-col border-r border-[#f7f5fd]/5 z-40">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#c59aff] font-headline leading-tight">Aureum P2P</h2>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">The Neon Alchemist</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-body font-medium text-sm" href="/merchant">
            <span className="material-symbols-outlined">storefront</span> Merchant Dashboard
          </Link>
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-body font-medium text-sm" href="#">
            <span className="material-symbols-outlined">shopping_cart</span> Buyer Portal
          </Link>
          <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-3 px-6 hover:bg-[#181920] transition-all font-body font-medium text-sm" href="/inventory">
            <span className="material-symbols-outlined">database</span> Asset Inventory
          </Link>
          <Link className="flex items-center gap-3 bg-[#c59aff]/10 text-[#c59aff] rounded-r-full py-3 px-6 border-l-4 border-[#c59aff] font-body font-medium text-sm" href="#">
            <span className="material-symbols-outlined">history</span> Trade History
          </Link>
        </nav>
        <div className="p-6 mt-auto space-y-4">
          <button className="w-full bg-secondary text-on-secondary-fixed font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-secondary/10">
            <span className="material-symbols-outlined">add</span> New Trade
          </button>
          <div className="pt-4 border-t border-outline-variant/30">
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-2 hover:text-secondary transition-all text-sm" href="#">
              <span className="material-symbols-outlined">help_outline</span> Support
            </Link>
            <Link className="flex items-center gap-3 text-[#f7f5fd]/50 py-2 hover:text-error transition-all text-sm" href="#">
              <span className="material-symbols-outlined">logout</span> Sign Out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:pl-64 pt-24 min-h-screen">
        <div className="max-w-[1400px] mx-auto p-6 md:p-8">
          {/* Dispute Header Bento */}
          <header className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-surface-container-low p-8 rounded-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1 bg-error/10 text-error border border-error/20 rounded-full text-xs font-bold tracking-widest uppercase">High Priority Dispute</span>
                  <span className="text-on-surface-variant font-medium text-sm">Ticket #AD-90210</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-4">
                  Trade Dispute: <span className="text-secondary">2.5 sXAU</span>
                </h1>
                <p className="text-on-surface-variant max-w-xl leading-relaxed">
                  Conflict detected in synthetic gold swap. Buyer claims payment sent via AlchemyPay, Merchant reports no incoming liquidity.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 relative z-10">
                <div className="bg-surface-container p-4 rounded-xl flex items-center gap-4">
                  <img alt="Buyer Avatar" className="w-10 h-10 rounded-full border-2 border-secondary/30 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlYD63i81zyyhmcIkZ_7VHchcOn1FiLkNK_gHhpq41RNgm2Lby2LNSLS2ajS_rDTkXCmRMsznV_whTOZ0B7yI3BP8niDEjb_bUnUxQCKB3tjFGdjKMzXEZsyx5s4E1FzbnqS-SadQiEnX_j5wUYXpy3aClf7RQw5bGiwyoTAgq3RrT8irJ1lwXfkMsJYe1zrv9mvgm20NfHRQqoGPiUJRJCUtQvAMPbbiKpCrjh7LRPy20rfUCK6x65gttIMLbPgGkrMT1-tDTWPU" />
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase">Buyer</p>
                    <p className="font-bold text-on-surface">NeonShadow_99</p>
                  </div>
                </div>
                <div className="flex items-center text-primary-dim">
                  <span className="material-symbols-outlined text-3xl">swap_horiz</span>
                </div>
                <div className="bg-surface-container p-4 rounded-xl flex items-center gap-4">
                  <img alt="Merchant Avatar" className="w-10 h-10 rounded-full border-2 border-primary/30 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy_R3ks4mBHY8R7-5VjP9JOFdJHUA87EhZN5sfBeWePfbrndliybnFrvWgIxZ3pCKBqYNQbRPxHhhM4KG6Z5qdjNBWwNiiiN2Et6yuYuGObKywWdrg4YEfN3lttYV3ZApQ2n3ar8jCyvuWWAVjc-3GU201ENXrOBQ_-AfbRR_EGcai_6tFvW6854rx5Oe-FE6TDvcF2HirLvrMfOaD67ZyaKjSsdnzMVGuP4ab_2gjwVN8B9Lj30Mp8Dlm6uQyDtelrz6xcL7W8kE" />
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase">Merchant</p>
                    <p className="font-bold text-on-surface">Aureum_Vaults</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-high p-8 rounded-xl flex flex-col items-center justify-center text-center border border-outline-variant/10 shadow-2xl">
              <div className="w-24 h-24 mb-6 relative">
                <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full"></div>
                <img alt="sXAU Asset" className="w-full h-full relative z-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmaC6VBtgOBpwgL7gK9fYWdivB6C6k7y6UMh1C5g9hvbpOTmVEqTw9BdDbHAqC-Z0ftoDGNipL0GkSWYkCigpi6L_BUZkhWvD-zgOzhuXMt_9g1ypClecWeYjJWCWu_fiixat5_0FG9rNZ_2pthl4mUeGyqyuFSErToVoYsIZ2q6RkiRtLi8AiaImw2s3b1gXFsEp-jvBDj0amY2BIty-4pBsaqOdNNVvY-7GW35GVMTZHGuwVbFoIteS6015g2Sg-_g-cNDMgctI" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">Synthetic Gold</h3>
              <div className="flex items-center gap-2 text-on-surface-variant mb-6 font-body">
                <span className="material-symbols-outlined text-secondary">token</span>
                <span>2.5 sXAU (~$4,850.20)</span>
              </div>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="bg-surface p-3 rounded-lg border border-outline-variant/10">
                  <p className="text-[10px] uppercase text-on-surface-variant font-bold mb-1">Status</p>
                  <p className="text-sm font-bold text-error">Locked</p>
                </div>
                <div className="bg-surface p-3 rounded-lg border border-outline-variant/10">
                  <p className="text-[10px] uppercase text-on-surface-variant font-bold mb-1">Network</p>
                  <p className="text-sm font-bold text-on-surface">Alchemy L2</p>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Chat Column */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col h-[600px]">
                <div className="p-6 bg-surface-container flex justify-between items-center border-b border-outline-variant/10">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
                    <h4 className="font-headline font-bold">Dispute Resolution Chat</h4>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-surface-variant rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-on-surface-variant">download</span>
                    </button>
                    <button className="p-2 hover:bg-surface-variant rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                    </button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {/* System Message */}
                  <div className="flex justify-center">
                    <span className="bg-surface-container-highest px-4 py-1.5 rounded-full text-[11px] font-bold text-on-surface-variant tracking-wider uppercase">Dispute opened by NeonShadow_99 at 14:22 UTC</span>
                  </div>

                  {/* Buyer Message */}
                  <div className="flex gap-4 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-sm">person</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-surface-container p-4 rounded-r-2xl rounded-bl-2xl">
                        <p className="text-sm leading-relaxed">I&apos;ve already sent the 4,850 USDC via AlchemyPay. Here is the confirmation hash. The merchant is stalling and refusing to release the sXAU collateral.</p>
                      </div>
                      <p className="text-[10px] text-on-surface-variant font-bold ml-1">NEONSHADOW_99 • 14:25 UTC</p>
                    </div>
                  </div>

                  {/* Merchant Message */}
                  <div className="flex flex-row-reverse gap-4 max-w-[80%] ml-auto text-right">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">store</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-primary/10 p-4 rounded-l-2xl rounded-br-2xl border border-primary/20">
                        <p className="text-sm leading-relaxed text-primary-container">The transaction hash you provided shows &quot;Pending&quot; on the explorer. I won&apos;t release the assets until the funds are settled in my vault. This is standard procedure.</p>
                      </div>
                      <p className="text-[10px] text-on-surface-variant font-bold mr-1">AUREUM_VAULTS • 14:31 UTC</p>
                    </div>
                  </div>

                  {/* Buyer Message with Evidence */}
                  <div className="flex gap-4 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-sm">person</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-surface-container p-4 rounded-r-2xl rounded-bl-2xl">
                        <p className="text-sm leading-relaxed mb-3">AlchemyPay confirmed it 5 minutes ago. Look at this screenshot from my mobile wallet.</p>
                        <div className="bg-surface p-2 rounded-lg border border-outline-variant/20 cursor-pointer group">
                          <div className="relative">
                            <img alt="Payment Confirmation" className="w-full rounded-md brightness-75 group-hover:brightness-100 transition-all object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP9UzboRH0WYo1paB_83qe60a4RvfDZU5SnEkD6Vti6ZpnE0FKGJS9l1v99CMlDSfq7pJOC_m9ysOX-jSH66sr1djV9h0-MShtOHsSkVwCQ_Elh1CXU-IKgMIYifDzdDOmHYqzD1ps7Wo32L2ZiRSDE_IiNAVbV-SpevU12vm6eDnIhtDC-2d8HZDNrkWOh99UQrg--F9aL4aUdKM4jfvTZe4f42OVdRycZH8Y0kbJu9rIh9CwUR9kB2b4JxaBHbUpUxNBTLMZ4UA" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="bg-surface/80 px-3 py-1 rounded-full text-xs font-bold">Click to Expand</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-on-surface-variant font-bold ml-1">NEONSHADOW_99 • 14:38 UTC</p>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-surface-container-high">
                  <div className="flex gap-3 bg-surface-container p-2 rounded-xl border border-outline-variant/10">
                    <input className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-sm px-4 text-on-surface" placeholder="As an Admin, your messages are highlighted..." type="text" />
                    <button className="bg-primary/20 text-primary p-2 rounded-lg hover:bg-primary/30 transition-all">
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Evidence Locker & Actions */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Action Panel */}
              <section className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5 shadow-xl">
                <h4 className="font-headline font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">gavel</span>
                  Final Verdict
                </h4>
                <div className="space-y-4">
                  <button className="w-full group bg-gradient-to-r from-secondary to-secondary-container text-on-secondary-fixed font-bold py-4 rounded-xl flex items-center justify-between px-6 transition-all active:scale-95 shadow-lg shadow-secondary/10">
                    <span className="flex items-center gap-3">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Release to Buyer
                    </span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <button className="w-full group bg-surface-container-highest text-on-surface font-bold py-4 rounded-xl flex items-center justify-between px-6 border border-outline-variant/20 hover:bg-surface-variant transition-all active:scale-95">
                    <span className="flex items-center gap-3">
                      <span className="material-symbols-outlined">undo</span>
                      Refund to Merchant
                    </span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <div className="pt-4 mt-4 border-t border-outline-variant/20">
                    <button className="w-full bg-error-container text-on-error-container font-bold py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-error-dim transition-all active:scale-95">
                      <span className="material-symbols-outlined">block</span>
                      Ban Account: Merchant
                    </button>
                    <p className="text-[10px] text-center mt-3 text-on-surface-variant font-medium">Finalizing a dispute will permanentely move collateral and cannot be undone.</p>
                  </div>
                </div>
              </section>

              {/* Evidence Locker */}
              <section className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-headline font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">inventory_2</span>
                    Evidence Locker
                  </h4>
                  <span className="text-[10px] bg-surface-container-highest px-2 py-0.5 rounded font-bold text-on-surface-variant">4 FILES</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg hover:bg-surface-variant cursor-pointer transition-all border border-transparent hover:border-outline-variant/30">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary">image</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-bold truncate">payment_conf_01.png</p>
                      <p className="text-[10px] text-on-surface-variant">Buyer • 1.2 MB</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">visibility</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg hover:bg-surface-variant cursor-pointer transition-all border border-transparent hover:border-outline-variant/30">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">description</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-bold truncate">ledger_export_v2.pdf</p>
                      <p className="text-[10px] text-on-surface-variant">Merchant • 450 KB</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">visibility</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg hover:bg-surface-variant cursor-pointer transition-all border border-transparent hover:border-outline-variant/30">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary">link</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-bold truncate">alchemy_tx_explorer</p>
                      <p className="text-[10px] text-on-surface-variant">Buyer • External Link</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">open_in_new</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg hover:bg-surface-variant cursor-pointer transition-all border border-transparent hover:border-outline-variant/30">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">video_library</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-bold truncate">screen_record.mp4</p>
                      <p className="text-[10px] text-on-surface-variant">Merchant • 8.4 MB</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">play_circle</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 border border-dashed border-outline-variant/40 rounded-xl text-on-surface-variant text-sm font-bold hover:bg-surface-container transition-all">
                  + Attach Admin Note
                </button>
              </section>
            </div>
          </div>

          {/* Dashboard Stats Bento Grid */}
          <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Escrow Time</p>
              <p className="text-2xl font-headline font-bold text-secondary">14h 22m</p>
              <div className="mt-2 h-1 w-full bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[60%]"></div>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Trust Score (Buyer)</p>
              <p className="text-2xl font-headline font-bold text-on-surface">98.4%</p>
              <div className="flex items-center gap-1 text-secondary mt-1">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs">star</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Trust Score (Merc)</p>
              <p className="text-2xl font-headline font-bold text-on-surface">82.1%</p>
              <div className="flex items-center gap-1 text-primary mt-1">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-xs">star</span>
                <span className="material-symbols-outlined text-xs">star</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Admin SLA</p>
              <p className="text-2xl font-headline font-bold text-primary-dim">04m 12s</p>
              <p className="text-[10px] text-on-surface-variant mt-1">Time until auto-escalation</p>
            </div>
          </section>
        </div>
      </main>

      {/* BottomNavBar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-low/90 backdrop-blur-xl border-t border-outline-variant/10 flex justify-around items-center h-20 px-4 z-50">
        <div className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">storefront</span>
          <span className="text-[10px] font-bold uppercase">Shop</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-secondary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
          <span className="text-[10px] font-bold uppercase">Trades</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">database</span>
          <span className="text-[10px] font-bold uppercase">Assets</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">help_outline</span>
          <span className="text-[10px] font-bold uppercase">Support</span>
        </div>
      </div>
    </div>
  );
}
