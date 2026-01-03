# Bitcoin Meetups Directory.

A web application for discovering and creating Bitcoin meetups in El Salvador. This platform allows users to explore Bitcoin meetup events on an interactive map, view detailed information about meetups, and create new meetup events.

## 🌟 Features

### 🗺️ Interactive Meetups Map
- Browse Bitcoin meetups on an interactive map powered by Leaflet
- View meetup locations with markers
- Click markers to see detailed meetup information
- Search for specific meetups
- Zoom and pan to explore different areas

### 📍 Meetup Management
- **View Meetup Details**: Access comprehensive information including title, description, date, and time
- **Create New Meetups**: Add new Bitcoin meetup events with location details
- **Search Functionality**: Find meetups quickly using the search feature

### 🔐 User Authentication
- User registration with name, email, and password
- Secure login system
- Protected routes for authenticated users

### 🏠 Home Dashboard
- Clean landing page with quick navigation
- Direct access to the map view
- Easy meetup creation

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.9.6
- **Map Integration**: Leaflet 1.9.4 & React-Leaflet 5.0.0
- **Icons**: React Icons 5.5.0
- **Linting**: ESLint 9.39.1
- **Styling**: CSS Modules

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/adiel23/BMD-REACT.git
cd BMD-REACT
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## 💡 Usage

1. **Viewing Meetups**: Click "Open Map" on the home page to browse all Bitcoin meetups in El Salvador
2. **Search**: Use the search feature on the map to find specific meetups
3. **Create Meetup**: Click "Create Meetup" and fill in the required details (requires authentication)
4. **Authentication**: Register or login to access protected features

## 📜 Available Scripts

- `npm run dev` - Starts the development server with hot module replacement
- `npm run build` - Creates an optimized production build
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check code quality

## 📁 Project Structure

```
BMD-REACT/
├── src/
│   ├── features/
│   │   ├── auth/              # Authentication feature
│   │   │   ├── components/    # Form components, HomeIcon
│   │   │   ├── hooks/         # useLogin, useRegister
│   │   │   ├── pages/         # LoginPage, RegisterPage
│   │   │   └── services/      # Auth API services
│   │   ├── home/              # Home page feature
│   │   │   ├── hooks/         # Navigation hooks
│   │   │   └── pages/         # Home landing page
│   │   └── meetups/           # Meetups feature
│   │       ├── components/    # Map, Search, Form components
│   │       ├── hooks/         # Meetup-related hooks
│   │       ├── pages/         # MeetupsMapPage, CreateMeetupPage
│   │       └── services/      # Meetups API services
│   ├── App.jsx                # Main app component with routing
│   ├── main.jsx               # App entry point
│   └── all.css                # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── eslint.config.js           # ESLint configuration
```

## 🗺️ Routes

- `/` - Home page with navigation options
- `/meetups-map` - Interactive map showing all meetups
- `/create-meetup` - Form to create a new meetup
- `/login` - User login page
- `/register` - User registration page

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is available for use under the repository's license terms.

## 👨‍💻 Author

Created by [adiel23](https://github.com/adiel23)

---

Built with ⚡ Vite and ⚛️ React
