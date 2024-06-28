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
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        poppins: {
          weights: [300, 400, 500, 600, 700],
          name: 'poppins'
        }
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
