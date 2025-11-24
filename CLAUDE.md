# CLAUDE.md

Tento súbor poskytuje kontext pre Claude Code pri práci s TSI Backend Service repozitárom.

## Kontext projektu TSI Platform

**TSI Backend Service** je interné API pre európsku platformu TSI Directory, poskytujúce konverzie transportných dát v súlade s technickými špecifikáciami interoperability (TSI).

### Architektúra platformy

**Dvojkomponentová architektúra:**

1. **TSI Directory** (public platform)
   - Doména: `tsi.directory` 
   - Repo: `avantlehq/tsi-directory` (public)
   - Funkcie: 5-module service workspace, user interface, lead generation

2. **TSI Backend Service** (internal API) - **TENTO REPOZITÁR**
   - Doména: `tsi.avantle.ai`
   - Repo: `avantlehq/tsi-avantle-ai` (private)
   - Funkcie: conversion API, validation endpoints, data processing

### API rozhranie (poskytované týmto repozitárom)

```
POST /api/v1/convert → EDIFACT/GTFS konverzia
POST /api/v1/validate → dátová validácia
GET /api/v1/status → system monitoring
POST /api/provision → tenant provisioning
```

**Guardrails:**
- Authorization: Bearer <JWT> s tenant_id
- Rate limiting per tenant
- File upload/download handling
- Real-time processing status

## Aktuálny stav projektu (Nov 24, 2024)

### ✅ HOTOVÉ KOMPONENTY

**TSI Backend Service (Internal API) - https://tsi.avantle.ai:**
- ✅ GitHub repo: https://github.com/avantlehq/tsi-avantle-ai (private)
- ✅ Next.js 16 API Routes + TypeScript
- ✅ API endpoints structure (mock implementations):
  - POST /api/v1/convert - EDIFACT/GTFS conversion
  - POST /api/v1/validate - Data validation  
  - GET /api/v1/status - Service monitoring
  - POST /api/provision - Tenant provisioning
- ✅ **Avantle Design System** - konzistentný styling s dpia.avantle.ai
  - Ultra-soft RGB(25,39,52) theme, Inter font family
  - Category color system (blue/orange/green)
  - Professional card layouts s backdrop-blur-sm effects
- ✅ Service status homepage s API documentation
- ✅ Production deployment na Vercel (projekt: tsi-avantle-ai)
- ✅ Custom domain tsi.avantle.ai LIVE s SSL certificates
- ✅ Automatic CI/CD z GitHub main branch

**Deployment Status:**
- ✅ Dvojkomponentová architektúra: Public + Internal API separation
- ✅ Custom domény nakonfigurované: tsi.directory + tsi.avantle.ai
- ✅ GitHub repositories správne organizované (public/private)
- ✅ All commits pushed, clean working trees
- ✅ SSL certificates a globálna distribúcia
- ✅ **Avantle Design System** applied for consistent branding

### 🔧 Technical Stack

**Backend Service:**
- Framework: Next.js 16 s App Router
- Styling: Tailwind CSS + Avantle Design System
- Language: TypeScript
- Package manager: npm
- Deployment: Vercel
- Design: Ultra-soft dark theme s category color system

**API Services:**
- Conversion endpoints: mock implementations (ready for real logic)
- File handling: Multipart uploads (planned)
- Database: SQLite (dev) / PostgreSQL (planned)
- Auth: JWT middleware (planned)
- Containerization: Docker (planned)

**Data Formats:**
- Input: JSON transport data
- Output: EDIFACT (SKDUPD/TSDUPD), GTFS
- Validation: Real-time input checking (planned)
- Processing: Streaming a progress updates (planned)

### 🚀 Production URLs

**TSI Backend Service (Internal API):**
- **Service status**: https://tsi.avantle.ai
- **API base**: https://tsi.avantle.ai/api/v1/
- **GitHub**: https://github.com/avantlehq/tsi-avantle-ai (private)
- **Endpoints**:
  - POST /api/v1/convert - EDIFACT/GTFS conversion
  - POST /api/v1/validate - Data validation
  - GET /api/v1/status - Service monitoring  
  - POST /api/provision - Tenant provisioning

### 📋 ĎALŠIE KROKY - Module 1 Implementation

**🎯 PRIMARY GOAL: Real Conversion Logic**

**Phase 1: Backend Implementation**
1. **Real Conversion Logic**
   - Implement actual SKDUPD/TSDUPD generation (replace mocks)
   - Add GTFS export functionality
   - Create file upload/download handling
   - Add input validation and error handling

2. **API Enhancement**
   - Replace mock responses with real conversion processing
   - Implement progress tracking for long conversions
   - Add authentication middleware (JWT)
   - Add rate limiting implementation

**Phase 2: Advanced Features**
- Database integration (PostgreSQL)
- Real-time conversion progress
- Batch processing support
- Enhanced validation rules
- Performance optimization

### 🎯 Current Architecture Status - Production Ready

```
TSI Directory (tsi.directory) ←→ TSI Backend (tsi.avantle.ai)
     Public Platform                 Internal API Service
     │                               │
     Avantle Branding               Avantle Branding
     5-Module UI                    Professional API Docs
```

**Domain Status:**
- ✅ `tsi.directory` - LIVE with SSL certificates
- ✅ `tsi.avantle.ai` - LIVE with SSL certificates  
- ✅ Global CDN distribution via Vercel Edge Network
- ✅ Automatic CI/CD from GitHub main branches

**Platform Architecture COMPLETE:**
```
TSI Directory (tsi.directory) ←→ TSI Backend (tsi.avantle.ai)
     Public Platform                 Internal API Service
```

### 📊 Project Structure

```
C:\Users\rasti\Projects\avantlehq\tsi-avantle-ai\
├── src/
│   ├── app/
│   │   ├── page.tsx              # Service homepage s Avantle styling
│   │   ├── globals.css           # Avantle Design System variables
│   │   └── api/                  # Conversion API endpoints
│   │       ├── provision/route.ts
│   │       └── v1/
│   │           ├── convert/route.ts
│   │           ├── validate/route.ts
│   │           └── status/route.ts
│   ├── middleware.ts             # JWT auth a rate limiting (planned)
└── CLAUDE.md                     # Tento súbor
```

## Development Commands

```bash
# Backend Development (z tsi-avantle-ai/)
npm run dev              # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm start               # Start production server  
npm run lint            # Run ESLint

# API Testing
curl -X GET "https://tsi.avantle.ai/api/v1/status?jobId=tsi_test123"
curl -X POST "https://tsi.avantle.ai/api/v1/convert" \
  -H "Content-Type: application/json" \
  -d '{"inputData": {...}, "outputFormat": "SKDUPD"}'

# Deployment (automatic on git push)
git add . && git commit -m "message" && git push origin main
```

## Dôležité Poznámky

1. **Avantle Design System**: Používa konzistentný styling s dpia.avantle.ai
2. **API Endpoints**: Mock implementations pripravené na real logic
3. **JWT Auth**: Plánované pre všetky endpoints
4. **File Processing**: Pripravené na multipart upload a download
5. **Production Ready**: Backend service je live na tsi.avantle.ai

## Next Session Goals

**Ready for Module 1 Implementation:**
1. **Morning**: Implement real conversion logic v backend API
2. **Afternoon**: Connect frontend UI k backend endpoints  
3. **Evening**: Test end-to-end conversion workflow

**TSI Platform je pripravená na professional development s enterprise-grade stylingom!** 🎨✨