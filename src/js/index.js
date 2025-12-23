import { FORM, TEXT_AREA, ANSWERS, USER_TEXT } from './constants'
import { firstCharacter, wordsCount, numberOfCharacters } from './analyze'

// обработчик события на форме
if (FORM) {
  FORM.addEventListener('submit', (event) => {
    event.preventDefault()
    const userData = TEXT_AREA.value // получаем значение textarea
    analyzeText(userData)
    TEXT_AREA.value = '' // очищаем textarea
  })
}

/**
 * Функция для анализа текста
 * @param {string} userData - данные пользователя
 * @returns {number} количество символов в тексте без учета пробелов
 */

const analyzeText = (userData) => {
  USER_TEXT.textContent = userData
  const firstChar = firstCharacter(userData)
  const wordsCountResult = wordsCount(userData)
  const charCount = numberOfCharacters(userData)
  ANSWERS.FIRST_CHARACTER.textContent = firstChar
  ANSWERS.WORDS_COUNT.textContent = wordsCountResult
  ANSWERS.NUMBER_OF_CHARACTERS.textContent = charCount
}
