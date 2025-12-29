import { FORM, TEXT_AREA, ANSWERS, USER_TEXT, CLEAR_BUTTON } from './constants'
import { firstCharacter, wordsCount, numberOfCharacters, findLongestWord } from './analyze'
import { clearTable } from './utils'

// обработчик события на форме
if (FORM) {
  FORM.addEventListener('submit', (event) => {
    event.preventDefault()
    const userData = TEXT_AREA.value // получаем значение textarea
    analyzeText(userData)
    TEXT_AREA.value = '' // очищаем textarea
  })
}

// обработчик события на кнопке очистки таблици
if (CLEAR_BUTTON) {
  CLEAR_BUTTON.addEventListener('click', (event) => {
    event.preventDefault()
    clearTable()
  })
}

/**
 * Функция для анализа текста
 * @param {string} userData - данные пользователя
 * @returns {number} количество символов в тексте без учета пробелов
 */

const analyzeText = (userData) => {
  USER_TEXT.textContent = userData
  ANSWERS.FIRST_CHARACTER.textContent = firstCharacter(userData)
  ANSWERS.WORDS_COUNT.textContent = wordsCount(userData)
  ANSWERS.NUMBER_OF_CHARACTERS.textContent = numberOfCharacters(userData)
  ANSWERS.MAX_LENGTH_WORD.textContent = findLongestWord(userData)
}
