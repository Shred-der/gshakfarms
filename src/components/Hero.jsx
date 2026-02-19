import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-[480px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
            <img
                alt="Fresh Produce Hero"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Lush green organic vegetables arranged on a farm table"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxj2NXFTPaP5gSikMLgbFoMsIrt6KVqy6ORkECHBdvhoteYkmXobWMzMkb4Q8qDYknPM_2XPEhtV2i-evK40bi-lBkVZDyCTnHcdoaFkRifmUcyzOyZ8DpBbH_kC4jsZdt53_8aJCILinU_oe9j0Dgt9DZbj2Xgf52WoxWddUPYESpOMbmRZed58qkB_pZSqpeTiZd6PrfxCOUOBEHGEHwhSDuUJxeYtv3NAWmOrQMWUIImKS1GfMUxhU6pyvmRKeVNL7zsHBznPd7"
            />
            <div className="relative z-20 h-full flex flex-col justify-center px-12 max-w-2xl text-white text-left">
                <span className="bg-primary/90 text-background-dark text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">FARM DIRECT EXPERIENCE</span>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    Freshness from Our <span className="text-primary">Farm</span> to Your <span className="text-primary">Table</span>.
                </h1>
                <p className="text-lg text-slate-200 mb-8 max-w-lg">
                    Experience the finest organic produce delivered straight to your doorstep. Quality you can taste, farming you can trust.
                </p>
                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-primary text-background-dark text-lg font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                        Shop Now <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white text-lg font-bold rounded-xl hover:bg-white/30 transition-colors">
                        View Deals
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
