A full-featured Learning Management System (LMS) built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Edemy allows educators to create and sell courses while providing learners with an interactive learning experience, complete with secure authentication, course progress tracking, video lectures, quizzes, and more.

📁 Project Structure

Edemy-LMS-Full-Stack/
│
├── client/    # Frontend - React.js
├── server/    # Backend - Node.js, Express.js
├── README.md  # Project Documentation


Working Link : [Live Preview]([https://edemyfrontend.vercel.app/](https://edemyfrontend.vercel.app/)

🧩 Features

👨‍🏫 Instructor

Create, edit, and delete courses
Upload video lectures with previews
Publish/unpublish courses
Track enrolled students


🧑‍🎓 Student
Browse and enroll in courses
Watch video lectures with progress saving
Receive course completion certificates
Secure access control for paid courses


🛡️ Auth & Payments
Secure JWT-based authentication
Role-based access control (Student/Instructor/Admin)
Integrated Stripe payments for course purchase


🧰 Tech Stack
Frontend	React, Tailwind CSS, Vite
Backend	Node.js, Express.js, MongoDB
Auth	JWT, Bcrypt, Cookies
Media	AWS S3 / Cloudinary (optional)
Payments	Stripe API
Dev Tools	VSCode, Postman, MongoDB Compass


🚀 Getting Started

📦 Prerequisites
Node.js & npm
MongoDB
Stripe account (test keys)


🖥️ Setup Instructions
Clone the repository
git clone [https://github.com/sayamgrover1310/Edemy-LMS-Full-Stack.git](https://github.com/sayamgrover1310/lms-full-stack.git)
cd Edemy-LMS-Full-Stack
Setup Backend
cd server
npm install
🔑 Create a .env file in /server:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/edemy
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key


Start backend server:
npm run start
Setup Frontend
cd ../client
npm install
npm run dev
Frontend runs on http://localhost:5173, backend on http://localhost:5000


🧪 Future Enhancements
Quiz & assignments
Admin dashboard
Certificate generation
Comment and discussion forums
Course recommendation using ML


🧑‍💻 Author
Taranpreet singh

