// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxtjs/tailwindcss'],

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      pocketbaseUrl: process.env.POCKETBASE_URL,
      demo: process.env.DEMO,
    },
  },

  // Configure Tailwind CSS
  tailwindcss: {
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: [
              'Inter',
              'ui-sans-serif',
              'system-ui',
              '-apple-system',
              'BlinkMacSystemFont',
              'Segoe UI',
              'Roboto',
              'Helvetica Neue',
              'Arial',
              'sans-serif',
            ],
            mono: [
              'JetBrains Mono',
              'ui-monospace',
              'SFMono-Regular',
              'Menlo',
              'Monaco',
              'Consolas',
              'Liberation Mono',
              'Courier New',
              'monospace',
            ],
          },
          colors: {
            primary: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
              950: '#172554',
            },
            gray: {
              50: '#f9fafb',
              100: '#f3f4f6',
              200: '#e5e7eb',
              300: '#d1d5db',
              400: '#9ca3af',
              500: '#6b7280',
              600: '#4b5563',
              700: '#374151',
              800: '#1f2937',
              900: '#111827',
              950: '#030712',
            },
          },
          spacing: {
            '18': '4.5rem',
            '88': '22rem',
            '112': '28rem',
            '128': '32rem',
          },
          animation: {
            'fade-in': 'fadeIn 0.8s ease-out',
            'slide-up': 'slideUp 0.6s ease-out',
            'slide-in-left': 'slideInLeft 0.6s ease-out',
            'slide-in-right': 'slideInRight 0.6s ease-out',
            float: 'float 3s ease-in-out infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'bounce-slow': 'bounce-slow 2s infinite',
            shimmer: 'shimmer 2s linear infinite',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(30px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            slideUp: {
              '0%': { opacity: '0', transform: 'translateY(40px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            slideInLeft: {
              '0%': { opacity: '0', transform: 'translateX(-40px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' },
            },
            slideInRight: {
              '0%': { opacity: '0', transform: 'translateX(40px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
            },
            shimmer: {
              '0%': { backgroundPosition: '-200% 0' },
              '100%': { backgroundPosition: '200% 0' },
            },
            'bounce-slow': {
              '0%, 100%': {
                transform: 'translateY(0)',
                animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
              },
              '50%': {
                transform: 'translateY(-5px)',
                animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
              },
            },
          },
          boxShadow: {
            soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
            medium:
              '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            large:
              '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            glow: '0 0 0 1px rgba(59, 130, 246, 0.05), 0 0 0 3px rgba(59, 130, 246, 0.1), 0 0 20px rgba(59, 130, 246, 0.15)',
          },
          borderRadius: {
            '4xl': '2rem',
            '5xl': '2.5rem',
            '6xl': '3rem',
          },
          backdropBlur: {
            xs: '2px',
          },
          typography: {
            DEFAULT: {
              css: {
                maxWidth: 'none',
                color: 'inherit',
                lineHeight: '1.75',
              },
            },
          },
        },
      },
    },
  },

  // Configure fonts
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600, 700, 800],
      },
      {
        name: 'JetBrains Mono',
        provider: 'google',
        weights: [300, 400, 500, 600],
      },
    ],
  },

  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  // CSS configuration
  css: ['~/assets/css/main.css'],
});
