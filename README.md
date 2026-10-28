# Petraslynn LLC

Marketing site and quote/contact backend for Petraslynn LLC (lawn care & landscaping, Aurora, CO).

- **Frontend** — React + Vite + Tailwind, in `src/`. Deployed to GitHub Pages by `.github/workflows/frontend.yml` on every push to `main`.
- **Backend** — FastAPI + SQLAlchemy, in `backend/`. Deployed to Render from `render.yaml` / `Dockerfile`.

The quote wizard (`/quote`) posts to `POST /api/bookings` and the contact form (`/contact`) to
`POST /api/contacts` (see `src/lib/api.ts`). Each submission is saved to the database, the customer
gets a confirmation email, and `ADMIN_EMAIL` gets a notification (reply goes straight to the customer).

Business details (name, phone, email, address, hours, service areas), services, gallery,
testimonials and FAQs all live in `src/config/site.ts`.

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

1. Render → New → Blueprint → pick this repo. It creates `petraslynn-backend` from `render.yaml`.
2. Fill in the environment variables it asks for:
   - `DATABASE_URL` — a Postgres database (e.g. Neon)
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD` — admin API login, and where new quote/contact notifications are sent
   - `RESEND_API_KEY`, `EMAIL_FROM` — optional; without them emails are only logged, not sent.
     Resend's `onboarding@resend.dev` sender can only deliver to your own Resend account address;
     verify a domain in Resend to email customers.
   - `CORS_ORIGINS` — leave empty until you have a custom domain (see below)
3. Check `https://<service>.onrender.com/api/health` returns `{"status":"ok"}`.

The free Render plan sleeps when idle, so the first form submission after a quiet spell can take ~30–60 s.

### 2. Frontend (GitHub Pages)

1. Repo → Settings → Pages → Source: **GitHub Actions**.
2. Repo → Settings → Secrets and variables → Actions → **Variables**: set `VITE_API_URL` to the
   Render URL (e.g. `https://petraslynn-backend.onrender.com`). The workflow refuses to build without it.
3. Push to `main`, or Actions → "Deploy Frontend to GitHub Pages" → Run workflow.

The site is then live at `https://<github-user>.github.io/<repo>/`. The build reads GitHub's Pages
configuration, so the base path is handled automatically: `/<repo>/` on github.io, `/` on a custom domain.
Direct links and refreshes on inner pages (e.g. `/quote`) work via `public/404.html`.

The backend already allows `https://clintonkes.github.io`. If the repo lives under another GitHub
account, add that `https://<user>.github.io` to `CORS_ORIGINS` on Render.

### 3. Custom domain (when you have one)

1. At your domain registrar, point the domain at GitHub Pages: `A` records for the apex domain to
   GitHub's Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`),
   and `www` as a `CNAME` to `<github-user>.github.io`.
2. Repo → Settings → Pages → **Custom domain**: enter the domain, then tick **Enforce HTTPS** once available.
3. On Render, set `CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com` (the service restarts).
4. Re-run the deploy workflow so the build switches to the `/` base path.

Nothing in the code needs to change.

### Admin

There is no admin UI yet; the admin API is usable from `https://<service>.onrender.com/docs`:
`POST /api/admin/login` for a token, then list/update/delete bookings and contacts, or
`GET /api/admin/dashboard` for counts. Updating a booking's status emails the customer.
Credentials come from `ADMIN_EMAIL`/`ADMIN_PASSWORD`, or `python backend/set_admin.py <email> <password>`.
