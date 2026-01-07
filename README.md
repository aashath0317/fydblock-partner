# FydBlock Partner Portal

🚀 **Project Overview**

**FydBlock Partner** is the official affiliate and partner onboarding interface for the FydBlock crypto trading ecosystem. Built with **React** and **Vite**, this high-performance web application allows users to join the affiliate program, calculate potential earnings, and access marketing tools.

The UI features a premium **dark mode** design with neon green accents (`#00FF9D`), glassmorphism, smooth animations, and a fintech-grade layout matching the FydBlock brand identity.

---

## ✨ Key Features

- **💸 Interactive Earnings Calculator**  
  Dynamic slider enabling potential partners to estimate monthly earnings based on referrals.

- **🎨 Modern UI/UX**  
  Fully responsive design with Tailwind animations (floating cards, infinite marquees, blur effects).

- **🔐 Authentication**  
  Sign In & Sign Up pages with tab switching, validation, and password visibility toggles.

- **🌐 Exchange Support Showcase**  
  Auto-scrolling marquee showing Binance, Coinbase, Kraken, Bybit, OKX, and more.

- **📱 Mobile Optimized Navigation**  
  Custom mobile drawer menu for smooth small-screen experience.

---

## 🛠️ Tech Stack

- **Framework:** React 18  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **Router:** React Router DOM  
- **Icons:** Lucide React  
- **Deployment:** Vercel (configured via `vercel.json`)

---

## 📂 Project Structure

```bash
fydblock-partner/
├── public/              # Static assets (logos, favicon, hero images)
├── src/
│   ├── components/      # Shared UI components
│   ├── App.jsx          # Main route definitions
│   ├── LandingPage.jsx  # Affiliate landing page with calculator
│   ├── SignIn.jsx       # Login page
│   ├── SignUp.jsx       # Registration page
│   ├── Footer.jsx       # Reusable footer component
│   ├── main.jsx         # App entry point
│   └── index.css        # Tailwind & global styles
├── tailwind.config.js   # Tailwind customization
└── vite.config.js       # Vite configuration
```

---

## 🏁 Getting Started

### 1. Prerequisites  
Ensure **Node.js v18+** is installed.

### 2. Installation

```bash
git clone https://github.com/yourusername/fydblock-partner.git
cd fydblock-partner
npm install
```

### 3. Environment Setup  
Create a `.env` file (optional):

```env
VITE_API_BASE_URL=http://localhost:5000
```

### 4. Run Development Server

```bash
npm run dev
```

App will run on:  
**http://localhost:5173**

---

## 🚀 Deployment (Vercel)

This project supports automatic Vercel deployment.

1. Push your code to GitHub.  
2. Import your repo into Vercel.  
3. Add environment variables if needed (`VITE_API_BASE_URL`).  
4. Deploy — Vercel will detect Vite automatically.

**Build Command:** `npm run build`  
**Output Directory:** `dist`

---

## 📄 License

This project is licensed under the **MIT License**.
