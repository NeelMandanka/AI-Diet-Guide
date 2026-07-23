from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User

from app.schemas.response import APIResponse
from app.services.metrics_service import MetricsService


router = APIRouter(
    prefix="/metrics",
    tags=["Health Metrics"],
)


@router.get(
    "",
    response_model=APIResponse,
)
def get_health_metrics(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        metrics = MetricsService.get_health_metrics(
            db=db,
            user_id=current_user.id,
        )

        return APIResponse(
            message="Health metrics calculated successfully",
            data=metrics,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )