# 📸 Camera Dashboard

 [View it on Vercel](https://wobot-task-ten.vercel.app/)

A responsive and dynamic Camera Dashboard built using **React** and **Vite**, featuring:

- Live camera status
- Search, filter, pagination
- Health indicators with icons
- Fully responsive UI using Tailwind CSS

---

## 🚀 Tech Stack

- ⚡ [Vite](https://vitejs.dev/)
- ⚛️ React
- 🎨 Tailwind CSS
- 📦 Axios / Custom Hooks (if used)
- 🗂️ Modular Component Structure

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/camera-dashboard.git
cd camera-dashboard
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

The app will start on `http://localhost:5173` by default.

---

## 🔧 Folder Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🧪 Scripts

- `npm run dev` – start the local dev server
- `npm run build` – build for production
- `npm run preview` – locally preview production build

---

## 📁 Environment Setup

If you are fetching live API data:

```env
VITE_API_BASE_URL=http://your-api-url.com
```

You can access it using `import.meta.env.VITE_API_BASE_URL`.

---

## 🧹 Prettier & ESLint (optional)

To format code:

```bash
npm run format
```

To lint code:

```bash
npm run lint
```

---

## 📸 Demo

![Camera Dashboard UI](./public/demo.png)

---

## 🤝 Contributing

Pull requests are welcome! Feel free to open issues or suggest new features.

---

## 📝 License

This project is licensed under the MIT License.

---

## 🧑‍💻 Author

Made by [Ashishranjan Prasad](https://github.com/Ranjan-16/Wobot-task)

