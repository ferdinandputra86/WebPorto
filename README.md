# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Credits

- Background (kota malam di footer): [Night City Pixel Art by CraftPix.net](https://craftpix.net) — lisensi OGA-BY 3.0. Kredit ini juga tampil di footer situs.
- Aset kota mode siang (`public/assets/day/city*-day.png`) adalah hasil pewarnaan ulang dari aset CraftPix yang sama (OGA-BY 3.0), jadi kredit di atas berlaku untuk keduanya. Sprite pesawat, balon, burung, dan matahari digambar sendiri.
- Font: Minecraft (`public/assets/fonts/Minecraft.ttf`).

## Tema siang / malam

- Atribut `data-theme="dark|light"` di `<html>`; nilai awal dari `localStorage` (`theme`), lalu `prefers-color-scheme`. Script penentu tema ada inline di `index.html` supaya tidak berkedip.
- Token warna ada di `src/index.css` (`:root` dan `[data-theme="light"]`); gunakan varian Tailwind `light:` untuk override mode siang.
- Tombol ada di `src/component/ThemeToggle.jsx`, logika + View Transitions di `src/lib/theme.jsx`.
