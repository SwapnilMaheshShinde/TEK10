# TEK10 — Official Website
### Technology Engineering & Digital Product Development

> **"You bring the problem. We build the technology."**
> 
> From high-performance websites and mobile applications to complete industrial software and intelligent AI systems, TEK10 turns complex operational challenges into working technology.

---

## 1. Project Structure

The codebase is built on vanilla web standards (**HTML5**, **CSS3**, **Vanilla JavaScript**) without bulky frameworks (no React, Next.js, Tailwind, or Bootstrap). It is organized as a proper multi-page architecture:

```
TEK10/
│
├── index.html            # Homepage (Hero, Methodology pipeline, Philosophy, Selected Work, Final CTA)
├── work.html             # Dedicated Work & Case Studies (Energy Monitoring, Smart VMS, Mould Counting)
├── capabilities.html     # Capabilities (Web, Software, Mobile, AI/ML, GenAI, Backend/Cloud)
├── about.html            # About TEK10 & Founders (Swapnil Shinde & Digvijay Kesare)
├── contact.html          # Contact (Real Web3Forms email integration + WhatsApp pre-fill)
│
├── css/
│   ├── style.css         # Core design system, typography tokens, layout grids, and mockups
│   └── responsive.css    # Responsive breakpoints (tablet, mobile), touch states, reduced motion
│
├── js/
│   ├── main.js           # Header blur on scroll, active page highlight, mobile drawer menu
│   ├── animations.js     # GSAP entrance reveals & interactive "From Idea to System" pipeline
│   └── contact.js        # Web3Forms AJAX submission handler & dynamic WhatsApp URL generator
│
├── assets/
│   ├── icons/
│   │   └── favicon.svg   # Geometric SVG brand icon
│   ├── images/
│   │   ├── swapnil.PNG   # Swapnil Shinde founder portrait
│   │   └── digvijay.PNG  # Digvijay Kesare co-founder portrait
│   └── models/           # Reserved for future 3D assets
│
└── README.md             # Documentation & Setup Guide
```

---

## 2. Core Features & Code Highlights

- **Multi-Page Architecture:** True independent HTML pages with consistent global navigation, active link indicators, and accessible mobile drawer menus.
- **Design Philosophy ("Less, but better"):** Built around an editorial, enterprise-grade dark palette (`#07080a`), generous whitespace, crisp typography (`Space Grotesk`, `Inter`, `JetBrains Mono`), and a single electric cyan accent (`#00f0ff`).
- **High-Fidelity HTML/CSS/SVG Product Mockups:**
  - *Industrial Energy Monitoring:* Live kW/kWh stats, specific consumption (`kWh/Ton`), continuous SVG load contour, and departmental breakdowns.
  - *Smart Visitor Management:* Desktop gate registry with real-time status badges (`In-Plant`, `Approved`) and mobile digital pass with dynamic QR & OTP.
  - *Intelligent Mould Counting:* Computer vision viewport with simulated detection bounding boxes, confidence tags, and tally counter.
- **Purposeful Interactive Pipeline ("From Idea to System"):** Interactive 5-stage engineering pipeline (`Idea → Architecture → Data → Software → Product`) demonstrating technical methodology.
- **Global WhatsApp Floating Action:** Unobtrusive floating action button on every page with direct pre-filled messaging.

---

## 3. How to Run Locally

You do not need to install any compilers or npm build steps.

