## 🔐 Environment Variables Setup

Set up the required environment variables by creating `.env` files in both the `/backend` and `/frontend` directories.

---

### 📄 `.env` (for `/backend`)


# === Backend Configuration ===

# Server Port
PORT=8080

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database Connection
DB_URL=your-database-url

# JWT Configuration
JWT_SECRET=your-jwt-secret
JWT_TIMEOUT=1h  # e.g., 1h, 30m, 7d


cd backend
npm install
npm start



# === Frontend Configuration ===

# Google OAuth Client ID (used in frontend login)
VITE_CLIENT_ID=your-google-client-id


cd frontend
npm install
npm run dev
