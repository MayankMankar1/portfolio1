// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//    base: command === "build" ? "/portfolio1/" : "/",
//   // base:"/portfolio1/",
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react(),tailwindcss()],
    // base: command === "build" ? "/portfolio1/" : "/",
    base:"/portfolio1/"
  }
})

