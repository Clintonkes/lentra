# Lentra LLC

Marketing site and quote/contact backend for Lentra LLC (lawn care & landscaping, San Antonio, TX).

- **Frontend**: React + Vite + Tailwind, in `src/`. Deployed to GitHub Pages by `.github/workflows/frontend.yml` on every push to `main`.
- **Backend**: FastAPI + SQLAlchemy, in `backend/`. Deployed to Render from `render.yaml` / `Dockerfile`.

The quote form (`/quote`) posts to `POST /api/bookings` and the contact form (`/contact`) to
`POST /api/contacts` (see `src/lib/api.ts`). Each submission is saved to the database, the customer
gets a confirmation email, and `ADMIN_EMAIL` gets a notification (reply goes straight to the customer).

Business details (name, phone, email, address, hours, service areas), services, gallery,
testimonials and FAQs all live in `src/config/site.ts`. Page photos live in `src/config/images.ts`;
each page's top photo is preloaded from `index.html` (see `vite.config.ts`) and every other photo is
fetched as soon as the first page loads (`src/components/Layout.tsx`), so pages open with images ready.

The logo artwork is `src/components/Logo.tsx`, with the same mark in `public/lentra-icon.svg` (favicon)
and `public/apple-touch-icon.png`. Colors (evergreen, clay, sand) are defined in `tailwind.config.js`.

## Local development

```bash
# backend (uses a local SQLite file unless DATABASE_URL is set)
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
ADMIN_PASSWORD=devpass123 uvicorn main:app --reload   # http://localhost:8000, docs at /docs

# frontend
cp .env.example .env               # VITE_API_URL=http://localhost:8000
npm install
npm run dev                        # http://localhost:5173
```

Checks: `npm run typecheck`, `npm run lint`, `npm run build`.

## Deploying

### 1. Backend (Render)

1. Render → New → Blueprint → pick this repo. It creates the backend service from `render.yaml`.
2. Fill in the environment variables it asks for:
   - `DATABASE_URL`: a Postgres database (e.g. Neon)
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD`: admin API login, and where new quote/contact notifications are sent
   - `RESEND_API_KEY`, `EMAIL_FROM`: optional; without them emails are only logged, not sent.
     Resend's `onboarding@resend.dev` sender can only deliver to your own Resend account address;
     verify a domain in Resend to email customers.
   - `CORS_ORIGINS`: leave empty until you have a custom domain (see below)
3. Check `https://<service>.onrender.com/api/health` returns `{"status":"ok"}`.

The free Render plan sleeps when idle, so the first form submission after a quiet spell can take 30 to 60 seconds.

### 2. Frontend (GitHub Pages)

1. Repo → Settings → Pages → Source: **GitHub Actions**.
2. Repo → Settings → Secrets and variables → Actions → **Variables**: set `VITE_API_URL` to the
   Render URL (e.g. `https://<service>.onrender.com`). Without it the site still deploys, but the forms ask visitors to call or email instead.
3. Push to `main`, or Actions → "Deploy Frontend to GitHub Pages" → Run workflow.

The site is built for the root of `https://lentrallc.org` (`--base=/` in the workflow); GitHub
redirects the `github.io` URL to the custom domain.
Direct links and refreshes on inner pages (e.g. `/quote`) work via `public/404.html`.

The backend already allows `https://clintonkes.github.io`. If the repo lives under another GitHub
account, add that `https://<user>.github.io` to `CORS_ORIGINS` on Render.

### 3. Custom domain: lentrallc.org

1. At your domain registrar, add these DNS records:
   - `A` records for `lentrallc.org` (host `@`) to `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153` and `185.199.111.153`
   - `CNAME` for `www` to `clintonkes.github.io`
2. Repo > Settings > Pages > **Custom domain**: enter `lentrallc.org`, save, then tick
   **Enforce HTTPS** once the certificate is issued (can take up to an hour after DNS resolves).
3. Redeploy the backend on Render. `https://lentrallc.org` and `https://www.lentrallc.org` are
   already allowed in `backend/main.py`, so `CORS_ORIGINS` can stay empty.

The canonical URL, social share image (`public/og-image.png`), `robots.txt` and `sitemap.xml` already
point at `https://lentrallc.org`. To email customers from your own address, verify `lentrallc.org` in
Resend and set `EMAIL_FROM` on Render, e.g. `Lentra LLC <quotes@lentrallc.org>`.

### Admin

There is no admin UI yet; the admin API is usable from `https://<service>.onrender.com/docs`:
`POST /api/admin/login` for a token, then list/update/delete bookings and contacts, or
`GET /api/admin/dashboard` for counts. Updating a booking's status emails the customer.
Credentials come from `ADMIN_EMAIL`/`ADMIN_PASSWORD`, or `python backend/set_admin.py <email> <password>`.
