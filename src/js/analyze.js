import { ANSWERS, USER_TEXT } from './constants'

/**
 * Функция для получения первого символа текста
 * @param {string[]} text - исходный текст пользователя
 * @returns {string} первый символ текста (или пустая строка, если текст пуст)
 */
export const firstCharacter = (words) => {
  if (!words || words.length === 0) return ''
  const firstWord = words[0].trim()
  return firstWord.length > 0 ? firstWord[0] : ''
}

/**
 * Функция для получения количества слов в тексте
 * @param {string[]} text - исходный текст пользователя
 * @returns {number} количество слов в тексте
 */
export const wordsCount = (words) => {
  return Array.isArray(words) ? words.length : 0
}

/**
 * Функция для получения количества символов в тексте (без пробелов)
 * @param {string[]} text - исходный текст пользователя
 * @returns {number} количество символов в тексте без учета пробелов
 */
export const numberOfCharacters = (words) => {
  if (!Array.isArray(words)) return 0
  return words.reduce((sum, word) => sum + word.replace(/\s/g, '').length, 0)
}

/**
 * Функция для поиска самого длинного слова в тексте
 * @param {string[]} text - исходный текст пользователя
 * @returns {string} самое длинное слово в тексте (или пустая строка)
 */
export const findLongestWord = (words) => {
  if (!Array.isArray(words) || words.length === 0) return ''

  return words.reduce((longest, word) => {
    const cleanWord = word.trim()
    return cleanWord.length > longest.length ? cleanWord : longest
  }, '')
}

// Домашка от 7.12.2025

/**
 * Переворачивает текст: меняет порядок слов в предложении и буквы внутри каждого слова.
 * @param {string[]} text - исходный текст
 * @returns {string} перевернутый текст
 */
export const reverseText = (words) => {
  if (!Array.isArray(words) || words.length === 0) return ''

  return words
    .map((word) => word.split('').reverse().join(''))
    .reverse()
    .join(' ')
}

/**
 * Считает количество предложений в тексте.
 * Предложения разделяются точками, восклицательными и вопросительными знаками.
 * @param {string[]} text - исходный текст
 * @returns {number} количество предложений
 */
export const countSentences = (words) => {
  // Если передан массив — собираем обратно в строку
  const text = Array.isArray(words) ? words.join(' ') : ''
  if (!text || !text.trim()) return 0

  const sentences = text.trim().match(/[^.!?]+[.!?]*/g)
  return sentences ? sentences.length : 0
}

/**
 * Подсчитывает количество уникальных слов в тексте.
 * Нормализует регистр и учитывает только буквенно‑цифровые символы.
 * @param {string} text - Исходный текст для анализа.
 * @returns {number} Количество уникальных слов.
 */
export const countUniqueWords = (words) => {
  if (!Array.isArray(words)) return 0

  const normalizedWords = words
    .map((word) => word.toLowerCase().replace(/[^a-za-яё0-9]/g, ''))
    .filter((word) => word.length > 0)

  return new Set(normalizedWords).size
}

/**
 * Сортирует слова в алфавитном порядке и возвращает их в виде строки через запятую.
 * Нормализует регистр и учитывает только буквенно‑цифровые символы.
 * @param {string[]} text - Исходный текст для обработки.
 * @returns {string} Слова, отсортированные по алфавиту и разделенные запятыми.
 */

export const sortWordsAlphabetically = (words) => {
  if (!Array.isArray(words) || words.length === 0) return ''

  // Очищаем каждое слово от лишних символов и приводим к нижнему регистру
  const cleanedWords = words
    .map((word) => word.toLowerCase().replace(/[^a-za-яё0-9]/g, ''))
    .filter((word) => word.length > 0)

  if (cleanedWords.length === 0) return ''

  cleanedWords.sort((a, b) => a.localeCompare(b))
  return cleanedWords.join(', ')
}

/**
 * Функция для анализа текста
 * @param {string []} userData - данные пользователя
 * @returns {number} количество символов в тексте без учета пробелов
 */

export const analyzeText = (userData) => {
  USER_TEXT.textContent = userData
  ANSWERS.FIRST_CHARACTER.textContent = firstCharacter(userData)
  ANSWERS.WORDS_COUNT.textContent = wordsCount(userData)
  ANSWERS.NUMBER_OF_CHARACTERS.textContent = numberOfCharacters(userData)
  ANSWERS.MAX_LENGTH_WORD.textContent = findLongestWord(userData)
  ANSWERS.REVERSE_WORD.textContent = reverseText(userData)
  ANSWERS.SENTENCES_COUNT.textContent = countSentences(userData)
  ANSWERS.UNIQUE_WORD_COUNT.textContent = countUniqueWords(userData)
  ANSWERS.WORDS_IN_ALPHABETICAL_ORDER.textContent = sortWordsAlphabetically(userData)
}
