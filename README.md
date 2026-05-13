# manupriya.me

Personal and professional website for Dr. Manupriya — Fetal Medicine Specialist, Health Tech Innovator.

## Stack
- React 18 + Vite
- CSS Modules (no Tailwind dependency)
- Deployed on Vercel

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Add the Hero Photo

1. Take the file: `ChatGPT_Image_May_13__2026__08_42_22_PM.png`
2. Rename it to: `hero-photo.jpg`
3. Place it in: `src/assets/hero-photo.jpg`

The Hero component imports it from that path.

---

## Deploy to Vercel (under 10 minutes)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/manupriya-me.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to https://vercel.com → Sign in with GitHub
2. Click "Add New Project"
3. Import the `manupriya-me` repository
4. Leave all settings as default → Click "Deploy"
5. Your site is live at `manupriya.vercel.app` ✅

### Step 3 — Connect manupriya.me domain
1. In Vercel dashboard → your project → Settings → Domains
2. Add `manupriya.me`
3. Vercel gives you DNS records (A record + CNAME)
4. Go to your domain registrar → DNS settings → paste those records
5. Wait 5–15 min → **manupriya.me is live** 🎉

---

## Customisation Checklist

- [ ] Replace `src/assets/hero-photo.jpg` with the actual photo
- [ ] Update stats in `About.jsx` (years, patient count)
- [ ] Add real social links in `Footer.jsx`
- [ ] Wire up contact form (Formspree / EmailJS / Supabase)
- [ ] Add Play Store link in `Apps.jsx` once Defervescence launches
- [ ] Update Apollo Sage Instagram handle in `Contact.jsx`

---

## Contact Form (optional backend)

The form is UI-ready. To make it actually send emails, sign up at
https://formspree.io (free tier: 50 submissions/month) and add your
form endpoint to `Contact.jsx` — replace the `handleSubmit` function.

```js
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSubmitted(true)
}
```
