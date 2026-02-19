import React from 'react';

const Navbar = () => {
    return (
        <>
            {/* Utility Top Bar */}
            <div className="bg-primary/10 py-2 px-6 border-b border-primary/20">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-primary">call</span>
                            <span>Support: +234 800 GSHAK FARMS</span>
                        </div>
                        <div className="hidden md:flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-primary">mail</span>
                            <span>hello@gshakfarms.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <a className="hover:text-primary transition-colors" href="#">Charity</a>
                        <a className="hover:text-primary transition-colors" href="#">Blog</a>
                        <a className="hover:text-primary transition-colors" href="#">About Us</a>
                        <a className="hover:text-primary transition-colors" href="#">FAQs</a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2 shrink-0">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-2xl">eco</span>
                            </div>
                            <h1 className="text-xl font-extrabold tracking-tight hidden lg:block">GSHAK <span className="text-primary">Farms</span></h1>
                        </div>

                        {/* Location Selector */}
                        <button className="hidden md:flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg hover:ring-1 ring-primary transition-all text-left">
                            <span className="material-symbols-outlined text-primary">location_on</span>
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase leading-none">Deliver to</p>
                                <p className="text-sm font-semibold leading-tight">Lagos, NG</p>
                            </div>
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </button>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-xl relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-primary text-sm outline-none transition-all"
                                placeholder="Search for fresh tomatoes, yams, or food bundles..."
                                type="text"
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4 shrink-0">
                            <div className="hidden xl:flex items-center gap-2">
                                <button className="px-4 py-2 text-sm font-bold hover:text-primary transition-colors">Login</button>
                                <button className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all">Register</button>
                            </div>
                            <button className="relative p-2 bg-slate-100 rounded-full hover:bg-primary/20 transition-colors group">
                                <span className="material-symbols-outlined group-hover:text-primary transition-colors">shopping_cart</span>
                                <span className="absolute -top-1 -right-1 bg-primary text-[10px] font-bold text-white w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">0</span>
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-8 whitespace-nowrap">
                            <button className="flex items-center gap-2 text-sm font-bold text-primary">
                                <span className="material-symbols-outlined">menu</span>
                                Categories
                            </button>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Shop Now</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Gift Cards</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Seasonal Specials</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Wholesale</a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
