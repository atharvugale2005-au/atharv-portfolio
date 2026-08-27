# Atharv Ugale — Personal Portfolio Website

A clean, minimal, and modern personal portfolio website engineered for **Atharv Ugale** (Electronics & Telecommunication Engineering Student | Embedded Systems & AI/ML).

Built with **React**, **Tailwind CSS**, and **Lucide Icons** following strict minimal design principles: generous white space, single accent color (Electric Cobalt `#2563eb`), crisp typography (Inter & Space Grotesk), dark/light mode toggle, and smooth responsive micro-interactions.

---

## 🚀 Quick Start (Zero Setup Needed)

You can run the portfolio right away without installing any software or Node modules:

### Option 1: Direct Browser Launch (Instant)
Simply double-click [`index.html`](file:///C:/Users/andre/.gemini/antigravity/scratch/atharv-portfolio/index.html) or open it in Google Chrome, Microsoft Edge, Brave, or Firefox.

### Option 2: Lightweight Python Server
Open a terminal in this directory and run:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000` in your browser.

---

## 🛠️ Full Development Mode (Vite + React)

When Node.js is installed on your development machine, you can run the full Vite development server:

```bash
# Install dependencies
npm install

# Start Vite live-reload dev server
npm run dev

# Build optimized production bundle
npm run build
```

---

## 📁 Project Architecture

```text
atharv-portfolio/
├── index.html                   # Standalone self-contained SPA (React 18 + Tailwind + Babel)
├── package.json                 # Modular npm project configuration
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Custom Tailwind theme (Electric Cobalt accent & dark mode)
├── postcss.config.js            # PostCSS plugins
├── README.md                    # Project documentation
└── src/
    ├── main.jsx                 # React root render entry
    ├── App.jsx                  # Main application container & theme state
    ├── index.css                # Global styles, fonts, and scrollbars
    ├── data/
    │   └── portfolioData.js     # Structured resume and project content
    └── components/
        ├── Navbar.jsx           # Sticky nav with active section tracker & theme switcher
        ├── Hero.jsx             # Hero section with copy-to-clipboard contact pills
        ├── About.jsx            # Summary narrative and core engineering pillars
        ├── Experience.jsx       # Krishigati & Edunet experience timeline
        ├── Projects.jsx         # Filterable project cards (AI, IoT, Embedded)
        ├── ProjectModal.jsx     # Deep-dive interactive case study & specs modal
        ├── Skills.jsx           # Grouped technical skill cards with level badges
        ├── Education.jsx        # Academic timeline (MIT AOE, Govt Poly Karad, SSC)
        ├── Achievements.jsx     # Awards (ElectroDuel 1st Prize, Media Excellence, etc.)
        ├── Contact.jsx          # Interactive contact form & direct reach-out options
        └── Footer.jsx           # Minimalist footer with quick navigation links
```

---

## 🌟 Sections & Included Features

1. **Hero & Status**:
   - Live availability badge (`Available for Internships & Projects`)
   - Headline and focused title in Electronics & Telecommunication
   - Interactive contact pills for Phone (`+91-9130324426`), Email (`atharvugale2005@gmail.com`), and LinkedIn with one-click copy-to-clipboard toast notifications
   - CTA buttons: *"View Projects"* and *"Get In Touch"*
   - Metric ribbon highlighting 5+ Projects, 2 Internships, 84.76% Diploma Distinction, and 7.95 B.Tech CGPA

2. **About & Background**:
   - Professional summary highlighting STM32, ESP32, Raspberry Pi, and Edge AI
   - 3 Key Engineering Pillars: Embedded System Design, Edge AI & Computer Vision, PCB & Hardware Prototyping

3. **Experience Timeline**:
   - **Krishigati Pvt. Ltd.** (AI-ML & Embedded Intern | June 2026 – Present)
   - **Edunet Foundation** (AI & Cloud Intern | June 2025 – July 2025)

4. **Featured Projects (Interactive Grid + Case Study Modal)**:
   - Category filtering: *All*, *AI & Computer Vision*, *Embedded & IoT*, *Hardware & Control*
   - 1. **Krishigati AI Tomato Leaf Disease Detection & Precision Spray Rover** (B.Tech Final-Year Capstone)
   - 2. **Intrusion Detection System for Controller Area Network (CAN)**
   - 3. **IoT-Based Smart Voice Assistant** (Custom 2-layer PCB)
   - 4. **Automated Attendance System via Face Recognition (OpenCV)**
   - 5. **Automatic Multi-Floor Lift Control System (STM32)**
   - Clickable *"View Architecture & Specs"* modal displaying Problem Context, Engineered Solution, Key Features, Hardware Stack, and Software Stack.

5. **Technical Skills**:
   - Grouped cards: *Hardware & Embedded*, *AI & Machine Learning*, *Programming Languages*, *Cloud & Platforms*, *Design & Fabrication*.
   - Level badges (*Advanced*, *Proficient*, *Intermediate*) and concise technical summaries.

6. **Education**:
   - MIT Academy of Engineering, Pune (B.Tech E&TC, 2024–2027)
   - Government Polytechnic Karad (Diploma in E&TC, 2021–2024, 84.76%)
   - Annasaheb Kalyani Vidyalaya, Satara (SSC 10th, 2021, 86.40%)

7. **Awards & Extracurriculars**:
   - 1st Prize — ElectroDuel Competition (Govt. Poly Karad)
   - Media Excellence Award (Govt. Poly Karad)
   - 1st Prize in Kho-Kho Athletics
   - Active NSS Volunteer
   - Technical Head — ETSA

8. **Contact & Footer**:
   - Interactive Contact Form with automated `mailto:` trigger
   - Quick copy buttons for email and phone
   - Responsive floating *"Back to Top"* button

---

## 🌐 Free 1-Click Deployment Options

### GitHub Pages
1. Push this repository to a GitHub repository named `username.github.io` or `portfolio`.
2. Go to **Settings** > **Pages** > Select `Deploy from a branch` (`main` / root).

### Vercel / Netlify
1. Connect your GitHub repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. It will auto-detect the Vite build settings (`npm run build`, output: `dist`).
