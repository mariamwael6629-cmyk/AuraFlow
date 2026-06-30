from sqlalchemy.orm import Session

from app.models.execution import Execution
from app.models.notification import Notification
from app.models.team import TeamMember
from app.models.trigger import Trigger
from app.models.user import User
from app.models.workflow import Workflow


def seed_demo_data_for_user(db: Session, user: User) -> None:
    """Give a freshly registered user a populated workspace instead of an empty dashboard."""
    workflows = [
        Workflow(
            owner_id=user.id,
            name="Customer Onboarding Automation",
            description="Webhook signup -> branch by plan -> AI personalised email -> Slack + CRM update.",
            status="active",
            nodes=["Webhook", "Branch", "AI Personalise", "Email", "Slack", "Update CRM"],
            executions_count=412,
            success_rate=99.8,
        ),
        Workflow(
            owner_id=user.id,
            name="CRM Sync",
            description="Sync new contacts between HubSpot and the internal CRM every 15 minutes.",
            status="active",
            nodes=["Schedule", "HubSpot", "CRM"],
            executions_count=96,
            success_rate=97.4,
        ),
        Workflow(
            owner_id=user.id,
            name="Product Launch Automation",
            description="Draft workflow built in the visual builder, not yet activated.",
            status="draft",
            nodes=["Webhook", "GPT-4o", "Branch", "Wait 1hr", "Slack", "HubSpot"],
            executions_count=0,
            success_rate=100.0,
        ),
        Workflow(
            owner_id=user.id,
            name="Churn Risk Detector",
            description="ML score trigger that flags at-risk accounts. Currently paused.",
            status="paused",
            nodes=["ML Score", "Slack"],
            executions_count=58,
            success_rate=95.1,
        ),
    ]
    db.add_all(workflows)
    db.flush()

    execution_seed = [
        ("success", "Email campaign workflow executed successfully"),
        ("success", "Stripe -> Airtable sync executed successfully"),
        ("warning", "Slack rate limit hit, auto-retry scheduled"),
        ("success", "Lead scoring pipeline executed successfully"),
        ("error", "GitHub -> Jira timeout"),
        ("success", "Customer onboarding flow executed successfully"),
    ]
    for status, message in execution_seed:
        db.add(Execution(workflow_id=workflows[0].id, owner_id=user.id, status=status, message=message))

    notifications = [
        ("✓", "Email campaign completed - 2,341 sent"),
        ("🤖", "AI detected a bottleneck in CRM Sync flow"),
        ("⚠", "Slack rate limit hit - auto-retry scheduled"),
        ("👥", "A teammate shared 'Product Launch Automation'"),
    ]
    for icon, message in notifications:
        db.add(Notification(user_id=user.id, icon=icon, message=message))

    team = [
        (user.name, user.email, "Admin", "Engineering", "admin"),
        ("Marcus Reid", "marcus.reid@example.com", "Editor", "Marketing", "edit"),
        ("Aisha Khan", "aisha.khan@example.com", "Viewer", "Sales", "view"),
    ]
    for name, email, role, department, permission in team:
        db.add(
            TeamMember(
                owner_id=user.id,
                name=name,
                email=email,
                role=role,
                department=department,
                permission_level=permission,
            )
        )

    triggers = [
        ("Webhook: new-lead", "POST /hooks/new-lead - instant", "🔗", "on"),
        ("Daily report email", "Every day at 9:00 AM UTC", "⏰", "on"),
        ("CRM sync", "Every 15 minutes", "🔄", "on"),
        ("Weekly analytics digest", "Every Monday 8:00 AM", "📊", "on"),
        ("Payment failed handler", "Stripe webhook - on event", "💳", "on"),
        ("Churn risk detector", "ML score trigger", "🔔", "off"),
    ]
    for name, description, icon, status in triggers:
        db.add(
            Trigger(owner_id=user.id, name=name, description=description, icon=icon, status=status)
        )

    db.commit()
