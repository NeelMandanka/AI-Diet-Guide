<div align="center">

# 🥗 AI Diet Guide

### Personalized Nutrition Recommendation System Using Generative AI

Generate AI-powered personalized daily diet plans based on your health profile, dietary preferences, and fitness goals.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?logo=postgresql&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?logo=google&logoColor=white)
![Render](https://img.shields.io/badge/Deployment-Render-46E3B7)

</div>

---

# 📖 Overview

**AI Diet Guide** is a full-stack web application that generates **personalized daily diet plans** using **Google Gemini**. The application analyzes a user's health profile—including BMI, dietary preferences, activity level, and fitness goals—to recommend nutritious meals along with a grocery list.

The application securely stores generated diet plans, allowing users to review their diet history whenever needed.

---

# ✨ Features

- 🔐 Secure User Registration & Login
- 🛡️ JWT-Based Authentication
- 👤 User Profile Management
- 📊 BMI Calculation
- 🤖 AI-Powered Personalized Daily Diet Generation
- 🛒 Grocery List Generation
- 📜 Diet History
- 📱 Fully Responsive User Interface
- ☁️ Cloud Deployment on Render

---

# 🖥️ Live Demo

| Service | URL |
|---------|-----|
| 🌐 Frontend | **Add Your Render Frontend URL** |
| ⚙️ Backend API | **Add Your Render Backend URL** |

---

# 🏗️ System Architecture

```text
                 AI Diet Guide

       React + TypeScript Frontend
                  │
                  ▼
         Render Static Website
                  │
          REST API (Axios)
                  │
                  ▼
      FastAPI Backend (Render)
                  │
       JWT Authentication Layer
                  │
                  ▼
      PostgreSQL Database (Neon)
                  │
                  ▼
         Google Gemini API
```

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React | User Interface |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Router | Routing |
| TanStack React Query | API State Management |
| Axios | HTTP Client |

---

## Backend

| Technology | Purpose |
|------------|---------|
| FastAPI | REST API |
| Python | Backend Development |
| SQLAlchemy | ORM |
| Alembic | Database Migration |
| JWT | Authentication |

---

## Database

- PostgreSQL (Neon)

---

## Artificial Intelligence

- Google Gemini API
- Gemini 3.5 Flash

---

## Cloud Deployment

- Render
- Neon PostgreSQL

---

# 📂 Project Structure

```text
AI-Diet-Guide/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── alembic/
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## Prerequisites

- Python 3.11+
- Node.js 20+
- PostgreSQL
- Google Gemini API Key

---

## Backend Setup

Clone the repository.

```bash
git clone https://github.com/your-username/AI-Diet-Guide.git
cd AI-Diet-Guide/backend
```

Create a virtual environment.

```bash
python -m venv venv
```

Activate it.

**Windows**

```bash
venv\Scripts\activate
```

**Linux / macOS**

```bash
source venv/bin/activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Configure environment variables.

```env
DATABASE_URL=
SECRET_KEY=
GOOGLE_API_KEY=
GEMINI_MODEL=gemini-3.5-flash
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

Run migrations.

```bash
alembic upgrade head
```

Start the server.

```bash
uvicorn app.main:app --reload
```

---

## Frontend Setup

Navigate to the frontend.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

Run the application.

```bash
npm run dev
```

---

# 🔑 Environment Variables

## Backend

| Variable | Description |
|----------|-------------|
| DATABASE_URL | PostgreSQL Database URL |
| SECRET_KEY | JWT Secret Key |
| GOOGLE_API_KEY | Google Gemini API Key |
| GEMINI_MODEL | Gemini Model Name |
| ACCESS_TOKEN_EXPIRE_MINUTES | JWT Expiry Time |

---

## Frontend

| Variable | Description |
|----------|-------------|
| VITE_API_BASE_URL | Backend API Base URL |

---

# 📡 API Modules

## Authentication

- POST `/auth/register`
- POST `/auth/login`

## User

- GET `/profile`
- PUT `/profile`

## Dashboard

- GET `/dashboard`
- GET `/metrics`

## Diet

- POST `/diet/generate`
- GET `/diet/latest`
- GET `/diet`

---

# 🤖 AI Workflow

```text
User Login
      │
      ▼
Complete User Profile
      │
      ▼
BMI Calculation
      │
      ▼
Prompt Construction
      │
      ▼
Google Gemini API
      │
      ▼
Generate Personalized Diet Plan
      │
      ▼
Store in PostgreSQL
      │
      ▼
Display Diet Plan
```

---

# 🧠 Prompt Engineering

The application uses structured prompt engineering techniques to ensure consistent and reliable AI-generated responses.

### Prompt Strategy

- Role-based prompting
- Structured JSON output
- Nutritional constraints
- Response validation
- Error handling

This approach ensures that every generated diet plan follows a predefined schema and can be processed reliably by the application.

---

# 📸 Application Screenshots

Add screenshots in the `screenshots/` folder and update the paths below.

| Screen | Preview |
|---------|---------|
| Login | `screenshots/login.png` |
| Register | `screenshots/register.png` |
| Dashboard | `screenshots/dashboard.png` |
| Profile | `screenshots/profile.png` |
| Generate Diet | `screenshots/generate-diet.png` |
| Diet History | `screenshots/history.png` |

---

# 🎯 Future Enhancements

- AI Nutrition Chatbot
- Food Image Recognition
- Barcode Scanner
- Nutrition Tracking Dashboard
- Mobile Application
- Doctor & Dietitian Portal
- Multi-language Support
- Wearable Device Integration

---

# 📚 Learning Outcomes

- Full-Stack Web Development
- REST API Development with FastAPI
- JWT Authentication
- Database Design using PostgreSQL
- Prompt Engineering
- Google Gemini Integration
- Cloud Deployment on Render
- Responsive UI Development

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

---

# 🙏 Acknowledgements

- Google Gemini
- FastAPI
- React
- Tailwind CSS
- PostgreSQL
- Neon
- Render

---

# 👨‍💻 Author

**Neel Mandanka**

Bachelor of Technology (Information Technology)

Sarvajanik University

---

# 📄 License

This project is developed for academic and educational purposes.
