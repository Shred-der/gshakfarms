import React from 'react';

const MobileFAB = () => {
    return (
        <button className="fixed md:hidden bottom-20 right-4 w-12 h-12 bg-primary text-slate-900 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center z-40 animate-bounce cursor-pointer">
            <span className="material-symbols-outlined text-2xl font-bold">chat_bubble</span>
        </button>
    );
};

export default MobileFAB;
