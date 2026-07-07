@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

/* ── Legal Compliance Palette — authoritative, sober, precise ── */
:root {
  --background: 220 20% 97%;
  --foreground: 220 25% 12%;

  --card: 0 0% 100%;
  --card-foreground: 220 25% 12%;

  --popover: 0 0% 100%;
  --popover-foreground: 220 25% 12%;

  --primary: 183 98% 22%;
  --primary-foreground: 0 0% 100%;

  --secondary: 220 15% 92%;
  --secondary-foreground: 220 25% 20%;

  --muted: 220 15% 94%;
  --muted-foreground: 220 10% 50%;

  --accent: 183 60% 92%;
  --accent-foreground: 183 98% 18%;

  --destructive: 0 70% 42%;
  --destructive-foreground: 0 0% 100%;

  --border: 220 12% 88%;
  --input: 220 12% 88%;
  --ring: 183 98% 22%;

  --radius: 0.5rem;

  /* Custom semantic tokens */
  --color-designated: 183 98% 22%;        /* teal — designated */
  --color-not-designated: 103 56% 31%;    /* green — not designated */
  --color-uncertain: 20 73% 34%;          /* amber — depends */
  --color-risk-high: 0 70% 42%;           /* red */
  --color-risk-med: 20 73% 34%;           /* amber */
}

.dark {
  --background: 222 30% 8%;
  --foreground: 220 15% 85%;

  --card: 222 28% 11%;
  --card-foreground: 220 15% 85%;

  --popover: 222 28% 11%;
  --popover-foreground: 220 15% 85%;

  --primary: 188 35% 47%;
  --primary-foreground: 222 30% 8%;

  --secondary: 222 22% 16%;
  --secondary-foreground: 220 15% 75%;

  --muted: 222 22% 14%;
  --muted-foreground: 220 10% 50%;

  --accent: 188 25% 18%;
  --accent-foreground: 188 35% 70%;

  --destructive: 0 62% 55%;
  --destructive-foreground: 0 0% 100%;

  --border: 222 18% 20%;
  --input: 222 18% 20%;
  --ring: 188 35% 47%;

  --color-designated: 188 35% 47%;
  --color-not-designated: 97 43% 47%;
  --color-uncertain: 20 53% 48%;
  --color-risk-high: 0 62% 55%;
  --color-risk-med: 20 53% 48%;
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    --background: 222 30% 8%;
    --foreground: 220 15% 85%;
    --card: 222 28% 11%;
    --card-foreground: 220 15% 85%;
    --popover: 222 28% 11%;
    --popover-foreground: 220 15% 85%;
    --primary: 188 35% 47%;
    --primary-foreground: 222 30% 8%;
    --secondary: 222 22% 16%;
    --secondary-foreground: 220 15% 75%;
    --muted: 222 22% 14%;
    --muted-foreground: 220 10% 50%;
    --accent: 188 25% 18%;
    --accent-foreground: 188 35% 70%;
    --destructive: 0 62% 55%;
    --destructive-foreground: 0 0% 100%;
    --border: 222 18% 20%;
    --input: 222 18% 20%;
    --ring: 188 35% 47%;
    --color-designated: 188 35% 47%;
    --color-not-designated: 97 43% 47%;
    --color-uncertain: 20 53% 48%;
    --color-risk-high: 0 62% 55%;
    --color-risk-med: 20 53% 48%;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  min-height: 100dvh;
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
