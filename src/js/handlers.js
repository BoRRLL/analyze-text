import { FORM, TEXT_AREA, CLEAR_BUTTON } from './constants'
import { analyzeText } from './analyze'
import { clearTable } from './utils.js'

// обработчик события на форме
export const handleSubmitForm = () => {
  if (FORM) {
    FORM.addEventListener('submit', (event) => {
      event.preventDefault()
      const userData = TEXT_AREA.value?.split(' ') // получаем значение textarea
      analyzeText(userData)
      TEXT_AREA.value = '' // очищаем textarea
    })
  }
}

// обработчик события на кнопке очистки таблици
export const handleClearTable = () => {
  if (CLEAR_BUTTON) {
    CLEAR_BUTTON.addEventListener('click', (event) => {
      event.preventDefault()
      clearTable()
    })
  }
}
