graph TD
    subgraph Data & Security Layer
        CRM[(Clinic CRM / EMR)]
        AG[API Gateway & PII Redaction]
    end

    subgraph Node A: Intelligence Layer
        RAG[(Vector DB: Medical Protocols)]
        GPro[Gemini 1.5 Pro]
        Agents{Micro-Agents}
        RC[Retention Concierge]
        RS[Reactivation Scout]
        SRS[Slot Recovery Specialist]
    end

    subgraph Node B: Orchestration Layer
        GFlash[Gemini 1.5 Flash]
        CG[Confirmation Gatekeeper]
    end

    subgraph Execution & Handoff Layer
        Push[App Push]
        WA[WhatsApp / SMS]
        EM[Email Mass Automation]
        Handoff[Human Handoff UI / Call Center]
    end

    CRM -->|1. Patient Data, Notes, Schedules| AG
    AG -->|2. Masked Context| GPro
    RAG -->|3. Clinical Guardrails| GPro
    GPro -->|4. Propensity & Instructions| Agents
    Agents --> RC & RS & SRS
    RC & RS & SRS -->|5. Agent Payloads| GFlash
    GFlash -->|6. Channel Routing| CG
    CG --> Push & WA & EM
    CG -->|7. Complex Query / Distress| Handoff
    Push & WA & EM -->|8. Patient Reply / Action| AG
