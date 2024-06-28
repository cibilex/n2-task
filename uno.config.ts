// uno.config.ts
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
        'font-size': '24px'
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
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
