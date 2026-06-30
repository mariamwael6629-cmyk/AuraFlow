from pydantic import BaseModel


class AnalyticsSummary(BaseModel):
    time_saved_hours: int
    tasks_automated: int
    cost_saved: float
    error_rate: float
    executions_today: int
    success_rate: float
    avg_response_seconds: float
    active_workflows: int
    paused_workflows: int
    draft_workflows: int
    weekly_executions: list[dict]
