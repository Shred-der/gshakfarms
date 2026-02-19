import React from 'react';

const CategorySection = () => {
    const categories = [
        {
            name: 'Fresh Produce',
            items: '120+ Items',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW8QjxaEduerLcsMlCcZigMpQAb4yt25u93IVeRnhzjEO1dBQ9p_n0En_xwo0_pqSghewl2LPWFRpC0U3379sM8L0EYFmMbE0XY87UJy8bpLXAN65bqOozotNuiEnfJhPKnRSR69jYf-iAOV4FfHAB2g2PUZJ4bXgMk1x0_fsHcA2X2uHVm7YgiLU7Ujr82JDwNjhSQpBRswPSr-6O7cxw8qsZw-NwC4SHwtoP8gTpjmvsVik9-whPwemxe9-ac1CsAlcJ3ABGNjJK'
        },
        {
            name: 'Tubers & Grains',
            items: '85+ Items',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiJ6jrmChzC8sc7qoUi4rh0bafYTXMcnsh22U3EwlLS0iX8_RQfnLqo368UvFfsnhzXGZgP1-xjdU-OJJxgbdrCOCbNUATKSKcUwWLMGgKWO_zI9dZGY7DSszV5SgjXbTiuw4Va84yBtPfwVk8PsMAg429YfaPMAfbWu3vReeQ3nPJZK_gRfG0x6WMt1AGAbXQ8EDXl1oCRGgPqubEc9Vp45ZGxHiYNrB_RM1f3nfLe8tyZGDOmz3vIwxUo4oOwZubjaSimIb7YtI7'
        },
        {
            name: 'Fruits',
            items: '40+ Items',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtBY51FPDUnrzVpqSQ710oUTtvUsUGVSyKWirAxl-2OS8ZsLiTr_ydyRNCQanHc0RevwNvtL8rNBJwEJyuXAhM2SUTWrB50UAELBdcyTJAOmXi4c5hUOFDYPFgkazP5fpbJ2p05VfW1aT3lUohnChe4MdOEgCWWop8HruSfpPq5rr3z_W5bwmlZwRZ-Ib2DS_x3iybplD3bkk3q15_EMiT5TWTtIFruRHi93TRkW0R5AusKPJk9PND0ahjFzJ5Bs0K4j62kHQt1rk5'
        },
        {
            name: 'Protein',
            items: '60+ Items',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKTqTpQmEmhrxcgnfmnopZ0E5RQcAfB_eqO2M3-SNK_Et2bahompMT5Z1Y_cDkmNUMKNIXSl9dovJbA3vbfEpCLO4pQrnFYgn7bkF0eFwD2CZY6_3DHwHxEZPOd9nxtmrqKYgXR9K9nAuLfxgubU4Xk4igmaoH7tPQJSz-XfH-cr8Ru3Qg_JEeV55RmQNqd3_mguXK_NsOEjEWyGXUmWLUaQ9974wQzi-UMUJUvhhXe3tQTlV-V2mvJiGb3G_OLL-EtZCGjLm57cL-'
        },
        {
            name: 'Food Bundles',
            items: 'Bulk Savings',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_glPVANAHVSa_vuH2nQRAg0n5L-WX2DAYYMyKugWP2diHMZ9X5YWRbPEdPgIZG23fJBHS8ZE4ivypC_uGz7zl-8DxEoJnTlxiaDdVaOduFOMzsou7-xqlkmSovGMExHzG6oCzSu9ttA_wuP4FcPqRgTCctFY_czBNsXKU39kkj5zjiAH9gfnd3yqZEI7K9tV4nufOTgdWeaue0LRvzFg2hBNRR2X-BitVtDn0WjDp7gJFo_lpe1qEUle-8W8FhvqJTmddCNwmw6SX'
        },
    ];

    return (
        <section>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-extrabold">Shop by Category</h2>
                    <p className="text-slate-500 text-sm">Find everything you need for your kitchen</p>
                </div>
                <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                    View All <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.map((cat, idx) => (
                    <a key={idx} className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-200 card-shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1" href="#">
                        <img
                            alt={cat.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            src={cat.img}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-left">
                            <p className="text-white font-bold text-lg">{cat.name}</p>
                            <p className="text-primary text-xs font-medium">{cat.items}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
