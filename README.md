# Interview Prep

A web application to help new grads (and anyone brushing up on coding interviews) quickly revise Data Structures and Algorithms (DSA) through randomized MCQs, instant feedback, and personal progress tracking.

---

## 🚀 Features

- **🎲 Randomized MCQs**  
  Practice with dynamic, randomly generated DSA multiple-choice questions tailored to your selected difficulty level.

- **✅ Instant Feedback**  
  Choose an answer and immediately see whether you're correct, along with a concise explanation — learn by doing.

- **📚 Personalized History**  
  All your answered questions are saved to a personal history page so you can revisit, re-test, or review topics anytime.

---

## 🛠️ Built With

- **Backend:** FastAPI, Grok
- **Frontend:** React + Vite  
- **Auth:** Clerk  
- **AI-Powered Question Generation:** OpenAI API  

---

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/dsa-revision-tool.git
cd dsa-revision-tool
```

### 2. Set up environment variables
Create two .env files in the root of the project and add your OpenAI API key and Clerk credentials.
1) Backend:
   OPENAI_API_KEY=your_openai_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret


2) Frontend:
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

### 3. Run the backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 4. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

---

### 🧠 Motivation

The current job market, particularly for recent graduates, presents a unique set of challenges. Beyond the demanding process of navigating countless job applications, the critical task of keeping Data Structures and Algorithms (DSA) concepts sharp often feels like a Herculean effort. This project was born out of that very struggle – a tool designed to ease the burden and empower others facing similar hurdles.

### Demo





https://github.com/user-attachments/assets/dbfcd246-78ef-4acd-b5f5-e8899943a67f





### 🤝 Contributiion

Pull requests are welcome! Feel free to open an issue first if you have suggestions or feedback.
