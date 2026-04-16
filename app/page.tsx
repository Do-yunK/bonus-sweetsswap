export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <nav className="w-full top-0 sticky z-50 bg-[#fffbfa]/90 backdrop-blur-md border-b border-surface-container-highest">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
            </svg>
            <div className="text-2xl font-bold text-primary tracking-tight">Sweets Swap</div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Explore</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Recipes</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Communities</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Gift Shop</a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-primary/10 p-2 rounded-full transition-all">shopping_basket</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-primary/10 p-2 rounded-full transition-all">account_circle</span>
            </div>
            <button className="berry-gradient-cta text-on-primary px-8 py-3 rounded-full font-bold scale-95 active:scale-90 transition-transform duration-200 shadow-lg shadow-primary/20">Join Swap</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[850px] flex items-center overflow-hidden bg-surface gingham-bg">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center z-10 relative">
          <svg className="absolute -top-12 -left-8 w-24 h-24 text-tertiary/20 opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,22C12,22 12,18 10,17C8,16 6,16 6,16C6,16 9,15 10,13C11,11 11,8 11,8C11,8 12,11 14,12C16,13 19,13 19,13C19,13 16,14 15,16C14,18 14,22 14,22H12Z" />
          </svg>
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm block">Handcrafted Community</span>
              <svg className="w-6 h-6 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
              </svg>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-on-surface leading-[1.1] tracking-tight mb-8">
              Taste the <span className="text-primary">Magic</span> of Sharing.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              Experience the warmth of artisanal baking. Swap your favorite treats, discover secret recipes, and join a community that celebrates every crumb.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="berry-gradient-cta text-on-primary px-10 py-5 rounded-full text-lg font-bold transition-all hover:shadow-xl hover:-translate-y-1">Start Swapping</button>
              <button className="bg-surface-container-highest text-on-surface-variant px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-primary/10 hover:-translate-y-1">View Recipes</button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] lg:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out shadow-2xl border-8 border-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="diverse group of friends laughing and sharing artisan bread and colorful tarts at a long wooden table in a sunlit green park"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwli1SzVmfPRLDG-Z0EsPNQnmf1JKbhsowHeOPbgbz1W47G45M2vsEs0MC7aQYxhmSDSa2GzWY63NlrUpuiHS8mzNtxsKlIVbIQrjCDqVu5wXoi6AJuJT4onf-E7P7WDitbBDf5wKHBshmwP6DRXz685PpMD_e1IyuC9ZH4IA83kZasHrfdY3QVepnYeC4FQPw3zthknTXJtQaeD5DLmQOzbJPE0o0jhOcnm3Q95ZM0hAAoynPHKjQNG-X7mgPiIA8qZlZ7yG08e-N"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 text-primary opacity-20 rotate-12">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,3A3,3 0 0,0 9,6V7H5V9H19V7H15V6A3,3 0 0,0 12,3M12,5A1,1 0 0,1 13,6V7H11V6A1,1 0 0,1 12,5M3,10V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V10H3Z" />
              </svg>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-container rounded-full -z-10 opacity-40 blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-tertiary-container rounded-full -z-10 opacity-30 blur-3xl"></div>
          </div>
        </div>
      </header>

      <div className="gingham-divider"></div>

      {/* Mission Statement */}
      <section className="py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-8 text-center relative">
          <svg className="absolute -top-16 right-1/4 w-12 h-12 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21,5C21,5 19.5,4.5 18,4.5C16.5,4.5 15,5.5 15,7C15,8.5 16.5,9.5 18,9.5C19.5,9.5 21,9 21,9C21,9 21,11 19,12.5C17,14 14,14 14,14C14,14 12,12 10,12C8,12 6,13.5 6,15.5C6,17.5 8,19 10,19C12,19 14,18 14,18C14,18 15,20 17,20C19,20 21,18 21,18V5Z" />
          </svg>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-12">
            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight italic">
            &ldquo;Bringing people together to share the beauty of baking, one slice at a time.&rdquo;
          </h2>
          <div className="mt-12 h-1 w-24 bg-primary mx-auto rounded-full opacity-30"></div>
        </div>
      </section>

      {/* Gallery Section (Bento Grid) */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Collection</span>
              <h3 className="text-5xl font-bold text-on-surface">Mouth-watering Baked Goods</h3>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:underline">
              Explore Gallery <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 min-h-[800px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="extreme close-up of a rustic sourdough loaf with a perfectly charred crust and dusted with flour on a warm wooden surface"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK91bJkoZzVNOo-GBMZFFv_0Qj5l3JqAQw4zjLQ7oF7pnWr1ePILoxLcpTrb2PnrcuJgBC5fQmsmquKeqk2uLTcYVh6VJwC1DhKSFAAQGEzVqYEkAZAOwi1skrzg33du3LFP0uLvrdJhAKVJLJl5el6ZUTc1w_4ZWs-xtu2s41TUGujW9oN4ULZcokvvy6RTVBgGuohB6LbVvK4bvNKazIvmLzRDuVr-gqnR12SXrNOSDWZI0TvRnzQO5sQcRojbDfGvn2e9r-BCvj"
              />
              <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm scale-90 origin-top-left group-hover:scale-100 transition-transform">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                </svg>
                <span className="text-xs font-bold text-primary uppercase tracking-tighter">Handcrafted</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-10">
                <span className="text-primary-container font-bold text-sm uppercase tracking-widest mb-2">Signature Crust</span>
                <h4 className="text-white text-3xl font-bold">Heritage Rye Loaf</h4>
              </div>
            </div>
            <div className="md:col-span-1 relative group overflow-hidden rounded-lg shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="close up of a delicate fruit tart with raspberries and cream, golden afternoon sunlight highlighting the glaze"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNtRsQcbosd_RXIhDZwfRNAaZKBnfj-iqJZE1valmBU6ExDUAdtssqo4OLpMyYV1sDHY1HBFEQQp0HvwGTEY4YoXZl4C60zOv3_F0XoDhvDC14L07GUKNIlkrY30F4wvpF-2_hJ-V8VldPe60KUD2KfYKs5MT2zKPTSEdlYJv0TE4D0yDwnhOuUKuNEaiVTfhS5lyvxX81F-CdhwxjunHgYhUHPbY1gYODF0ntOt_a9ggmh8LU4T_Rl0vJkc1Iu5154XquTWFbO4fE"
              />
            </div>
            <div className="md:col-span-1 relative group overflow-hidden rounded-lg shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="beautifully frosted multi-layer cake with soft pink icing and edible flowers on top, warm editorial lighting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqRI2UjvNE7uOenijGnD2oRKQurRlA083HavyoYYs6fByfhOsSndY97fDErlICj9gnV0dnU2sFVe_R_yJI5j4aDwX5msz02H2NK1wmoGN8uehwIuLyk4pmRI5lMVoXymVZ6_fsZHNCxEnl64bdd7J1XTBFA371x4XeHnzRwbEw2Fe3QfMk18ZT5f8QV4lawsnvrdSCsNRwl1hr3pRRzJh62s9ByYt-WaZGAR7XmHlCr_oxvWmzJHHxCWz0GcKQBt4ZYU-mIW0YoWfp"
              />
            </div>
            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-lg shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="assortment of delicate french pastries and croissants displayed in a warm wooden bakery case"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQRU71sOjj-X4vZGXd8hI5NNQn2xIHixmdbcG9XOKVO3_HOCO4BqhnbR1vUp7uk15q_mdMzsO34ZBCmL7spQJompzilW4cmHa843uBLYQaBwcfM309APS2wrX3T-A62o1f6toWHPpo8RlzQscYF_TDlPuKnFHUcb6RzAlchGHQdjJl7G6wQklF-2SZvjcKhhsQc5eueQT2VBIeGWRvyYTek7EXJySrf-bhFbvcYo3dK8Ehf894udMKEFmZAPubYpUx_U9DBtVRQjtt"
              />
              <div className="absolute inset-0 forest-frost opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-on-surface px-6 py-3 rounded-full font-bold">View Details</span>
              </div>
            </div>
            <div className="md:col-span-1 relative group overflow-hidden rounded-lg shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="golden brown chocolate chip cookies stacked on a linen napkin with warm ambient light"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKCPZWrG9PhBDZylz8H1gec7eJb7Z64BQFw8LWHMBUe73OTBM-J1BYX9jFtiPccbrCNO_pMNlehKyXmCtMJ4sK148JRia8cxH1ZebLxn3U2OTn9JCEoFyPrNU7C-CgYTRca09MP2rl9l2wOAo4d146lsVisHx4WOHMGyp67NXJv5FQkhFZ6e6rO-NFXhomKE9femiVKRfXPm0tWh9y-zpvTKDG2Oec2YuVcdjgsE-dRAATH3d5xf6V1tXnmgKdB0vhMHYJxwbJm_Np"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Next Gathering Section */}
      <section className="py-32 gingham-bg border-y border-surface-container-highest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-stretch">
            <div className="lg:col-span-2 bg-white p-12 rounded-lg flex flex-col justify-between shadow-2xl note-pinned border-b-4 border-r-4 border-surface-container-highest">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs block">Save the Date</span>
                  <div className="h-[1px] flex-grow bg-surface-container-highest"></div>
                </div>
                <h3 className="text-4xl font-bold text-on-surface mb-8 leading-tight">Cozy Picnic <br />Invitation</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-lg">calendar_today</span>
                    <div>
                      <p className="font-bold text-on-surface">Sunday, October 15th</p>
                      <p className="text-on-surface-variant text-sm">2:00 PM – 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-lg">location_on</span>
                    <div>
                      <p className="font-bold text-on-surface">Riverside Park</p>
                      <p className="text-on-surface-variant text-sm">The North Meadow Pavilion, NY</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="berry-gradient-cta text-on-primary w-full py-5 rounded-full font-bold mt-12 flex justify-center items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                RSVP to Attend <span className="material-symbols-outlined">how_to_reg</span>
              </button>
            </div>
            <div className="lg:col-span-3 rounded-lg overflow-hidden relative min-h-[400px] shadow-xl border-8 border-white rotate-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="abstract artistic map showing park trails and riverfront with warm gold and sage green color accents"
                className="w-full h-full object-cover grayscale opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBilWaPH2LQeLQcWiKPEevAU-YqUsF7h4aGUlHXsg0QVaKyeRSMYsfq9VXzw-j7y832h2iR1yAnSLifQ2k-KloHcKOC69z0NA56iKwS2IqeEIur1ReuP5_s7SXzdBBiviqm9sSI2Y8RWoglO1X-kiLwj3vKvn625ObpHuKNMm3LAyKvOwipBBLWKXFujFQko_WxAjUbwrNBK6b5lFiA9H7GuJqdEGag-0bsnCZx5oCFJfLtQxYpt6GslY_B-T-4e1EojAtzQW9wOZJO"
              />
              <div className="absolute inset-0 bg-tertiary/20 mix-blend-multiply"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Community CTA */}
      <section className="py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-8 bg-surface-container-low rounded-lg p-16 relative overflow-hidden shadow-xl border border-surface-container">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-tertiary-container/30 rounded-full blur-3xl"></div>
          <svg className="absolute bottom-4 right-8 w-20 h-20 text-tertiary/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
          </svg>
          <div className="relative z-10 text-center mb-12">
            <h3 className="text-5xl font-bold text-on-surface mb-4">Join the Community</h3>
            <p className="text-xl text-on-surface-variant">Get the latest swap dates and baker stories delivered to your inbox.</p>
          </div>
          <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <label className="block text-sm font-bold uppercase tracking-widest text-tertiary mb-2">First Name</label>
              <input className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-shadow" placeholder="Jane" type="text" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-bold uppercase tracking-widest text-tertiary mb-2">Email Address</label>
              <input className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-shadow" placeholder="jane@artisanbaker.com" type="email" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold uppercase tracking-widest text-tertiary mb-2">Your Baking Specialty (Optional)</label>
              <input className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-shadow" placeholder="e.g. Sourdough, Macarons, Fruit Tarts" type="text" />
            </div>
            <button className="md:col-span-2 berry-gradient-cta text-on-primary py-5 rounded-full font-bold text-lg mt-4 shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1" type="submit">
              Sign Up for the Next Swap
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-20 bg-surface-container-highest border-t border-surface-container-highest">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 leading-relaxed">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
              </svg>
              <div className="text-xl font-bold text-primary">Sweets Swap</div>
            </div>
            <p className="text-on-surface-variant opacity-80">A community where artisanal bakers and pastry enthusiasts connect to share joy, recipes, and handmade treats.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-primary">The Swap</h5>
            <ul className="flex flex-col gap-3">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Our Story</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Safe Swapping</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Artisan Partners</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-primary">Resources</h5>
            <ul className="flex flex-col gap-3">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Support</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Privacy</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-primary">Connect</h5>
            <div className="flex gap-4">
              <span className="material-symbols-outlined p-2 bg-primary/10 rounded-full cursor-pointer hover:bg-primary hover:text-white transition-all">public</span>
              <span className="material-symbols-outlined p-2 bg-primary/10 rounded-full cursor-pointer hover:bg-primary hover:text-white transition-all">share</span>
              <span className="material-symbols-outlined p-2 bg-primary/10 rounded-full cursor-pointer hover:bg-primary hover:text-white transition-all">mail</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-8 border-t border-primary/10 text-center text-on-surface-variant text-sm flex items-center justify-center gap-2">
          <span>© 2024 Sweets Swap. Handcrafted with love and berries.</span>
          <svg className="w-4 h-4 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.41,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.59,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
          </svg>
        </div>
      </footer>
    </>
  );
}
