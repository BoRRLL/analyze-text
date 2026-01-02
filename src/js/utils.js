// Домашка от 7.12.2025
import { ANSWERS, USER_TEXT } from './constants'

// Функция очистки таблицы
export const clearTable = () => {
  USER_TEXT.textContent = ''
  ANSWERS.FIRST_CHARACTER.textContent = ''
  ANSWERS.WORDS_COUNT.textContent = ''
  ANSWERS.NUMBER_OF_CHARACTERS.textContent = ''
  ANSWERS.MAX_LENGTH_WORD.textContent = ''
  ANSWERS.REVERSE_WORD.textContent = ''
  ANSWERS.SENTENCES_COUNT.textContent = ''
  ANSWERS.UNIQUE_WORD_COUNT.textContent = ''
  ANSWERS.WORDS_IN_ALPHABETICAL_ORDER.textContent = ''
}
