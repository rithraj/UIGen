from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from .orchestrator import generate_ui

class UIRequest(BaseModel):
    prompt: str
    image_data: str | None = None   # Base64-encoded image (optional)
    layout_json: dict | None = None

app = FastAPI(title="UI Gen API")

@app.post("/generate-ui")
async def generate_ui_endpoint(req: UIRequest):
    try:
        files: dict[str, str] = await generate_ui(req)
        return {"files": files}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
