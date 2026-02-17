# 🎥 AI Video Meeting Platform

A full-stack AI-powered video call application that enables real-time meetings with intelligent agents, automatic transcripts, meeting summaries, searchable history, and AI-driven post-call Q&A.

This project demonstrates real-time communication, background AI processing, subscriptions, authentication, and a complete production-ready workflow.

---

## 🚀 Features

### 🤖 AI Capabilities
- AI-powered real-time meeting agents
- Automatic meeting summaries
- Full transcript generation
- AI chat that understands meeting context
- Transcript search
- Post-meeting Q&A assistant

### 📞 Video & Communication
- Real-time video calls
- Meeting recording & playback
- Chat during meetings
- Meeting history & statuses

### 🔐 Authentication & Payments
- Secure login system
- Subscription-based access
- Protected routes
- Role-aware session management

### 📱 User Experience
- Fully mobile responsive UI
- Clean dashboard layout
- Meeting playback interface
- Transcript viewer with search
- AI chat interface

### ⚙️ Infrastructure
- Background AI jobs processing
- Event-driven workflows
- Real-time streaming
- Git workflow with AI-assisted reviews

---

## 🧠 Tech Stack

### Frontend
- Next.js 15
- React 19
- Tailwind CSS v4
- Shadcn/ui

### Backend & Infrastructure
- Stream Video SDK
- Stream Chat SDK
- Inngest background jobs
- Better Auth
- Polar subscriptions

### AI
- OpenAI integration
- AI summarization
- AI transcript understanding
- Meeting Q&A system

---

## 🏗 Architecture Overview

```
User → Video Call → Stream SDK
                 → Recording
                 → Transcript Job
                 → AI Summary Job
                 → Meeting Storage
                 → AI Q&A Interface
```

Background jobs process recordings, generate transcripts, and produce summaries asynchronously to avoid blocking the UI.

---

## 📦 Installation

### 1. Clone repository

```bash
git clone https://github.com/your-username/ai-video-meeting-platform.git
cd ai-video-meeting-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET=
OPENAI_API_KEY=
BETTER_AUTH_SECRET=
POLAR_API_KEY=
DATABASE_URL=
```

### 4. Run development server

```bash
npm run dev
```

App will run at:

```
http://localhost:3000
```

---

## 🔄 Background Jobs

This project uses event-driven background processing:

- Meeting transcript generation
- AI summary creation
- Recording processing
- AI context indexing

Run background worker:

```bash
npm run inngest:dev
```

---

## 🧪 Development Workflow

- Feature branches
- Pull request reviews
- AI-assisted code review
- CI-friendly structure
- Modular architecture

---

## 📂 Project Structure

```
/app
/components
/lib
/services
/jobs
/hooks
/utils
/styles
```

- `/services` → AI + API logic
- `/jobs` → background workers
- `/components` → UI modules
- `/lib` → shared utilities

---

## 🔐 Authentication Flow

1. User logs in
2. Session is created
3. Subscription is verified
4. Access to meetings is granted

Protected routes enforce authentication and subscription checks.

---

## 💳 Subscription Model

Users subscribe to unlock:

- Unlimited meetings
- AI transcripts
- AI summaries
- AI Q&A access
- Meeting storage

---

## 📈 Future Improvements

- Multi-participant AI agents
- Team workspaces
- Shared meeting libraries
- Live AI co-pilot during calls
- Voice-controlled meeting assistant

---

## 🧑‍💻 Author

Built as a full-stack AI project demonstrating:

- Real-time systems
- AI integration
- background processing
- scalable architecture
- production workflows

---

## 📜 License

MIT License

---

## ⭐ If you like this project

Star the repo and build your own AI-powered meeting tools 🚀
