import React from 'react';
import { useSite } from '../context/SiteContext';

const CartSidebar = () => {
    const {
        isCartOpen,
        setIsCartOpen,
        cart,
        cartTotal,
        updateQuantity,
        removeFromCart
    } = useSite();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Sidebar */}
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
                <div className="w-screen max-w-md">
                    <div className="h-full flex flex-col bg-white shadow-2xl">
                        {/* Header */}
                        <div className="px-6 py-6 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900">Your Cart</h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                            {cart.length > 0 ? (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 group">
                                        <div className="w-20 h-20 bg-slate-50 rounded-xl overflow-hidden shrink-0">
                                            <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-1">
                                                <h3 className="text-sm font-bold text-slate-800 line-clamp-1">{item.name}</h3>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-slate-400 hover:text-red-500 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-lg">delete</span>
                                                </button>
                                            </div>
                                            <p className="text-xs text-slate-500 mb-3">{item.size}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center bg-slate-100 rounded-lg p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-sm font-bold">remove</span>
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-sm font-bold">add</span>
                                                    </button>
                                                </div>
                                                <p className="font-bold text-primary">₦{(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-300">
                                        <span className="material-symbols-outlined text-4xl">shopping_cart</span>
                                    </div>
                                    <p className="text-slate-500 font-medium">Your cart is empty</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="mt-4 text-primary font-bold hover:underline"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-8 border-t border-slate-100 bg-slate-50/50">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-slate-500 font-medium">Total Amount</span>
                                <span className="text-2xl font-black text-slate-900 font-display">₦{cartTotal.toLocaleString()}</span>
                            </div>
                            <button className="w-full h-14 bg-primary text-slate-900 font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                                <span>Proceed to Checkout</span>
                                <span className="material-symbols-outlined font-black">arrow_forward</span>
                            </button>
                            <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">Secure Checkout by GshakPay</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
