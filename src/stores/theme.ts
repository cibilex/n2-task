import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LocalItems, Themes } from '@/data/enums'

export const useMetaStore = defineStore('meta', () => {
  const theme = ref(Themes.DARK)

  function changeTheme(target: Themes) {
    const elem = document.documentElement
    if (target != Themes.DARK) {
      elem.classList.remove('dark')
    } else {
      elem.classList.add('dark')
    }

    theme.value = target
    localStorage.setItem(LocalItems.THEME, target)
  }

  return { theme, changeTheme }
})
