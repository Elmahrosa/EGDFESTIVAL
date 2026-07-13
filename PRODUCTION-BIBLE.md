# EGD2026 Production Bible  
## Event planner desk · “Do it like 1998”

**Event:** Elmahrosa Global Day 2026 (`#EGD2026`)  
**Date:** 15 September 2026 · 09:00–21:00 local per city  
**Cities:** Alexandria · Riyadh · Amman (expansion hubs via Regional Agents)  
**Site:** https://egd2026.elmahrosa.org  
**Sales:** ayman@elmahrosa.org  

---

### Hard rules (non-negotiable)

1. **No verbal sponsorships.** Insertion order (IO) + deliverable list + deposit.
2. **Rate card is law** until founder signs a variance.
3. **T-14 asset lock.** Late logos = text-only credit.
4. **T-7 production week.** No new custom promises.
5. **Anthropic / Claude Partner language** always includes membership disclaimer.
6. **Agents vault; humans countersign** money and contracts.

---

### Run of show (city-local clocks)

| Local | Cue | Owner |
|------:|-----|--------|
| 08:00 | Load-in / network test / bridge check | City agent + SPIKE |
| 09:00 | Doors · registration · badges | Door lead |
| 09:30 | Multi-city opening bridge | Showcaller |
| 10:00 | Keynote | Speaker + AV |
| 10:30 | Brief + teams | Track leads |
| 11:00 | Hacking begins | All |
| 13:00 | Lunch + lightning | Stage |
| 15:00 | Claude Learning Path Sprint | Training lead |
| 17:00 | Mentors / midpoint | Mentors |
| 18:00 | Code freeze | Judges |
| 18:15 | Local demos | Jury |
| 19:30 | Multi-city finale | Showcaller |
| 20:30 | Close + network | All |
| 21:00 | Hard out | Security |

Full marketing agenda: site `#agenda` + `assets/agenda.svg`.

---

### Departments

| Desk | Jobs |
|------|------|
| **NEXUS** | Priority, money, exceptions |
| **SPIKE** | Stack, livestream bridge, TEOS labs |
| **BOB** | Security, consent, backups, NDAs |
| **JUNE** | Copy, press, stage scripts |
| **RAJA** | Tickets, community, city promo |
| **SARA / NEFERTITI** | Sponsors + agents sales (vault → human IO) |
| **SETI** | ICP lists, developer scrape |
| **City Regional Agent** | Venue, local staff, doors |

---

### Sponsor ladder (list USD)

| SKU | Tier | Price | Qty |
|-----|------|------:|----:|
| SPN-TITLE | Presenting | 25,000 | 1 |
| SPN-GOLD | Gold City | 12,000 | 3 |
| SPN-SILVER | Silver Track | 6,000 | 4 |
| SPN-BRONZE | Bronze | 2,500 | 12 |
| SPN-PRIZE | Prize | 5,000 | 6 |
| SPN-INKIND | In-kind | swap | n/a |

Public card: `/sponsors.html`

---

### Ticket SKUs

| SKU | Name | Price |
|-----|------|------:|
| TKT-STU | Student | 0 |
| TKT-STD | Standard | 25 |
| TKT-PRO | Pro Builder | 75 |

---

### Autonomous agent sales roadmap

| Phase | Window | Agent jobs | Human gate |
|-------|--------|------------|------------|
| **P0** Bible locked | T-90→T-75 | Freeze catalog; site; vault samples | Founder approve rate card |
| **P1** Title & Gold | T-75→T-45 | SETI ICP + NEFERTITI sponsor drafts | Call list weekly |
| **P2** Silver + agents | T-60→T-30 | Track sponsors + regional agents + ticket wave 1 | Sign IOs |
| **P3** Fill room | T-30→T-7 | Ticket wave 2, student, prize close | Capacity report |
| **P4** Production week | T-7→T-0 | Ops reminders only | No discount autonomy |
| **P5** Show + harvest | T-0→T+14 | Thanks, sponsor report, EGD2027 soft | Publish report |

**CLI**

```powershell
cd C:\Users\aams1\Projects\teos-vap-engine
npm run egd:catalog
npm run egd:sell          # multi-SKU dry vault
npm run loop              # full cycle incl. sell-all when VAP_CAMPAIGN=egd2026
```

Outputs: `leads-vault.json`, `data/egd-sales-crm.json` (gitignored).

---

### City production checklist (print this)

- [ ] Venue COI / insurance  
- [ ] Power + Wi-Fi stress test  
- [ ] Livestream uplink backup  
- [ ] Badge printers + spares  
- [ ] Medical / security contact  
- [ ] Prize cash / transfer method  
- [ ] Mentor roster signed  
- [ ] Sponsor logo pack installed  
- [ ] TEOS lab accounts ready  
- [ ] Academy sprint seating plan  

---

### Change log

| Date | Note |
|------|------|
| 2026-07-11 | Bible v1 + sponsor program + autonomous sell-all desk |
