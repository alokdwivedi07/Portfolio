type EnvKey =
  | 'VITE_LINKEDIN_URL'
  | 'VITE_GITHUB_URL'
  | 'VITE_RESUME_URL'
  | 'VITE_PORTFOLIO_EMAIL'
  | 'VITE_PHONE_NUMBER'
  | 'VITE_LOCATION'

type AppConfig = {
  links: {
    linkedin: string
    github: string
    resume: string
  }
  contact: {
    email: string
    phone: string
    location: string
  }
}

const getRequiredEnv = (key: EnvKey): string => {
  const value = import.meta.env[key]

  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${key}`)
  }

  return value.trim()
}

export const config: AppConfig = {
  links: {
    linkedin: getRequiredEnv('VITE_LINKEDIN_URL'),
    github: getRequiredEnv('VITE_GITHUB_URL'),
    resume: getRequiredEnv('VITE_RESUME_URL'),
  },
  contact: {
    email: getRequiredEnv('VITE_PORTFOLIO_EMAIL'),
    phone: getRequiredEnv('VITE_PHONE_NUMBER'),
    location: getRequiredEnv('VITE_LOCATION'),
  },
}
