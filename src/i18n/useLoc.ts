import { useTranslation } from 'react-i18next'

export type Lang = 'pt' | 'en'
export type Loc<T = string> = Record<Lang, T>

/** Hook central de idioma: expõe `t` (strings de UI), `lang` atual,
 *  `L()` para resolver conteúdo bilíngue e `setLang()` com persistência. */
export function useLoc() {
  const { t, i18n } = useTranslation()
  const lang: Lang = i18n.language.startsWith('en') ? 'en' : 'pt'

  const L = <T,>(value: Loc<T>): T => value[lang]

  const setLang = (next: Lang) => {
    void i18n.changeLanguage(next)
    try {
      localStorage.setItem('lang', next)
    } catch {
      /* ignore */
    }
  }

  return { t, lang, L, setLang }
}
