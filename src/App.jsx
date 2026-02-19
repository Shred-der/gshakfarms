import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import TodayPicks from './components/TodayPicks';
import { ValuePropositions, Footer } from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-display">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-12 md:space-y-16">
                <Hero />
                <CategorySection />
                <TodayPicks />
                <ValuePropositions />
            </main>

            <Footer />
        </div>
    );
}

export default App;
