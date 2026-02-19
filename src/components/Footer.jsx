import React from 'react';

export const ValuePropositions = () => (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-3xl border border-slate-100">
        {[
            { icon: 'local_shipping', title: 'Express Delivery', desc: 'Same day delivery for orders before 10 AM. Freshness guaranteed.' },
            { icon: 'verified_user', title: 'Farm Direct', desc: 'Eliminating middlemen to give you the best prices and highest quality.' },
            { icon: 'volunteer_activism', title: 'Eco-Friendly', desc: 'Sustainably grown and packaged to protect our beautiful planet.' }
        ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
        ))}
    </section>
);

export const Footer = () => (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-12 gap-12">
            <div className="col-span-2 md:col-span-2 space-y-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-lg">eco</span>
                    </div>
                    <span className="text-lg font-extrabold tracking-tight">GSHAK <span className="text-primary">Farms</span></span>
                </div>
                <p className="text-xs text-slate-400 mt-auto hidden md:block">© 2026 GSHAK Farms. All rights reserved.</p>
            </div>

            {[
                { title: 'Categories', links: ['Fresh Produce', 'Tubers & Grains', 'Fruits', 'Protein', 'Food Bundles', 'Cooking Essentials', 'Organic Foods', 'Household', 'Baking & Dairy', 'Packaged Foods'] },
                { title: 'Company', links: ['About Us', 'Contact Us', 'FAQ'] },
                { title: 'Policy', links: ['Return Policy', 'Privacy Policy', 'Terms & Conditions', 'Cookie Policy'] },
                { title: 'Social', links: ['Facebook', 'Instagram', 'Twitter', 'YouTube'] }
            ].map((col, idx) => (
                <div key={idx} className="col-span-1 md:col-span-2">
                    <h5 className="text-slate-400 text-sm font-semibold mb-6 uppercase tracking-wider">{col.title}</h5>
                    <ul className="space-y-3 text-sm font-medium text-slate-700">
                        {col.links.map(link => (
                            <li key={link}><a className="hover:text-primary transition-colors" href="#">{link}</a></li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="col-span-2 md:col-span-2">
                <h5 className="text-slate-400 text-sm font-semibold mb-6 uppercase tracking-wider">Get the app</h5>
                <div className="space-y-3">
                    <a className="block" href="#">
                        <img alt="Download on App Store" className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" />
                    </a>
                    <a className="block" href="#">
                        <img alt="Get it on Google Play" className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
                    </a>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 md:hidden text-center text-xs text-slate-400">
            © 2026 GSHAK Farms. All rights reserved.
        </div>
    </footer>
);
