import React from 'react';

const BulkSavings = () => {
    return (
        <section className="bg-slate-900 rounded-2xl p-6 text-white text-left relative overflow-hidden">
            <div className="relative z-10 flex flex-col gap-2">
                <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded w-fit uppercase">Exclusive Deal</span>
                <h3 className="text-xl font-bold leading-tight">Save up to 15% on<br />Grain Multi-packs</h3>
                <p className="text-xs text-slate-400">Perfect for large families or stock-piling</p>
                <button className="mt-2 text-primary text-sm font-bold flex items-center gap-1">Bulk Shop Now <span className="material-symbols-outlined">arrow_forward</span></button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
        </section>
    );
};

export default BulkSavings;
