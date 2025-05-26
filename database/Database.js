import * as SQLite from 'expo-sqlite';

// Open database using the new API (SDK 50+)
const db = SQLite.openDatabaseSync ? SQLite.openDatabaseSync('HandymanPortfolio.db') : SQLite.openDatabase('HandymanPortfolio.db');

const initializeDatabase = async () => {
    try {
        // Create Services table
        await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS Services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        price REAL
      );
    `);

        // Create ServiceRequests table
        await db.execAsync(`
      CREATE TABLE IF NOT EXISTS ServiceRequests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        serviceId INTEGER,
        phoneNumber TEXT,
        billingAddress TEXT,
        shippingAddress TEXT,
        totalPrice REAL,
        createdAt TEXT,
        FOREIGN KEY (serviceId) REFERENCES Services(id)
      );
    `);

        // Check if Services table is empty and seed initial data
        const countResult = await db.getFirstAsync('SELECT COUNT(*) as count FROM Services;');
        const count = countResult.count;

        if (count === 0) {
            const initialServices = [
                { title: 'Electrical Repair', description: 'Fixing outlets, wiring, and lighting fixtures', price: 100.0 },
                { title: 'Carpentry Work', description: 'Custom shelving, furniture, and wood repairs', price: 150.0 },
                { title: 'Plumbing', description: 'Repairing leaks, installing faucets, and unclogging drains', price: 120.0 },
                { title: 'General Repairs', description: 'Home maintenance, drywall fixes, and minor installations', price: 80.0 },
                { title: 'Painting Services', description: 'Interior and exterior painting with high-quality finishes', price: 200.0 },
                { title: 'Furniture Assembly', description: 'Assembling flat-pack furniture like IKEA products', price: 60.0 },
            ];

            for (const service of initialServices) {
                await db.runAsync(
                    'INSERT INTO Services (title, description, price) VALUES (?, ?, ?);',
                    [service.title, service.description, service.price]
                );
            }
            console.log('Initial services seeded:', initialServices.length, 'services added');
        } else {
            console.log('Services table already populated, count:', count);
        }
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
};

// Get all services
const getServices = async () => {
    try {
        const services = await db.getAllAsync('SELECT * FROM Services;');
        return services;
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
};

// Add service to cart (ServiceRequests)
const addToCart = async (serviceId, phoneNumber, billingAddress, shippingAddress) => {
    try {
        const service = await db.getFirstAsync('SELECT price FROM Services WHERE id = ?;', [serviceId]);
        if (!service) {
            throw new Error('Service not found');
        }
        const price = service.price;

        const createdAt = new Date().toISOString();
        await db.runAsync(
            'INSERT INTO ServiceRequests (serviceId, phoneNumber, billingAddress, shippingAddress, totalPrice, createdAt) VALUES (?, ?, ?, ?, ?, ?);',
            [serviceId, phoneNumber || '', billingAddress || '', shippingAddress || '', price, createdAt]
        );
        console.log('Service added to cart, serviceId:', serviceId);
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
    }
};

// Get cart items
const getCartItems = async () => {
    try {
        const cartItems = await db.getAllAsync(`
      SELECT sr.id, sr.serviceId, sr.phoneNumber, sr.billingAddress, sr.shippingAddress, sr.totalPrice, sr.createdAt, s.title, s.description
      FROM ServiceRequests sr
      JOIN Services s ON sr.serviceId = s.id;
    `);
        return cartItems;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

// Remove item from cart
const removeFromCart = async (itemId) => {
    try {
        await db.runAsync('DELETE FROM ServiceRequests WHERE id = ?;', [itemId]);
        console.log('Item removed from cart, itemId:', itemId);
    } catch (error) {
        console.error('Error removing from cart:', error);
        throw error;
    }
};

// Clear cart
const clearCart = async () => {
    try {
        await db.runAsync('DELETE FROM ServiceRequests;');
        console.log('Cart cleared');
    } catch (error) {
        console.error('Error clearing cart:', error);
        throw error;
    }
};

// Static portfolio data
export const getPortfolioItems = () => [
    {
        title: "Kitchen Cabinet Restoration",
        before_image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
        after_image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
        skills_used: "Carpentry, Painting",
        description: "Complete cabinet makeover with new hardware and finish",
    },
    {
        title: "Bathroom Lighting Upgrade",
        before_image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
        after_image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400",
        skills_used: "Electrical",
        description: "Modern LED lighting installation with dimmer controls",
    },
    {
        title: "Deck Refinishing",
        before_image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
        after_image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
        skills_used: "Carpentry, Custom Fixes",
        description: "Weather-damaged deck restored to like-new condition",
    },
];

export const getTestimonials = () => [
    {
        name: "Jane Smith",
        quote: "John was prompt, professional, and did an outstanding job!"
    },
    {
        name: "Mike Johnson",
        quote: "Excellent attention to detail and really great communication!"
    },
    {
        name: "Ava Lee",
        quote: "Transformed our space beautifully — will definitely hire again."
    },
    {
        name: "Carlos Ramirez",
        quote: "Best handyman experience I’ve had in years. Highly recommend!"
    },
    {
        name: "Priya Patel",
        quote: "Clean, quick, and super reliable. Thank you!"
    },
];

export default {
    initializeDatabase,
    getServices,
    addToCart,
    getCartItems,
    removeFromCart,
    clearCart,
    getPortfolioItems,
    getTestimonials
};