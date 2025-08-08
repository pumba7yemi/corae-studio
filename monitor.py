
from fastapi import APIRouter
import psutil

router = APIRouter()

@router.get("/status")
def system_status():
    return {
        "cpu_percent": psutil.cpu_percent(interval=1),
        "memory_percent": psutil.virtual_memory().percent
    }
