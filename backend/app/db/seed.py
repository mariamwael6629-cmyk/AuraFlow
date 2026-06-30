from sqlalchemy.orm import Session

from app.models.integration import Integration
from app.models.template import Template

TEMPLATES = [
    {
        "name": "Lead Nurture Pipeline",
        "description": "Qualify leads, enrich with Clearbit, add to CRM, and trigger personalised email sequences automatically.",
        "tag": "popular",
        "nodes": ["Typeform", "HubSpot", "Gmail"],
    },
    {
        "name": "AI Customer Support Triage",
        "description": "Classify inbound tickets with GPT-4o, route to the right team, and auto-reply to common queries.",
        "tag": "ai",
        "nodes": ["Zendesk", "GPT-4o", "Slack"],
    },
    {
        "name": "E-commerce Order Workflow",
        "description": "From Shopify purchase to fulfilment: inventory check, shipping label, confirmation, review request.",
        "tag": "new",
        "nodes": ["Shopify", "ShipBob", "Klaviyo"],
    },
    {
        "name": "Social Media Scheduler",
        "description": "Generate AI captions, resize for each platform, schedule posts, and track engagement metrics.",
        "tag": "popular",
        "nodes": ["Buffer", "GPT-4o", "Twitter"],
    },
    {
        "name": "Invoice to Accounting Sync",
        "description": "Parse PDF invoices with AI, extract line items, reconcile in QuickBooks, alert on discrepancies.",
        "tag": "ai",
        "nodes": ["Gmail", "GPT-4o", "QuickBooks"],
    },
    {
        "name": "GitHub to Jira Auto-linker",
        "description": "Detect PR mentions, create Jira tickets, assign to sprint, and notify the team on merge.",
        "tag": "new",
        "nodes": ["GitHub", "Jira", "Slack"],
    },
]

INTEGRATIONS = [
    ("Slack", "#4a154b", "communication"),
    ("Jira", "#0052cc", "productivity"),
    ("Gmail", "#ea4335", "communication"),
    ("HubSpot", "#ff7a59", "crm"),
    ("Salesforce", "#00a1e0", "crm"),
    ("Stripe", "#6772e5", "payments"),
    ("Shopify", "#96bf48", "ecommerce"),
    ("GitHub", "#24292e", "developer"),
    ("Notion", "#000000", "productivity"),
    ("Figma", "#f24e1e", "design"),
    ("Facebook Ads", "#1877f2", "marketing"),
    ("LinkedIn", "#0072b1", "marketing"),
    ("AWS", "#ff9900", "infrastructure"),
    ("Google Sheets", "#34a853", "productivity"),
    ("Airtable", "#fcb400", "productivity"),
    ("Klaviyo", "#e01e5a", "marketing"),
    ("GitLab", "#f05032", "developer"),
    ("Intercom", "#00b2a9", "communication"),
]


def seed_static_data(db: Session) -> None:
    if db.query(Template).count() == 0:
        db.bulk_save_objects([Template(**t) for t in TEMPLATES])
    if db.query(Integration).count() == 0:
        db.bulk_save_objects(
            [Integration(name=n, color=c, category=cat) for n, c, cat in INTEGRATIONS]
        )
    db.commit()
