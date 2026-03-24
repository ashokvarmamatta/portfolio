# Ashok Varma - Portfolio Generation Plan

## Status: COMPLETE

## Data Sources
- **GitHub Profile**: ashokvarmamatta (63 repos, 22 public, 41 private)
- **Resume PDF**: Ashok_Varma_Resume.pdf (2 pages)
- **GitHub Token**: Used for READ-ONLY access to fetch repo data

## Person Profile Summary
- **Name**: Matta Ashok Varma
- **Title**: Senior Android Developer
- **Location**: Hyderabad, India 500043
- **Email**: mashokvarma1997@gmail.com
- **Phone**: +91-9603573918
- **LinkedIn**: https://www.linkedin.com/in/ashokvarmamatta
- **GitHub**: https://github.com/ashokvarmamatta
- **Education**: B.Tech ECE, Institute of Aeronautical Engineering (GPA: 64.5%)
- **Experience**: Android Developer @ Ramson Softech Pvt Ltd (Feb 2022 - Current)

## Skills Extracted (Resume + GitHub)
### Languages
Kotlin, Java, Python, C, SQL, TypeScript, JavaScript, HTML, CSS

### Frameworks & Libraries
Jetpack Compose, Kotlin Multiplatform (KMP), Koin, Room DB, ExoPlayer/Media3,
Coil 3, MVVM, MVI, Coroutines, Flow, Firebase, Cloudflare R2

### Tools & Platforms
Android Studio, Git, GitHub, Cloudflare, ComfyUI, Gemini API, REST APIs,
Google Maps API, HERE Maps API, YouTube Data API, Twilio

### Soft Skills
Clean Architecture, Memory Optimization, Project Management, UI/UX Design,
Analytical Thinking, Problem Solving, Communication

## Top Projects to Showcase (8 curated from resume + GitHub)

### 1. MEDHA - On-Device AI Chat
- **Repo**: MEDHA (public, 2 stars)
- **Tech**: Kotlin, On-device AI, Gemini API
- **Description**: Android-native AI chat app with offline inference + online Gemini cloud API. No subscriptions, no data collection.
- **Highlight**: Privacy-focused, dual-mode AI (offline + cloud)

### 2. ZeroClawAndroid - AI Agent Daemon
- **Repo**: ZeroClawAndroid (private, 1.1M lines Kotlin)
- **Tech**: Kotlin, Telegram API, Twilio/WhatsApp, LLMs, Cloudflare Tunnel
- **Description**: Android-native AI background daemon running 24/7 as foreground service, connecting messaging platforms to multiple LLMs with waterfall failover.
- **Highlight**: Complex multi-LLM orchestration with auto-failover

### 3. ProPlayer - Feature-Rich Video Player
- **Repo**: videoplayer2 (public, 1 star)
- **Tech**: Kotlin, Jetpack Compose, ExoPlayer/Media3, Koin, Room DB, Coil 3
- **Description**: Modern video player with gesture controls, PiP, subtitles, playlists, multi-language support, MVVM architecture.
- **Highlight**: Full Compose UI, clean MVVM, 100% Kotlin

### 4. WeatherShow-KMP - Cross-Platform Weather App
- **Repo**: WeatherShow-KMP (public, live demo)
- **Tech**: Kotlin Multiplatform, Compose Multiplatform
- **Description**: Cross-platform weather app sharing business logic across Android/iOS/Web with native UI performance.
- **Demo**: https://weather-show-kmp.vercel.app
- **Highlight**: KMP architecture, deployed to web via Vercel

### 5. Wallpaper Citra (Visual Cosmos)
- **Repo**: Chitra (private)
- **Tech**: Kotlin, Cloudflare R2, Room DB
- **Description**: High-performance wallpaper app with Cloudflare R2 for scalable image storage. Offline-first architecture with local Room DB.
- **Highlight**: Cloudflare R2 integration, offline-first design

### 6. QR & Barcode Scanner
- **Repo**: QRBarcodeScannerCreator (private)
- **Tech**: Kotlin, Java, CameraX, ML Kit
- **Description**: Scanner with lifecycle-aware coroutines, thumbnail caching, resource leak elimination.
- **Highlight**: Performance optimized, lifecycle-aware concurrency

### 7. GPS Village Maps & Navigation
- **Repo**: GPSAreaMeasurement (private)
- **Tech**: Kotlin, Google Maps API, HERE Maps API
- **Description**: Navigation app with real-time speedometer using GPS, handling signal fluctuations.
- **Highlight**: Dual maps API integration, real-time GPS processing

### 8. Portfolio Creator (This Project)
- **Repo**: portfolioCreater (private)
- **Tech**: TypeScript, React 19, Vite 8, Three.js, GSAP
- **Description**: AI-powered portfolio generator creating premium animated websites from GitHub/resume/text input.
- **Highlight**: Full-stack web dev capability, AI integration

## Portfolio Generation Steps

### Step 1: Create PLAN.md (this file) [DONE]
- Document all data, structure, and steps
- Serves as recovery point if session crashes

### Step 2: Create profile.json [TODO]
- Structured data file matching the Profile TypeScript interface
- Contains all curated data from GitHub + resume

### Step 3: Generate index.html [TODO]
- Self-contained HTML portfolio with:
  - Three.js particle hero background
  - GSAP scroll animations
  - Custom cursor with dot + ring
  - Typewriter effect for title + skills
  - About section with bio + stats
  - Skills section with devicon badges
  - Projects section with 3D tilt cards (8 projects)
  - Experience timeline (1 role, 4 achievement bullets)
  - Education section
  - Contact section with email + LinkedIn + GitHub
  - Responsive design (mobile-first)
  - Dark theme with green accent (#00d4aa matching resume style)
  - Lenis smooth scrolling
  - Edge browser compatibility fix

### Step 4: Create README.md [TODO]
- Deployment instructions for HR
- How to view: just open index.html in browser

## Output Directory
`D:\Ashok\olama\projects\portfolioCreater\ashokvarma portfolio\`

## Files to Generate
1. `PLAN.md` - This plan file
2. `profile.json` - Structured profile data
3. `index.html` - Full self-contained portfolio website
4. `README.md` - Quick deployment guide

## Theme Configuration
- **Style**: dark-minimal (professional, clean)
- **Primary Color**: #00d4aa (green - matches resume accent)
- **Accent Color**: #6366f1 (indigo for contrast)
- **Font**: Inter (clean, professional)

## HR-Ready Requirements
- Professional tone throughout
- Clear contact information prominently displayed
- Downloadable resume link section
- LinkedIn profile link
- GitHub profile link with repo stats
- Project demos with live links where available
- Clean, scannable layout for quick review
- Mobile responsive (HR may view on phone)
- Fast loading (all CDN, no heavy assets)
