# Professional Handyman Portfolio App

A modern React Native mobile application designed as a Portfolio for a Professional Home Handyman to showcase their services, manage client inquiries, and build their business presence.

## 📱 Features

### 🏠 **Amazing Home Experience**

- Professional hero section with profile and ratings
- Quick service access buttons
- Featured skills and gallery highlights
- Client testimonials and guarantees

### 🛠️ **Comprehensive Services**

- **Electrical Services** - Wiring, outlets, fixtures, and repairs
- **Carpentry Work** - Custom furniture, shelving, and woodwork
- **Plumbing Services** - Pipes, faucets, leak repairs, and installations
- **General Repairs** - Drywall, painting, maintenance, and installations

### 📋 **Service Request System**

- Detailed service request forms with urgency levels
- Customer contact information collection
- Preferred scheduling options
- Real-time request tracking and status updates

### 🎯 **Professional Portfolio**

- Detailed skills breakdown by category
- Before/after project gallery with filtering
- Professional profile with certifications
- Multiple contact methods

# 📖 How to Use the App

## Navigation

The app features a simple bottom tab navigation that's self-explanatory:

- **Home** – Main dashboard with profile, services overview, and quick access to **Skills** and **Gallery**
- **Services** – Browse detailed service categories and request quotes
- **Inquiries** – View and manage submitted service requests
- **Profile** – Professional information and contact details

## Making Service Requests

1. Navigate to any **service screen** and tap **"Request Quote"**
2. Fill out the service request form with:
    - Your contact information
    - Job description
    - Preferred timing
3. Submit the request – it will appear in the **Inquiries** tab where you can track its status

## Exploring Content

- Browse the **Skills** section from the Home screen to see detailed expertise breakdowns
- Check out the **Gallery** for before/after project photos with category filtering
- Use the **Contact** section for direct communication via phone, email, or text

The app is designed to be intuitive – simply **tap around** to explore the different sections and features.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **Expo CLI** (`npm install -g @expo/cli`)
- **iOS Simulator** or **Android Emulator**

### Installation

1.  **Clone and install**

    ```bash
    git clone https://github.com/yourusername/home-handyman-portfolio.git
    cd skilled-hands-app
    npm install
    ```

2.  **Install additional packages**

    ```bash
    npm install @react-navigation/bottom-tabs expo-linear-gradient react-native-safe-area-context
    ```

3.  **Start the app**

    ```bash
    npx expo start
    ```

4.  **Run on device**
    - Press `i` for iOS Simulator
    - Press `a` for Android Emulator
    - Scan QR code with Expo Go app

## 📁 Project Structure

```
home-handyman-portfolio/
├── App.js                    # Main navigation & configuration
├── Database.js               # SQLite database management
├── index.js                  # App entry point
├── assets/                   # Images and static files
│   ├── hero-background.jpg
│   ├── profile-placeholder.jpg
│   ├── gallery/              # Before/after project images
│   └── services/             # Service category images
└── screens/                  # App screens
    ├── HomeScreen.js         # Enhanced home with all features
    ├── ServicesScreen.js     # Services overview hub
    ├── ServiceRequestScreen.js # Service request form
    ├── InquiriesScreen.js    # Request management dashboard
    ├── ProfileScreen.js      # Professional profile
    ├── SkillsScreen.js       # Detailed skills showcase
    ├── GalleryScreen.js      # Before/after gallery
    ├── CallToActionScreen.js # Contact methods
    └── [Service Detail Screens]
```

## 🛠️ Technology Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and toolchain
- **React Navigation 6** - Tab and stack navigation
- **SQLite** - Local database storage
- **React Native Safe Area Context** - Device safe area handling
- **Expo Linear Gradient** - Gradient effects
- **Ionicons** - Icon library

## 🗄️ Database Schema

### Services Table

```sql
CREATE TABLE Services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  price REAL
);
```

### ServiceRequests Table

```sql
CREATE TABLE ServiceRequests (
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
  createdAt TEXT,
  updatedAt TEXT
);
```

## 🎨 App Screens

**Home**

- Main landing

- Profile showcase, quick services, testimonials

**Services**

- Service catalog

- Service cards, pricing, request buttons

**Service Request**

- Client inquiry form

- Contact details, job description, urgency

**Inquiries**

- Request management

- Status tracking, client communication

**Profile**

- Professional showcase

- Credentials, experience, contact info

**Skills**

- Expertise breakdown

- Expandable categories, certifications

**Gallery**

- Project showcase

- Before/after images, filtering

**Contact**

- Communication hub

- Multiple contact methods

## 🎯 Key Features

- **Modern UI/UX** with professional design
- **Service Request Flow** from browsing to tracking
- **Professional Portfolio** with skills and gallery
- **Safe Area Handling** for modern devices
- **SQLite Integration** for local data storage
- **Bottom Tab Navigation** for easy access
