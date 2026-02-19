import { useSite } from '../context/SiteContext';

const CategorySection = () => {
    const { activeCategory, setActiveCategory } = useSite();

    const categories = [
        {
            name: 'All',
            icon: 'apps',
            color: 'bg-slate-100 text-slate-600',
            img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
            items: '500+ Items'
        },
        {
            name: 'Produce',
            items: '120+ Items',
            icon: 'restaurant_menu',
            color: 'bg-primary/10 text-primary',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW8QjxaEduerLcsMlCcZigMpQAb4yt25u93IVeRnhzjEO1dBQ9p_n0En_xwo0_pqSghewl2LPWFRpC0U3379sM8L0EYFmMbE0XY87UJy8bpLXAN65bqOozotNuiEnfJhPKnRSR69jYf-iAOV4FfHAB2g2PUZJ4bXgMk1x0_fsHcA2X2uHVm7YgiLU7Ujr82JDwNjhSQpBRswPSr-6O7cxw8qsZw-NwC4SHwtoP8gTpjmvsVik9-whPwemxe9-ac1CsAlcJ3ABGNjJK'
        },
        {
            name: 'Tubers',
            items: '85+ Items',
            icon: 'grass',
            color: 'bg-orange-100 text-orange-600',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiJ6jrmChzC8sc7qoUi4rh0bafYTXMcnsh22U3EwlLS0iX8_RQfnLqo368UvFfsnhzXGZgP1-xjdU-OJJxgbdrCOCbNUATKSKcUwWLMGgKWO_zI9dZGY7DSszV5SgjXbTiuw4Va84yBtPfwVk8PsMAg429YfaPMAfbWu3vReeQ3nPJZK_gRfG0x6WMt1AGAbXQ8EDXl1oCRGgPqubEc9Vp45ZGxHiYNrB_RM1f3nfLe8tyZGDOmz3vIwxUo4oOwZubjaSimIb7YtI7'
        },
        {
            name: 'Protein',
            items: '60+ Items',
            icon: 'egg',
            color: 'bg-blue-100 text-blue-600',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKTqTpQmEmhrxcgnfmnopZ0E5RQcAfB_eqO2M3-SNK_Et2bahompMT5Z1Y_cDkmNUMKNIXSl9dovJbA3vbfEpCLO4pQrnFYgn7bkF0eFwD2CZY6_3DHwHxEZPOd9nxtmrqKYgXR9K9nAuLfxgubU4Xk4igmaoH7tPQJSz-XfH-cr8Ru3Qg_JEeV55RmQNqd3_mguXK_NsOEjEWyGXUmWLUaQ9974wQzi-UMUJUvhhXe3tQTlV-V2mvJiGb3G_OLL-EtZCGjLm57cL-'
        },
        {
            name: 'Bundles',
            items: 'Bulk Savings',
            icon: 'inventory_2',
            color: 'bg-purple-100 text-purple-600',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_glPVANAHVSa_vuH2nQRAg0n5L-WX2DAYYMyKugWP2diHMZ9X5YWRbPEdPgIZG23fJBHS8ZE4ivypC_uGz7zl-8DxEoJnTlxiaDdVaOduFOMzsou7-xqlkmSovGMExHzG6oCzSu9ttA_wuP4FcPqRgTCctFY_czBNsXKU39kkj5zjiAH9gfnd3yqZEI7K9tV4nufOTgdWeaue0LRvzFg2hBNRR2X-BitVtDn0WjDp7gJFo_lpe1qEUle-8W8FhvqJTmddCNwmw6SX'
        },
    ];

    return (
        <section>
            <div className="flex items-center justify-between mb-4 md:mb-8 text-left">
                <div>
                    <h2 className="text-lg md:text-2xl font-bold md:font-extrabold">Shop by Category</h2>
                    <p className="text-slate-500 text-xs md:text-sm">Find everything you need for your kitchen</p>
                </div>
                <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
                    View All <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </button>
            </div>

            {/* Mobile View: Horizontal Scroll Circular Categories */}
            <div className="md:hidden -mx-4 px-6 flex gap-6 overflow-x-auto no-scrollbar py-4">
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`flex flex-col items-center gap-3 min-w-[64px] transition-all relative ${activeCategory === cat.name ? 'scale-105' : 'opacity-80'}`}
                    >
                        <div className={`w-16 h-16 rounded-full ${cat.color} flex items-center justify-center transition-transform active:scale-90 shadow-sm ${activeCategory === cat.name ? 'ring-2 ring-primary ring-offset-4' : ''}`}>
                            <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                        </div>
                        <span className={`text-[11px] font-bold text-center leading-tight whitespace-nowrap ${activeCategory === cat.name ? 'text-primary' : 'text-slate-600'}`}>{cat.name}</span>
                    </button>
                ))}
            </div>

            {/* Desktop View: Gradient Card Grid */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`group relative aspect-square rounded-2xl overflow-hidden bg-slate-200 card-shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${activeCategory === cat.name ? 'ring-4 ring-primary ring-offset-4' : ''}`}
                    >
                        {cat.img ? (
                            <img
                                alt={cat.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                src={cat.img}
                            />
                        ) : (
                            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl text-slate-300">{cat.icon}</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-left">
                            <p className="text-white font-bold text-lg">{cat.name}</p>
                            <p className="text-primary text-xs font-medium">{cat.items || 'All items'}</p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
