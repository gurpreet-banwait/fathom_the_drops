# Fathom the Drops

A charity: water branded browser game where players catch falling clean water droplets in a jerry can across 7 levels with unique landscape backgrounds.

## Run & Operate

- `pnpm --filter @workspace/fathom-the-drops run dev` — run the game (served at `/`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, HTML5 Canvas
- No backend required (game state is client-only)

## Where things live

- `artifacts/fathom-the-drops/src/` — game source
  - `contexts/GameContext.tsx` — global game state (screen, levels, progress)
  - `pages/Home.tsx` — opening screen with charity:water logo & instructions
  - `pages/LevelMap.tsx` — 7-level selection map
  - `pages/Game.tsx` — canvas-based gameplay loop
  - `pages/WinScreen.tsx` — final win screen with charity:water message
  - `lib/sounds.ts` — Web Audio API sound effects
  - `lib/backgrounds.ts` — canvas background drawing for each level
- `artifacts/fathom-the-drops/public/` — static assets
  - `jerry_can.png` — yellow jerry can game asset
  - `charity_water_logo.png` — charity: water logo

## Game Rules

- 7 levels, each with a unique landscape background (Mountains, Forest, Desert, Beach, Savanna, Arctic, City)
- Catch 20 clean (blue) droplets to complete a level
- Catching a bad (gray) droplet resets the drop count to 0
- Drop speed increases slightly every level
- Level complete triggers a wave swipe animation with a compliment
- Beating all 7 levels shows the win/thank-you screen

## Architecture decisions

- Pure client-side game — no API calls or database needed
- Canvas used for rendering backgrounds, droplets, and the jerry can fill indicator
- React state handles UI overlays (counter, contamination flash, wave text)
- Web Audio API generates sound effects without audio files

## Product

Fathom the Drops is a charity: water branded educational browser game. Players move a jerry can to catch clean water droplets across 7 world landscapes, with audio feedback and visual effects. Completing all levels shows a message about charity: water's mission.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Canvas dimensions must be set via `canvas.width/height` (offsetWidth/offsetHeight), not CSS
- The `@assets` alias in Vite points to `../../attached_assets` — use `/public/` files for runtime URLs
- Game loop cleanup requires both `cancelAnimationFrame` and `gameActiveRef.current = false`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
