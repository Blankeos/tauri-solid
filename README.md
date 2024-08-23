# Tauri + Solid + Vike + Typescript

This template should help get you started developing with Tauri, Solid and Typescript in Vite.

**Technologies Used**:

- Tauri (Rust)
- SolidJS
- Vike (Filesystem Routing) - `vite build` will build static.
- TailwindCSS
- Extra things for DevX:
  - Prettier + prettier-plugin-tailwindcss
  - Bun - Faster package manager 🥳

## Getting Started

- `bun install` - installs all dependencies
- `bun dev` - start the server

## Building for Production

- `bun tauri build`.
  - Installer is saved here: `./src-tauri/target/release/bundle/dmg/tauri-solid_0.0.0_aarch64.dmg`
  - Binary is saved here: `./src-tauri/target/release/bundle/macos/tauri-solid.app/Contents/MacOS/tauri-solid` (You can run this without installing with `bun preview-mac`)
