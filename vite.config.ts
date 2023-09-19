import { defineConfig } from "vite";
import * as path from "path";
import FullReload from "vite-plugin-full-reload";
import RubyPlugin from "vite-plugin-ruby";
import StimulusHMR from 'vite-plugin-stimulus-hmr';


export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 250 }),
    StimulusHMR()
  ],
  // New lines
  root: "./app/assets",
  build: {
    manifest: true,
    rollupOptions: {
      input: "/app/javascript/entrypoints/application.js"
    }
  }
  // This was from origional install, edited from sasikala-r.medium.com tutorial
  // resolve: {
  //   alias: [
  //     {
  //       find: "@/lib",
  //       replacement: path.resolve(__dirname, "./app/frontend/components/lib/")
  //     },
  //     {
  //       find: "@/components",
  //       replacement: path.resolve(__dirname, "./app/frontend/components/")
  //     },
  //     {
  //       find: "@/entrypoints",
  //       replacement: path.resolve(__dirname, "./app/frontend/entrypoints")
  //     }
  //   ]
  // },
})
