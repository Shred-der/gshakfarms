import React from 'react';
import { useSite } from '../context/SiteContext';

const Toast = () => {
    const { notification } = useSite();

    if (!notification.show) return null;

    return (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-slate-900/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-slate-900">
                    <span className="material-symbols-outlined text-lg font-bold">
                        {notification.message.includes('Added') ? 'shopping_cart_checkout' : 'delete_sweep'}
                    </span>
                </div>
                <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest leading-none mb-1">{notification.message}</p>
                    <p className="text-sm font-semibold text-white/90 leading-tight line-clamp-1">{notification.productName}</p>
                </div>
            </div>
        </div>
    );
};

export default Toast;
