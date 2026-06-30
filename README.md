# 🌌 AuraFlow

An AI-powered workflow automation platform built with a high-performance **FastAPI** backend and a modern, responsive **React/Vite** frontend[cite: 2].

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite[cite: 2]
* **Backend:** Python, FastAPI, Uvicorn[cite: 2]
* **Database/Storage:** Python-based DB (SQLAlchemy / SQLite / PostgreSQL)[cite: 2]

---

## 🚀 Quick Start

Follow these steps to set up and run the application locally[cite: 2].

### 1. Backend Setup (Port 8000)
Navigate to the backend directory, set up a virtual environment, install dependencies, and start the development server[cite: 2]:

```bash
cd backend
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python -m app.db.seed
uvicorn app.main:app --reload --port 8000

```

### 2. Frontend Setup (Port 5173)

Navigate to the frontend directory, install dependencies, and start the Vite development server:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev

```

---

## 🌐 Access Points

Once both servers are running, you can access the platform via:

* 💻 **Frontend App:** [http://localhost:5173](http://localhost:5173)

* 📄 **Interactive API Documentation (Swagger UI):** [http://localhost:8000/docs](http://localhost:8000/docs)


> 💡 *For more advanced configuration, please refer to the individual `frontend/README.md` and `backend/README.md` files.*
> 

---

## 📁 Repository Structure & Ignore Rules

To maintain a clean repository, ensure your `.gitignore` includes the following paths to skip build artifacts, virtual environments, and environment variables:

### 🐍 Python / Backend

* `__pycache__/`

* `*.pyc`

* `backend/venv/`

* `backend/.env`

* `backend/*.db`


### 📦 Node / Frontend

* `frontend/node_modules/`

* `frontend/dist/`

* `frontend/.env`


### 💻 System & IDEs

* `.DS_Store`

* `.vscode/`

* `.idea/`


```