/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_GITHUB_URL: string
  readonly VITE_RESUME_URL: string
  readonly VITE_PORTFOLIO_EMAIL: string
  readonly VITE_PHONE_NUMBER: string
  readonly VITE_LOCATION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
