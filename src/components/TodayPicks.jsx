import { useSite } from '../context/SiteContext';

const TodayPicks = () => {
    const { filteredProducts, addToCart, activeCategory } = useSite();

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
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-3 md:p-4 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 text-left flex flex-col h-full card-shadow relative">
                            <div className="relative aspect-square rounded-xl overflow-hidden mb-3 md:mb-5 bg-slate-50">
                                {product.badge && (
                                    <span className={`absolute top-2 md:top-3 left-2 md:left-3 z-10 ${product.badgeClass || 'bg-primary/20 text-primary'} text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:py-1 rounded-md`}>
                                        {product.badge}
                                    </span>
                                )}

                                {/* Favorite Button - Visible on Mobile */}
                                <button className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm transition-colors cursor-pointer">
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
                                        {product.oldPrice && <span className="text-[10px] md:text-xs text-slate-400 line-through">₦{product.oldPrice.toLocaleString()}</span>}
                                        <p className="text-base md:text-lg font-bold text-primary">₦{product.price.toLocaleString()}</p>
                                    </div>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="w-9 h-9 md:w-11 md:h-11 bg-primary text-slate-900 rounded-xl hover:scale-110 transition-transform flex items-center justify-center shadow-lg shadow-primary/20 active:scale-95 cursor-pointer"
                                    >
                                        <span className="material-symbols-outlined font-black text-xl md:text-2xl">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center">
                        <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">search_off</span>
                        <p className="text-slate-500 font-medium">No products found for "{activeCategory}" matching your search.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TodayPicks;
