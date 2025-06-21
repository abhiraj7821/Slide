# 📊 Slide - AI-Powered Slide Automation

Slide is a full-stack web application designed to automate the creation and management of presentations. Leveraging powerful AI and modern web technologies, it enables users to generate dynamic, data-driven slides effortlessly.

## 🚀 Features

- ⚡ Create beautiful slide decks in seconds using AI
- 🧠 Integrate text, images, charts with contextual understanding
- 📁 Save, edit, and organize slide projects in your dashboard
- 🔄 Real-time collaboration support (coming soon)
- 🌐 Fully responsive and user-friendly UI

## 🛠️ Tech Stack

**Frontend:**
- React.js (with TypeScript)
- Tailwind CSS
- Next.js

**Backend:**
- Node.js + Express
- PostgreSQL (via Prisma ORM)
- REST API & Server Actions

**AI & Tools:**
- OpenAI API for content generation
- Clerk/Auth.js for authentication
- Vercel for deployment

## 🧑‍💻 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/slide.git
cd slide

# 2. Install dependencies
npm install

# 3. Add your environment variables
cp .env.example .env
# Add values for DATABASE_URL, OPENAI_API_KEY, CLERK_API_KEY, etc.

# 4. Setup the database
npx prisma generate
npx prisma migrate dev

# 5. Start the development server
npm run dev
📷 Screenshots
Coming soon – Add images or screen recordings of your app UI here.

📌 TODO
 AI slide generation

 User authentication

 Slide save/edit/delete

 Team collaboration

 Export to PDF/PPT

📄 License
MIT License. Feel free to fork and build on top of it.

🙌 Acknowledgements
OpenAI
Prisma
Clerk
TailwindCSS
Web Prodigies

Built with ❤️ by Abhishek Rajput

```
---
Let me know if you'd like to include a live demo link, screenshots, or GitHub badges!
