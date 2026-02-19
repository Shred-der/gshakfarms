import React from 'react';

const TodayPicks = () => {
    const products = [
        {
            name: 'Organic Vine Tomatoes',
            category: 'Produce',
            size: '1kg Basket',
            price: '2,100',
            oldPrice: '2,500',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAumov1L-dlSpcFzP8nc_GOdg3PsdNk_QpeU7j6J_IooCO5m2iEm9bH8yNnzX0jBKBAgCR080e2c4iGpXZZF0Z0ghV1IvuhgRz6TeQWLg2Siq3lea2mpKTGyDr6paJl_E4U3x3p_4Js1rDy1gl39-keVvJ1u7hCHP-O7lo3BZu-ZhG6eKC2Jo7utFIAScWday-Dus038UfQzokJh99Ohv2QwtBbOIJlsY5E1Dxq1RwhVDt3gOMla18__4r6xcjlvcnv1eT3fudOInpa',
            badge: 'ORGANIC'
        },
        {
            name: 'Premium Large Yam',
            category: 'Tubers',
            size: 'Per Tuber (Approx 3kg)',
            price: '4,500',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIpLJn9nw0JnEvcAR_oY6PO8-oJDu_fafBeFtZaabl9_JV5TcbGvR6qFSa4t30K0k5fZ_kMXfzawcPGggH0Aqp_v0eH-4JWNk5yCWbxrzbA_wOtPW-rgs8ko6VZrYwKDtw4zTuI1uZq3xNcLnYkQw1PE9ZijPU4Q4MXHr-xDQa-bBLPIAurCQmyTqhglvqoCkuvPTqv57aULCK1LVj_IOkv_zlzkJx3V4huEJY0ggHsEnMQ9t2lBi8-uLTGLLIcwov283VvnkGycJO'
        },
        {
            name: 'Farm Raised Whole Chicken',
            category: 'Protein',
            size: 'Dressed & Frozen (1.5kg+)',
            price: '8,200',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFoCkVSy6gmfQSU5HRKFDfWuvNzTE48LfQgJfUtsDeLv9mXYc6wy81Swx3DDrLV7JGBMlhVhw1tm5QhLdJWWY01-OAlPQMjSBdLGXscdcaFO_k5bqIA7lddSJPeevhlqhHVwvibvW4v-W1H5wOAGzktmvfUKOVtBF35DiAiJjvJXswZ581VnX_tS_0zEs-oGSBuyhtRngbkS8xNw-b1h_2N0Ao1mm1jGEGBvkh5oJ2bCSgJuHEVK5XBDkUHOwUfrIg3sIYvj2aEZ_O'
        },
        {
            name: 'Weekly Family Bundle',
            category: 'Bundles',
            size: 'Essential kitchen set',
            price: '32,000',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHKdWeQQbeoFrIxa3ZcCTkm9dhpbezF6W3PE-re6ad_jz79iTsrFEthY9RLJKw2iyQF1ilavfKSUnX34Xi0sNMuJuG02exGnxeS5CXvru_gFjHuDiFIjnHWF2qusacWkf1fZTMjGB-Ty_R0xz3RnwrVi7F6aD0I4EYzUMXaqOgJMKkm3yZlWjtpdyO10eh0P4vxs0dxzR6LIQ3eETSFHsOxNO6vPXPyLXnAhLQyLFvaMdrsPhqw-eUxaWgxOYF6LrKn1n8MDYVccFu',
            badge: 'POPULAR',
            badgeClass: 'bg-orange-500 text-white'
        }
    ];

    return (
        <section>
            <div className="flex items-center justify-between mb-4 md:mb-8 text-left">
                <div>
                    <h2 className="text-lg md:text-2xl font-bold md:font-extrabold">Today's Top Picks</h2>
                    <p className="text-slate-500 text-xs md:text-sm">Harvested fresh this morning from our local farms</p>
                </div>
                <span className="md:hidden bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase">Best Deals</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                {products.map((product, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-3 md:p-4 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 text-left flex flex-col h-full card-shadow relative">
                        <div className="relative aspect-square rounded-xl overflow-hidden mb-3 md:mb-5 bg-slate-50">
                            {product.badge && (
                                <span className={`absolute top-2 md:top-3 left-2 md:left-3 z-10 ${product.badgeClass || 'bg-primary/20 text-primary'} text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:py-1 rounded-md`}>
                                    {product.badge}
                                </span>
                            )}

                            {/* Favorite Button - Visible on Mobile */}
                            <button className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm transition-colors">
                                <span className="material-symbols-outlined text-xl">favorite</span>
                            </button>

                            <img
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                src={product.img}
                            />
                        </div>

                        <div className="flex-grow flex flex-col">
                            <p className="hidden md:block text-xs text-slate-400 font-medium mb-1">{product.category}</p>
                            <h3 className="font-bold text-slate-800 text-sm md:text-base mb-1 md:mb-2 line-clamp-1 md:line-clamp-none">{product.name}</h3>
                            <p className="text-[10px] md:text-sm text-slate-500 mb-3 md:mb-4">{product.size}</p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex flex-col">
                                    {product.oldPrice && <span className="text-[10px] md:text-xs text-slate-400 line-through">₦{product.oldPrice}</span>}
                                    <p className="text-base md:text-lg font-bold text-primary">₦{product.price}</p>
                                </div>
                                <button className="w-9 h-9 md:w-11 md:h-11 bg-primary text-slate-900 rounded-xl hover:scale-110 transition-transform flex items-center justify-center shadow-lg shadow-primary/20 active:scale-95">
                                    <span className="material-symbols-outlined font-black text-xl md:text-2xl">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TodayPicks;
