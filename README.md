# EGD2026 — Elmahrosa Global Day site

Marketing site for **https://egd2026.elmahrosa.org**

## Positioning

- **First coordinated multi-city AI security hackathon** (Arab world / MENA+Africa bridge)
- Hosted by **Elmahrosa International** — Registered Member of the **Claude Partner Network by Anthropic**
- Journey: **Build → Learn → Train → Certify**
- **Anthropic Academy** course certificates (individual) + guided path toward Partner Network technical certs
- **TEOS Sentinel** labs + 500 free credits prep
- Honest legal disclaimer (partner membership ≠ Anthropic endorsement)

## Stack

- Static HTML/CSS/JS (Hostinger-friendly)
- Assets in `assets/` (hero, agenda SVG, regional agent poster)

## Local preview

```powershell
cd C:\Users\aams1\Projects\egd2026-site
# any static server, e.g.:
npx --yes serve -l 5173
# open http://localhost:5173
```

## Sponsor program

- Public rate card: `sponsors.html`
- Production bible (run-of-show, phases, checklists): `PRODUCTION-BIBLE.md`
- Agent sell-all (tickets + sponsors + city agents):

```powershell
cd C:\Users\aams1\Projects\teos-vap-engine
npm run egd:catalog
npm run egd:sell
```

## Deploy to Hostinger (egd2026.elmahrosa.org)

1. Open hPanel → File Manager → document root for `egd2026.elmahrosa.org`
2. Upload **all** files from this folder (`index.html`, `assets/`, `robots.txt`, `sitemap.xml`)
3. Confirm HTTPS works; hard-refresh CDN if needed
4. Prefer Git deploy if Hostinger Git is enabled for that domain

**Do not** claim Anthropic sponsorship in ads; keep footer disclaimer intact.

## Agent loop (VAP)

Campaign copy lives in `teos-vap-engine`:

```powershell
cd C:\Users\aams1\Projects\teos-vap-engine
$env:VAP_CAMPAIGN='egd2026'
$env:EGD_SITE='https://egd2026.elmahrosa.org'
node autonomous-loop.js once
```

Drafts vault to `leads-vault.json` in dry mode.

## Contact

- ayman@elmahrosa.org
- https://elmahrosa.org
