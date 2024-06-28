import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind({
      dark: 'class'
    }),
    presetAttributify(),
    presetTagify(),
    presetIcons({
      extraProperties: {
        'font-size': '24px',
        color: '#26303E'
      }
    }),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
        poppins: {
          weights: [300, 400, 500, 600, 700],
          name: 'Poppins',
          provider: 'google'
        }
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      subtitle: '#5C6672',
      title: '#26303E',
      border: '#D8D9DD',
      primary: '#4F359B',
      'dark-bg': '#111827',
      'dark-border': '#1f2937',
      'dark-title': '#a1a1aa',
      'dark-subtitle': '#6b7280'
    }
  }
})
