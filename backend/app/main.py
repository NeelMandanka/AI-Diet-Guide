from fastapi import FastAPI

from app.api.v1.auth import router as auth_router
from app.api.v1.profile import router as profile_router
from app.api.v1.metrics import router as metrics_router
from app.api.v1.dashboard import router as dashboard_router
from app.api.v1.diet import router as diet_router
from app.api.v1.diet_history import router as diet_history_router
from app.api.v1.weekly_diet import router as weekly_diet_router
from app.core.error_handlers import register_exception_handlers
from app.middleware.logging import LoggingMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.trustedhost import TrustedHostMiddleware

from app.middleware.security import SecurityHeadersMiddleware

app = FastAPI(
    title="AI Diet Recipes API",
    version="1.0.0",
)
register_exception_handlers(app)
app.add_middleware(
    LoggingMiddleware,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://ai-diet-guide.onrender.com",
        "https://ai-diet-guide-frontend.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    GZipMiddleware,
    minimum_size=1000,
)

app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=[
        "localhost",
        "127.0.0.1",
        "*.localhost",
        "*.onrender.com",
    ],
)

app.add_middleware(
    SecurityHeadersMiddleware,
)

app.include_router(
    auth_router,
    prefix="/api/v1",
)
app.include_router(
    profile_router,
    prefix="/api/v1",
)
app.include_router(
    metrics_router,
    prefix="/api/v1",
)
app.include_router(
    dashboard_router,
    prefix="/api/v1",
)
app.include_router(
    diet_router,
    prefix="/api/v1",
)
app.include_router(
    diet_history_router,
    prefix="/api/v1",
)
app.include_router(
    weekly_diet_router,
    prefix="/api/v1",
)

@app.get(
    "/health",
    tags=["Health"],
)
def health():

    return {
        "status": "healthy",
        "service": "AI Diet Guide API",
        "version": "1.0.0",
    }

@app.get("/")
def root():
    return {
        "message": "AI Diet Recipes API Running"
    }