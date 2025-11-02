# 🌸 Good Deeds Wall 🌈

**Good Deeds Wall** is a playful, uplifting web app where anyone can anonymously share a kind act they did or witnessed.  
It’s a small step toward making the internet a more positive and encouraging place 💖

---

## ✨ Features

- 📝 **Anonymous Posting** — Share good deeds without needing to sign up.  
- 🎨 **Playful UI** — Soft pastel colors, animated background, and a glowing gradient header.  
- 💬 **Live Feed** — See everyone’s posts update instantly.  
- 💕 **Kindness Wall** — A growing wall of positivity and gratitude.

---

## 🧩 Tech Stack

- **Frontend:** React + TailwindCSS + Custom CSS Animations  
- **HTTP Client:** Axios  
- **Backend (expected):** Node.js + Express (with `/posts` API endpoint)  
- **Styling:** Custom gradients, glassmorphism, and smooth animations  

---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/good-deeds-wall.git
cd good-deeds-wall
bash```
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start the backend (if you have one)
Make sure your backend server (Node/Express) is running and serving the /posts routes:

bash
Copy code
node server.js
It should respond to:

GET http://localhost:5000/posts

POST http://localhost:5000/posts

4️⃣ Run the React app
bash
Copy code
npm run dev
or (for Create React App)

bash
Copy code
npm start
Then visit http://localhost:5173 (Vite) or http://localhost:3000 (CRA).

💻 Project Structure
css
Copy code
good-deeds-wall/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── ...
├── package.json
└── README.md
🎨 UI Preview
A warm, welcoming app with:

A centered, pill-shaped input box

Animated pastel gradient background

Floating hearts and glow effects

“Post It!” button with a gradient hover effect

🧠 Future Ideas
🕊️ Add likes or “thank you” reactions

💫 Allow images or emoji stickers

🌍 Public feed with pagination

🪶 Add a simple moderation layer

💌 Let users filter by “type of deed” (helping, donating, complimenting, etc.)

🩷 Author
Made with love and positivity by [Your Name].
Feel free to fork, remix, or share kindness with your own spin!