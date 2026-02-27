# 📊 Admin Dashboard System (React + MUI)

A modern and responsive **Admin Dashboard** built using **React** and **Material UI (MUI)**.  
This project extends a UI-based tutorial by implementing **functional features**, including a **Notification System** and **Report Download functionality**, making the dashboard more interactive and practical.

---

## 🚀 Features

### ✅ Core Dashboard Features

- Responsive admin dashboard layout
- Light / Dark theme toggle
- Sidebar navigation
- Data tables using MUI DataGrid
- Charts and analytics components (Line, Bar, Geography)
- Search bar integration
- Stat boxes with progress indicators
- Geography-based traffic visualization

---

### 🔔 Notification Bar (Custom Feature)

Unlike the original tutorial which focused mainly on UI, this project includes a **functional notification bar**:

- Notification icon displayed in the top bar
- Clickable dropdown menu showing notifications
- Red indicator dot when notifications are available
- Notifications managed using React state
- Easily extendable to connect with backend or real-time updates

📌 **Why this matters:**  
This turns a static UI element into an **interactive system component**, improving usability and realism.

---

### 📥 Download Reports Feature (Custom Feature)

This project also includes a **report download feature**, which was **not part of the original tutorial**:

- Users can download reports directly from the dashboard
- Simulates real-world admin workflows (e.g. exporting data)
- Designed to be easily integrated with backend APIs or databases in the future

📌 **Why this matters:**  
It demonstrates **practical system functionality**, not just visual UI design.

---

## ⚡ Getting Started

### Prerequisites

- Node.js
- npm

### Installation & Running

1. Clone the repo:
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```

### Install dependencies

npm install

### Start the development server

npm start

Open your browser at http://localhost:3000

---

---
## References
I watched this youtube video to learn how to fully function react for the first time -> https://www.youtube.com/watch?v=wYpCWwD1oz0&list=PLEYW3pZS6IQ_a-iYAno4VsZonrikphq8L

## 🛠️ Tech Stack
 - **Frontend:** React.js 
 - **UI Library:** Material UI (MUI) 
 - **Charts & Visualization:** Nivo Charts 
 - **State Management:** React Hooks
 - **Icons:** MUI Icons 
 - **Styling:** MUI Theme + Custom Tokens ---

 ## 📂 Project Structure

text
src/
├─ components/ # Reusable components: StatBox, LineChart, BarChart, ProgressCircle, GeographyChart
├─ data/ # Mock data for transactions, users, charts
├─ scenes/ # Pages including Dashboard and potential future pages
│ └─ dashboard/
├─ theme/ # Custom theme provider with light/dark mode
├─ App.jsx # Main app routing
└─ index.js # App entry point
