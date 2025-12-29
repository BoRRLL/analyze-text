// import { ANSWERS } from './constants'

/**
 * Функция для получения первого символа текста
 * @param {string} text - исходный текст пользователя
 * @returns {string} первый символ текста (или пустая строка, если текст пуст)
 */
export const firstCharacter = (text) => {
  if (!text || !text.trim()) return ''
  return text.trim()[0]
}

/**
 * Функция для получения количества слов в тексте
 * @param {string} text - исходный текст пользователя
 * @returns {number} количество слов в тексте
 */
export const wordsCount = (text) => {
  if (!text || !text.trim()) return 0
  return text.trim().split(/\s+/).length
}

/**
 * Функция для получения количества символов в тексте (без пробелов)
 * @param {string} text - исходный текст пользователя
 * @returns {number} количество символов в тексте без учета пробелов
 */
export const numberOfCharacters = (text) => {
  if (!text) return 0
  return text.replace(/\s/g, '').length
}

/**
 * Функция для поиска самого длинного слова в тексте
 * @param {string} text - исходный текст пользователя
 * @returns {string} самое длинное слово в тексте (или пустая строка, если текст пуст)
 */
export const findLongestWord = (text) => {
  if (!text || !text.trim()) return ''

  // Разбиваем текст на слова, используя регулярное выражение для разделения по любым пробелам
  const words = text.trim().split(/\s+/)

  // Инициализируем самое длинное слово первым словом в массиве
  let longestWord = words[0]

  // Проходим по всем словам и ищем самое длинное
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  }

  return longestWord
}
