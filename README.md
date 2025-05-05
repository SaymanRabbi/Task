🎮 Game List UI Application
A modern React game list interface with filtering, lazy loading, and responsive design using Vite

🧩 Features
Game Type Filtering : Filter games by type (e.g., "Slot Game", "CasinoLive")
Lazy Loading Skeletons : Shimmer animations during data loading
Load More Button : Incrementally load 6 games at a time
Responsive Layout : Optimized for mobile, tablet, and desktop
Modular Components : Clean separation of concerns with reusable components

🛠 Technologies Used
React
^19.0.0
Vite
^6.3.1
Tailwind CSS
^4.1.5
React Plugin
@vitejs/plugin-react@^4.3.4

## 📦 Setup Instructions
✅ Prerequisites
Node.js (v18+ recommended)
npm (v9+ recommended)

📥 Installation Steps
Clone the repository
git clone https://github.com/SaymanRabbi/Task.git
cd game-list-ui

Install dependencies
npm install
Start development server

npm run dev
Open http://localhost:5173 in your browser

## 💡 Key Enhancements
🧱 Component-Based Architecture
GameCard : Reusable game display unit
SkeletonLoader : Smooth loading animation
FilterButtons : Dynamic filter UI
LoadMoreButton : Button with loading spinner

🎨 Visual Improvements
Gradient header text (from-blue-600 to-purple-600)
Animated hover effects on game cards
Shimmer skeletons during loading
Responsive grid layout (sm:grid-cols-2 → lg:grid-cols-4)

## 🧪 Testing & Deployment

🔬 Development Server
npm run dev

📦 Production Build
npm run build

🔍 Preview Build
npm run preview

## 📝 Customization Tips
Update Game Data : Edit game_list.json and game_types.json
Styling : Modify Tailwind classes in components
Add Features :
Infinite scroll (replace "Load More" button)
Game search functionality
Category icons for filters