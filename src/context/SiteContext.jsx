import React, { createContext, useContext, useState, useMemo } from 'react';

const SiteContext = createContext();

export const useSite = () => {
    const context = useContext(SiteContext);
    if (!context) {
        throw new Error('useSite must be used within a SiteProvider');
    }
    return context;
};

export const SiteProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [location, setLocation] = useState('Lekki, Lagos');

    // Products Data
    const products = useMemo(() => [
        {
            id: 1,
            name: 'Organic Vine Tomatoes',
            category: 'Produce',
            size: '1kg Basket',
            price: 2100,
            oldPrice: 2500,
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAumov1L-dlSpcFzP8nc_GOdg3PsdNk_QpeU7j6J_IooCO5m2iEm9bH8yNnzX0jBKBAgCR080e2c4iGpXZZF0Z0ghV1IvuhgRz6TeQWLg2Siq3lea2mpKTGyDr6paJl_E4U3x3p_4Js1rDy1gl39-keVvJ1u7hCHP-O7lo3BZu-ZhG6eKC2Jo7utFIAScWday-Dus038UfQzokJh99Ohv2QwtBbOIJlsY5E1Dxq1RwhVDt3gOMla18__4r6xcjlvcnv1eT3fudOInpa',
            badge: 'ORGANIC'
        },
        {
            id: 2,
            name: 'Premium Large Yam',
            category: 'Tubers',
            size: 'Per Tuber (Approx 3kg)',
            price: 4500,
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIpLJn9nw0JnEvcAR_oY6PO8-oJDu_fafBeFtZaabl9_JV5TcbGvR6qFSa4t30K0k5fZ_kMXfzawcPGggH0Aqp_v0eH-4JWNk5yCWbxrzbA_wOtPW-rgs8ko6VZrYwKDtw4zTuI1uZq3xNcLnYkQw1PE9ZijPU4Q4MXHr-xDQa-bBLPIAurCQmyTqhglvqoCkuvPTqv57aULCK1LVj_IOkv_zlzkJx3V4huEJY0ggHsEnMQ9t2lBi8-uLTGLLIcwov283VvnkGycJO'
        },
        {
            id: 3,
            name: 'Farm Raised Whole Chicken',
            category: 'Protein',
            size: 'Dressed & Frozen (1.5kg+)',
            price: 8200,
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFoCkVSy6gmfQSU5HRKFDfWuvNzTE48LfQgJfUtsDeLv9mXYc6wy81Swx3DDrLV7JGBMlhVhw1tm5QhLdJWWY01-OAlPQMjSBdLGXscdcaFO_k5bqIA7lddSJPeevhlqhHVwvibvW4v-W1H5wOAGzktmvfUKOVtBF35DiAiJjvJXswZ581VnX_tS_0zEs-oGSBuyhtRngbkS8xNw-b1h_2N0Ao1mm1jGEGBvkh5oJ2bCSgJuHEVK5XBDkUHOwUfrIg3sIYvj2aEZ_O'
        },
        {
            id: 4,
            name: 'Weekly Family Bundle',
            category: 'Bundles',
            size: 'Essential kitchen set',
            price: 32000,
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHKdWeQQbeoFrIxa3ZcCTkm9dhpbezF6W3PE-re6ad_jz79iTsrFEthY9RLJKw2iyQF1ilavfKSUnX34Xi0sNMuJuG02exGnxeS5CXvru_gFjHuDiFIjnHWF2qusacWkf1fZTMjGB-Ty_R0xz3RnwrVi7F6aD0I4EYzUMXaqOgJMKkm3yZlWjtpdyO10eh0P4vxs0dxzR6LIQ3eETSFHsOxNO6vPXPyLXnAhLQyLFvaMdrsPhqw-eUxaWgxOYF6LrKn1n8MDYVccFu',
            badge: 'POPULAR',
            badgeClass: 'bg-orange-500 text-white'
        },
        {
            id: 5,
            name: 'Fresh Habanero Peppers',
            category: 'Produce',
            size: '500g Bag',
            price: 1200,
            img: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=800&auto=format&fit=crop'
        },
        {
            id: 6,
            name: 'Organic Brown Eggs',
            category: 'Protein',
            size: 'Crate of 30',
            price: 3500,
            img: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=800&auto=format&fit=crop'
        }
    ], []);

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        isCartOpen,
        setIsCartOpen,
        location,
        setLocation,
        products,
        filteredProducts
    };

    return (
        <SiteContext.Provider value={value}>
            {children}
        </SiteContext.Provider>
    );
};
