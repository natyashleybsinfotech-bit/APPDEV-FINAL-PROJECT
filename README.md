
# 🌐 EDGE-AI: Gender Equality Education Platform

EDGE-AI is a high-performance, AI-driven web platform designed to promote gender equality awareness among Filipino students and educators.

## 🚀 Web Deployment Guide

This project is built using modern ES6 modules and the Google Gemini API. To ensure it runs correctly with secure API access, follow these deployment steps:

### 1. Recommended Hosting
For the best experience, use a modern hosting provider that supports HTTPS and Environment Variables:
*   **Vercel** (Recommended)
*   **Netlify**
*   **Firebase Hosting**

### 2. Environment Configuration
The application relies on the Google Gemini API. To prevent hardcoding your key:
1.  Go to your hosting provider's dashboard (e.g., Vercel Project Settings).
2.  Navigate to **Environment Variables**.
3.  Add a new variable:
    *   **Key**: `API_KEY`
    *   **Value**: *[Your Gemini API Key from Google AI Studio]*

### 3. Local Development
If you are running this locally using a simple file server:
- Note that ES6 modules (`importmap`) require an HTTP/HTTPS context (they will not work via `file://` protocols).
- Ensure your local server environment has access to the `API_KEY` variable.

## 🛠 Features
- **AI Assistant**: Real-time dialogue on gender issues powered by Gemini 3 Flash.
- **Data Visualizations**: Responsive charts displaying PSA (Philippine Statistics Authority) data on education and employment gaps.
- **Learning Modules**: Curated articles and legal frameworks (Magna Carta of Women, Safe Spaces Act).
- **Interactive Quiz**: Test knowledge on gender concepts and laws.
- **Mobile Responsive**: Fully optimized for mobile browsers.

## ⚖️ Compliance & Security
- The app uses `process.env.API_KEY` to securely access the Gemini API.
- All references are based on official Philippine laws and statistics.
