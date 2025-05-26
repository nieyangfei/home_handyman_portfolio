import * as SQLite from 'expo-sqlite';

// Open database
const db = SQLite.openDatabaseSync
    ? SQLite.openDatabaseSync('HandymanPortfolio.db')
    : SQLite.openDatabase('HandymanPortfolio.db');

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
                serviceType TEXT,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                email TEXT,
                address TEXT NOT NULL,
                description TEXT NOT NULL,
                urgency TEXT DEFAULT 'normal',
                preferredDate TEXT,
                preferredTime TEXT,
                status TEXT DEFAULT 'pending',
                totalPrice REAL,
                createdAt TEXT,
                updatedAt TEXT,
                FOREIGN KEY (serviceId) REFERENCES Services(id)
            );
        `);

        // Check if Services table is empty and seed initial data
        const countResult = await db.getFirstAsync(
            'SELECT COUNT(*) as count FROM Services;',
        );
        const count = countResult.count;

        if (count === 0) {
            const initialServices = [
                {
                    title: 'Electrical Services',
                    description:
                        'Wiring, outlets, fixtures, and electrical repairs',
                    price: 100.0,
                },
                {
                    title: 'Carpentry Work',
                    description: 'Custom furniture, shelving, and wood repairs',
                    price: 150.0,
                },
                {
                    title: 'Plumbing Services',
                    description: 'Pipes, faucets, toilets, and leak repairs',
                    price: 120.0,
                },
                {
                    title: 'General Repairs',
                    description:
                        'Home maintenance, drywall fixes, and installations',
                    price: 80.0,
                },
                {
                    title: 'Painting Services',
                    description:
                        'Interior and exterior painting with quality finishes',
                    price: 200.0,
                },
                {
                    title: 'Fixture Installation',
                    description:
                        'Install lights, fans, shelving, and home fixtures',
                    price: 60.0,
                },
            ];

            for (const service of initialServices) {
                await db.runAsync(
                    'INSERT INTO Services (title, description, price) VALUES (?, ?, ?);',
                    [service.title, service.description, service.price],
                );
            }
            console.log(
                'Initial services seeded:',
                initialServices.length,
                'services added',
            );
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

// Add service request
const addServiceRequest = async (requestData) => {
    try {
        const {
            serviceId,
            serviceType,
            name,
            phone,
            email,
            address,
            description,
            urgency,
            preferredDate,
            preferredTime,
            status,
            createdAt,
        } = requestData;

        const updatedAt = new Date().toISOString();

        await db.runAsync(
            `
            INSERT INTO ServiceRequests (
                serviceId, serviceType, name, phone, email, address, 
                description, urgency, preferredDate, preferredTime, 
                status, createdAt, updatedAt
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
            [
                serviceId,
                serviceType,
                name,
                phone,
                email || '',
                address,
                description,
                urgency || 'normal',
                preferredDate || '',
                preferredTime || '',
                status || 'pending',
                createdAt,
                updatedAt,
            ],
        );

        console.log('Service request added successfully');
    } catch (error) {
        console.error('Error adding service request:', error);
        throw error;
    }
};

// Get all service requests
const getServiceRequests = async () => {
    try {
        const requests = await db.getAllAsync(`
            SELECT * FROM ServiceRequests 
            ORDER BY createdAt DESC;
        `);
        return requests;
    } catch (error) {
        console.error('Error fetching service requests:', error);
        throw error;
    }
};

// Update service request status
const updateServiceRequestStatus = async (requestId, status) => {
    try {
        const updatedAt = new Date().toISOString();
        await db.runAsync(
            'UPDATE ServiceRequests SET status = ?, updatedAt = ? WHERE id = ?;',
            [status, updatedAt, requestId],
        );
        console.log('Service request status updated:', requestId, status);
    } catch (error) {
        console.error('Error updating service request status:', error);
        throw error;
    }
};

// Delete service request
const deleteServiceRequest = async (requestId) => {
    try {
        await db.runAsync('DELETE FROM ServiceRequests WHERE id = ?;', [
            requestId,
        ]);
        console.log('Service request deleted:', requestId);
    } catch (error) {
        console.error('Error deleting service request:', error);
        throw error;
    }
};

const resetDatabase = async () => {
    try {
        console.log('Resetting database...');
        await db.execAsync('DROP TABLE IF EXISTS ServiceRequests;');
        await db.execAsync('DROP TABLE IF EXISTS Services;');
        console.log('Old tables dropped');

        await initializeDatabase();
    } catch (error) {
        console.error('Reset error:', error);
        throw error;
    }
};

export default {
    initializeDatabase,
    getServices,
    addServiceRequest,
    getServiceRequests,
    updateServiceRequestStatus,
    deleteServiceRequest,
    resetDatabase,
};
