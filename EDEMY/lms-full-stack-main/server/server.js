import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import courseRouter from './routes/courseRoute.js';

// Initialize Express
const app = express();

// Connect to database & cloudinary
await connectDB();
await connectCloudinary();

// Allowed origins for CORS
const allowedOrigins = [
  'http://localhost:5173',              // Local development
  'https://edemyfrontend.vercel.app',   // Your deployed frontend
];

// CORS configuration — must be before routes/auth
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// Handle preflight OPTIONS requests globally
app.options('*', cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// JSON body parsing (must be before most routes)
app.use(express.json());

// Clerk middleware (auth)
app.use(clerkMiddleware());

// Health check route
app.get('/', (req, res) => res.send("✅ API Working"));

// Webhooks
app.post('/clerk', express.json(), clerkWebhooks);
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

// API routes
app.use('/api/educator', educatorRouter);
app.use('/api/course', courseRouter);
app.use('/api/user', userRouter);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
