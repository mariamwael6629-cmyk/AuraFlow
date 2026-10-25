// One stroke icon set (24px grid, 1.8 stroke) used in place of emoji.
const PATHS = {
  canvas: "M4 5h16v14H4zM4 9h16M9 9v10",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  pulse: "M3 12h4l2-6 4 12 2-6h6",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  users: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M16 3.5a4 4 0 0 1 0 7.5M18 14a6 6 0 0 1 4 7",
  overview: "M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z",
  flow: "M5 6h6M13 6h6M5 18h6M13 18h6M11 6a3 3 0 0 1 2 0M11 18a3 3 0 0 0 2 0M12 6v12",
  templates: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h5",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  gear: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1",
  logout: "M14 4h5v16h-5M10 8l-4 4 4 4M6 12h11",
  bell: "M6 9a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9zM10 20a2 2 0 0 0 4 0",
  alert: "M12 3l10 18H2zM12 10v5M12 18v.5",
  check: "M5 12.5l4.5 4.5L19 7.5",
  card: "M2 5h20v14H2zM2 10h20M6 15h4",
  refresh: "M20 11a8 8 0 0 0-14.7-4.3M4 4v4h4M4 13a8 8 0 0 0 14.7 4.3M20 20v-4h-4",
  bot: "M4 8h16v12H4zM12 4v4M9 13h.01M15 13h.01M9 17h6",
};

// Notifications and triggers store an emoji; draw it with the same set.
const EMOJI_TO_ICON = {
  "⚠": "alert", "✓": "check", "👥": "users", "💳": "card", "📊": "chart", "🔄": "refresh",
  "🔔": "bell", "🔗": "link", "🤖": "bot", "⏰": "clock", "📈": "chart", "⚡": "spark",
};

export function DataIcon({ emoji, size = 18 }) {
  const name = EMOJI_TO_ICON[String(emoji || "").replace(/\uFE0F/g, "")] || "bell";
  return <Icon name={name} size={size} />;
}

export default function Icon({ name, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
