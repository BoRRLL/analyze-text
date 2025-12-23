import { ANSWERS } from './constants'

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
