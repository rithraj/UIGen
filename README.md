# UI Gen – Multi‑Agent UI Generation Tool

This repository contains a **FastAPI backend** that orchestrates a multi‑agent
Large‑Language‑Model workflow (based on [AutoGen](https://github.com/microsoft/autogen))
and a **TypeScript MCP client** for IDE integration. Together they can transform natural‑
language descriptions, images, or structured JSON into **editable React (TypeScript) UI code**.

## Project Structure
```
backend/   # Python service with AutoGen agents + FastAPI routes
client/    # MCP server (Node + TypeScript) for IDE / Copilot integration
```

## Quick Start

### Backend (Python 3.11+)
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Client (Node 20+)
```bash
cd client
npm install
npm run dev   # starts the MCP server
```

## Next Steps
1. Fill in **backend/app/agents/** with real agent logic & prompts.
2. Implement the AutoGen conversation in `backend/app/orchestrator.py`.
3. Point the client’s `UI_GEN_API_URL` (see `client/src/index.ts`) to the running backend.
4. Test with simple prompts, then iterate!
