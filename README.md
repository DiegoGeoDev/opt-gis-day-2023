- yarn create vite => react + ts

- shadcn/ui

yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

tsconfig.json

```
   "baseUrl": ".",
   "paths": {
   "@/*": ["./src/*"]
   }
```

yarn add -D @types/node

vite.config.ts

```
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

npx shadcn-ui@latest init
√ Would you like to use TypeScript (recommended)? ... no / yes
√ Which style would you like to use? » New York
√ Which color would you like to use as base color? » Zinc
√ Where is your global CSS file? ... src/index.css
√ Would you like to use CSS variables for colors? ... no / yes
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... no / yes
√ Write configuration to components.json. Proceed? ... yes

- theme

https://ui.shadcn.com/themes

- yarn add lucide-react

- yarn add zustand

- https://leaflet-extras.github.io/leaflet-providers/preview/

- https://github.com/CartoDB/basemap-styles
  Service public info: https://carto.com/location-data-services/basemaps/ The structure of the URLs to call the service is the following: https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}{scale}.png , where:

{s}: one of the available subdomains, either [a,b,c,d]
{z} : Zoom level. We support from 0 to 20 zoom levels in OSM tiling system.
{x},{y}: Tile coordinates in OSM tiling system
{scale}: OPTIONAL "@2x" for double resolution tiles
{style}: Map style, possible value is one of:
light_all,
dark_all,
light_nolabels,
light_only_labels,
dark_nolabels,
dark_only_labels,
rastertiles/voyager,
rastertiles/voyager_nolabels,
rastertiles/voyager_only_labels,
rastertiles/voyager_labels_under
