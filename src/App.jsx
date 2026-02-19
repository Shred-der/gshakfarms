import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import TodayPicks from './components/TodayPicks';
import { ValuePropositions, Footer } from './components/Footer';
import MobileTabs from './components/MobileTabs';
import MobileFAB from './components/MobileFAB';
import BulkSavings from './components/BulkSavings';
import CartSidebar from './components/CartSidebar';
import { SiteProvider } from './context/SiteContext';

function App() {
    return (
        <SiteProvider>
            <div className="min-h-screen bg-white text-slate-900 font-display pb-16 md:pb-0">
                <Navbar />
                <CartSidebar />

                <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-12 md:space-y-16">
                    <Hero />
                    <CategorySection />
                    <TodayPicks />
                    <div className="md:hidden">
                        <BulkSavings />
                    </div>
                    <ValuePropositions />
                </main>

                <Footer />

                {/* Mobile-only Persistent Layout Elements */}
                <MobileTabs />
                <MobileFAB />
            </div>
        </SiteProvider>
    );
}

export default App;
