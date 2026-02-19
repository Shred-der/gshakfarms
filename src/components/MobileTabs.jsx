import React from 'react';

const MobileTabs = () => {
    const tabs = [
        { icon: 'home', label: 'Home', active: true },
        { icon: 'grid_view', label: 'Shop', active: false },
        { icon: 'shopping_cart', label: 'Cart', count: 0 },
        { icon: 'receipt_long', label: 'Orders', active: false },
        { icon: 'person', label: 'Account', active: false },
    ];

    return (
        <nav className="fixed md:hidden bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-2 py-2 z-50">
            <div className="flex justify-around items-center">
                {tabs.map((tab, idx) => (
                    <button key={idx} className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all ${tab.active ? 'text-primary' : 'text-slate-500'}`}>
                        <div className="relative">
                            <span className="material-symbols-outlined text-2xl">
                                {tab.icon}
                            </span>
                            {tab.count !== undefined && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-[9px] text-white font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                                    {tab.count}
                                </span>
                            )}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default MobileTabs;