### Option A: Python Built-in Server (Recommended)
Open your terminal in the `TEK10/` folder and run:
```bash
# Python 3
python -m http.server 8080
```
Then visit: [http://localhost:8080](http://localhost:8080)

### Option B: Node.js `npx serve`
```bash
npx serve .
```

### Option C: VS Code Live Server
Right-click `index.html` inside VS Code and select **"Open with Live Server"**.

### Option D: Direct Browser
You can double-click `index.html` directly in File Explorer to open it in Chrome, Edge, Safari, or Firefox. (Using a local web server is recommended for testing CDN libraries and fetch requests).

---

## 4. How to Connect the Enquiry Form to Your Email

The contact form on `contact.html` uses **[Web3Forms](https://web3forms.com)** for serverless form delivery directly to your inbox (`swapnilshinde33777@gmail.com`).

### 5-Step Setup:
1. Visit **[https://web3forms.com](https://web3forms.com)** (Free, no credit card required).
2. Enter your email: `swapnilshinde33777@gmail.com` and click **"Create Access Key"**.
3. Check your email inbox for your free Access Key string (e.g. `a1b2c3d4-e5f6-7890-abcd-ef1234567890`).
4. Open `js/contact.js` in your editor.
5. Replace `"PASTE_ACCESS_KEY_HERE"` with your actual key:
   ```javascript
   const WEB3FORMS_ACCESS_KEY = "your-actual-access-key-here";
   ```
6. Save the file and test submitting the form. You will instantly receive the enquiry with the sender's Name, Company, Email, Phone, Project Type, and Message.

> **Spam Protection:** A hidden honeypot field (`input[name="botcheck"]`) is built-in. Real users never see it, but spam bots that blindly fill all fields are silently blocked.

---

## 5. How to Configure WhatsApp

### Contact Details
- **Official Phone Number:** `+91 95791 19759`
- **International Digits:** `919579119759`

### Configured WhatsApp Integrations:
1. **Floating WhatsApp Button (All Pages):**
   Links directly to:
   ```
   https://wa.me/919579119759?text=Hello%20TEK10%2C%20I%20would%20like%20to%20discuss%20a%20technology%20project.
   ```
2. **Form → WhatsApp Option ("Continue on WhatsApp →"):**
   When a visitor types their details on `contact.html` and clicks **"Continue on WhatsApp →"**, `js/contact.js` dynamically compiles their exact Name, Company, Project Type, Phone, Email, and Message into a pre-filled WhatsApp message.
3. **To update the phone number in the future:**
   Change the variable at the top of `js/contact.js`:
   ```javascript
   const WHATSAPP_PHONE_NUMBER = "919579119759";
   ```
   and perform a search-and-replace for `919579119759` across the HTML files.

---

## 6. Where to Add Real Project Screenshots

The project currently uses crisp, hand-crafted HTML/CSS/SVG mockups so the site looks complete and professional without relying on generic stock photos.

When you have real screenshots from deployed client systems:
1. Save your screenshot inside `assets/images/` (e.g., `assets/images/energy-screenshot.png`).
2. Open `index.html` or `work.html`.
3. Locate the `.mockup-window` container in the relevant section.
4. Replace the internal mockup body with your screenshot `<img>`:
   ```html
   <div class="mockup-window">
     <div class="mockup-bar">
       <span class="mockup-title">PLANT_01 // ENERGY_TELEMETRY.SYS</span>
       <span class="mockup-status">STREAMING LIVE</span>
     </div>
     <img src="assets/images/energy-screenshot.png" alt="Industrial Energy Monitoring Dashboard" style="width: 100%; height: auto; display: block;" loading="lazy">
   </div>
   ```

---

## 7. Where to Add Founder Photographs

The site is already configured to display the founder images:
- **Swapnil Shinde:** `assets/images/swapnil.PNG`
- **Digvijay Kesare:** `assets/images/digvijay.PNG`

### How It Works:
In `about.html`, the images are displayed in full natural color with a generous 520px portrait frame and subtle hover scale effect.
If an image is ever removed or cannot be found, the card automatically falls back to an elegant monogram badge (`SS` or `DK`) inside a blueprint circle so the layout never breaks.

To replace an image:
Simply replace the file in `assets/images/` keeping the same name, or update the `src` attribute in `about.html`.

---

## 8. Where to Add Swapnil's Exact Qualifications

In `about.html` (under Swapnil Shinde's founder profile), search for:
```html
<div class="founder-tag-group-title">Education</div>
<div class="qualification-badge">
  [INSERT ACTUAL QUALIFICATIONS HERE]
</div>
```
Replace `[INSERT ACTUAL QUALIFICATIONS HERE]` with your degree, institution, or certifications (e.g., `B.E. Computer Engineering, Pune University`).

---

## 9. How to Deploy the Website

Because this is a clean, static site without server-side compile steps, deployment takes under 2 minutes:

### Option A: Vercel
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repo. Leave all build settings default (Output Directory: `./`).
4. Click **Deploy**.

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Drag and drop the `TEK10/` folder directly onto the Netlify dashboard.
3. Your site is live immediately with free SSL.

### Option C: GitHub Pages
1. Push to GitHub.
2. Go to repository **Settings** → **Pages**.
3. Under **Branch**, select `main` and `/ (root)`.
4. Click **Save**.

### Option D: Cloudflare Pages
1. Go to Cloudflare Dashboard → Workers & Pages → Create Application → Pages.
2. Connect your Git repository. Build command: leave empty. Output directory: `/`.
3. Click **Save and Deploy**.

---

## 10. SEO Checklist & Meta Tags

All 5 pages have been built with semantic HTML and tailored meta tags:
- **Semantic Structure:** Single `<h1>` per page, hierarchical `<h2>` / `<h3>`, `<header>`, `<main>`, `<nav>`, and `<footer>` landmarks.
- **Unique Meta Tags:**
  - `index.html`: `TEK10 — Technology. Built Without Limits.`
  - `work.html`: `Our Work — TEK10 | Real Problems. Real Software.`
  - `capabilities.html`: `Capabilities — TEK10 | Technology Engineering & Product Development`
  - `about.html`: `About TEK10 — We Build. We Learn. We Solve.`
  - `contact.html`: `Contact TEK10 — Let's Build Something.`
- **Open Graph Ready:** Includes `og:type`, `og:title`, `og:description`, and `og:site_name`.
- **Accessibility:** High contrast compliance, descriptive button and link labels, `aria-expanded` and `aria-hidden` attributes for modal menus, and keyboard focus states.
