# Frontend Development

This branch (`frontend`) is dedicated to frontend development for TerraTrip. The frontend is built using **React Native** to create a cross-platform mobile app (iOS and Android).

---

## Features

### **Screens**
1. **Home Screen:**
   - Search for travel routes by entering origin and destination.
   - Select travel date and time.
   - Display a "Search" button to fetch route options.

2. **Route Results Screen:**
   - Display a list of route options (train, bus, walking, etc.).
   - Show details for each route (duration, cost, CO2 emissions).
   - Highlight the most eco-friendly option.

3. **Accommodation Screen:**
   - Suggest eco-friendly accommodations near the destination.
   - Display details for each accommodation (name, price, rating, eco-certifications).

4. **User Profile Screen:**
   - Allow users to create and manage their profiles.
   - Save preferences (e.g., "prefer trains over buses").
   - View saved routes and carbon savings.

---

### **Components**
1. **SearchBar:**
   - Input fields for origin, destination, and travel date.
   - A "Search" button to trigger route fetching.

2. **RouteCard:**
   - Displays details for a single route option.
   - Includes icons for transportation modes (train, bus, etc.).
   - Shows CO2 emissions and duration.

3. **AccommodationCard:**
   - Displays details for a single accommodation.
   - Includes photos, price, and eco-certifications.

4. **Footer Navigation:**
   - Bottom navigation bar to switch between screens (Home, Profile, etc.).

---

## Tech Stack

### **Frontend**
- **Framework:** React Native (cross-platform mobile development).
- **UI Library:** NativeBase or React Native Paper (for pre-built components).
- **Navigation:** React Navigation (for screen transitions).
- **State Management:** React Context API or Redux (optional for complex state).

### **Backend Integration**
- **API Calls:** Axios or Fetch (to interact with the backend).
- **Endpoints:**
  - `/routes`: Fetch travel routes.
  - `/carbon`: Calculate carbon footprint.
  - `/accommodations`: Fetch eco-friendly accommodations.

---

## Setup

### **Prerequisites**
1. Install **Node.js** and **npm**:
   - Download from [nodejs.org](https://nodejs.org).
2. Install **React Native CLI**:
   ```bash
   npm install -g react-native-cli
