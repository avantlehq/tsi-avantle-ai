# TSI Platform Development Plan

**As-of Date:** 2024-11-24  
**Target:** Module 1 (Conversion Service) Implementation  
**Dev Owner:** RM  

*For architecture details, see TSI_PLATFORM_ARCHITECTURE.md  
For business context, see TSI_MANAGEMENT_SUMMARY.md*

## Current Status

Foundation complete. Both platforms deployed on production domains with Avantle Design System. All API endpoints have mock implementations ready for real logic.

**Ready for Module 1 implementation.**

---

## Scope Module 1

**Goal**: Working conversion service (Upload JSON → Download EDIFACT/GTFS)

### Input/Output Specifications

**Input Schema (v1)**:
```json
{
  "agency": {
    "id": "string",
    "name": "string", 
    "url": "string",
    "timezone": "Europe/Bratislava"
  },
  "routes": [
    {
      "id": "string",
      "shortName": "string",
      "longName": "string", 
      "type": "1" // Bus, Rail, etc.
    }
  ],
  "stops": [
    {
      "id": "string",
      "name": "string",
      "lat": "number",
      "lon": "number"
    }
  ],
  "trips": [
    {
      "id": "string",
      "routeId": "string",
      "serviceId": "string",
      "headsign": "string"
    }
  ],
  "stopTimes": [
    {
      "tripId": "string",
      "stopId": "string", 
      "arrivalTime": "HH:MM:SS",
      "departureTime": "HH:MM:SS",
      "stopSequence": "number"
    }
  ]
}
```

**Output SKDUPD/TSDUPD**: 
- Format: Plain text EDI segments
- Encoding: UTF-8
- Example: `UNH+1+TSDUPD:D:04A:UN:TSI1.0'`

**Output GTFS**:
- Format: ZIP with routes.txt, trips.txt, stop_times.txt, stops.txt, calendar.txt
- Required GTFS files only (v1 scope)

### v1 Security Model

**Simple API Key approach** (not full JWT):
- Single hardcoded tenant
- No user accounts or UI auth
- Bearer token header validation: `Authorization: Bearer tsi_dev_key_2024`

### v1 Storage Model

**Files**: Local filesystem/Vercel compatible
```
/tmp/conversions/
  /{jobId}/
    /input.json
    /output.{edi|zip}
```

**Minimal DB Model**:
```sql
CREATE TABLE jobs (
  id TEXT PRIMARY KEY,
  type TEXT, -- 'convert'
  status TEXT, -- 'pending','processing','completed','failed'
  input_format TEXT, -- 'json'
  output_format TEXT, -- 'skdupd','tsdupd','gtfs'
  created_at TIMESTAMP,
  completed_at TIMESTAMP,
  error_message TEXT
);
```

## Conversion Request Flow

**Step 1**: User uploads JSON via tsi.directory UI  
**Step 2**: Frontend → `POST /api/v1/convert` (tsi.avantle.ai)
```json
{
  "inputData": { ... }, // JSON schema above
  "outputFormat": "skdupd" | "tsdupd" | "gtfs"
}
```
**Step 3**: Backend validates → converts → stores temporary file  
**Step 4**: Backend returns `{ "jobId": "uuid", "status": "processing" }`  
**Step 5**: Frontend polls `GET /api/v1/status?jobId=uuid`  
**Step 6**: On completion: `GET /api/v1/download?jobId=uuid`

## Implementation Milestones

### M1: EDIFACT Conversion Engine (Backend)
**Owner**: Dev RM  
**Done when**: 
- [ ] Replace mock `/api/v1/convert` with real SKDUPD/TSDUPD generation
- [ ] Input JSON validation against schema above
- [ ] File storage in `/tmp/conversions/{jobId}/`
- [ ] Status tracking in SQLite jobs table

**Tasks**:
- [ ] Implement EDIFACT writer functions (SKDUPD, TSDUPD formats)
- [ ] Add input validation middleware
- [ ] Create file upload/storage handlers
- [ ] Update `/api/v1/status` to query jobs table

### M2: GTFS Export + Tests  
**Owner**: Dev RM  
**Done when**:
- [ ] `/api/v1/convert` supports `outputFormat: "gtfs"`
- [ ] Generates valid GTFS ZIP (routes.txt, trips.txt, stops.txt, stop_times.txt, calendar.txt)
- [ ] Unit tests for both EDIFACT and GTFS converters
- [ ] Test datasets verified against GTFS validator

### M3: Frontend Integration  
**Owner**: Dev RM  
**Done when**:
- [ ] File upload component in Module 1 UI
- [ ] Real-time status polling from backend
- [ ] Download links for converted files
- [ ] Error handling and user feedback
- [ ] End-to-end: Upload JSON → Download EDIFACT/GTFS

### M4: Demo Dataset + E2E Tests
**Owner**: Dev RM  
**Done when**:
- [ ] 3 test datasets (small, medium, edge cases)
- [ ] Automated E2E test suite
- [ ] Performance test: 1000+ stops/trips in <30s
- [ ] Demo ready for client presentation

## Testing Strategy (Module 1)

### Unit Tests
- **Converters**: JSON → internal model → EDIFACT/GTFS
- **Validation**: Input schema validation
- **Storage**: File upload/download handlers

### Integration Tests  
- **API endpoints**: `/api/v1/convert` end-to-end with test datasets
- **Status tracking**: Job lifecycle (pending → processing → completed)

### Performance Tests
- **Large dataset**: 1000+ trips/stops, target <30s conversion
- **Concurrent**: 5+ parallel conversions

### Regression Tests
- **Golden files**: 3 test scenarios with expected EDIFACT/GTFS outputs
- **Edge cases**: Invalid JSON, missing fields, data type errors

---

## Quick Dev Commands

```bash
# Backend Development (tsi-avantle-ai/)
npm run dev              # http://localhost:3000
npm run build           # Verify build passes
npm run test            # Run test suite (when implemented)

# Frontend Development (tsi-directory/)  
pnpm dev                # http://localhost:3000
pnpm build             # Verify build passes

# Quick API Tests (Local Dev)
curl -X GET "http://localhost:3000/api/v1/status?jobId=test123"
curl -X POST "http://localhost:3000/api/v1/convert" \
  -H "Authorization: Bearer tsi_dev_key_2024" \
  -H "Content-Type: application/json" \
  -d '{"inputData": {"agency": {...}}, "outputFormat": "gtfs"}'

# Production Deployment
git add . && git commit -m "message" && git push origin main
```

---

## Known Risks / Open Questions

1. **Real EDIFACT complexity**: TSI specs may have more edge cases than expected
2. **File storage on Vercel**: May need external storage for production scale  
3. **GTFS validation**: Need to verify outputs against Google's validator
4. **Performance**: Large datasets might need streaming/chunked processing

---

**Ready for M1 implementation. Start with EDIFACT converter backend.**