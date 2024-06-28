// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_URL: Themes
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
