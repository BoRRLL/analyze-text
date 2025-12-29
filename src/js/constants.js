export const FORM = document.querySelector('#analyse-list-form') // форма
export const TEXT_AREA = document.querySelector('#analyze-title') // textarea для ввода текста
export const USER_TEXT = document.querySelector('#userText') // исходный текст пользователя
export const CLEAR_BUTTON = document.querySelector('#clearButton') // кнопка очистки таблицы

export const ANSWERS = {
  // Первый символ
  FIRST_CHARACTER: document.querySelector('#answer1'),
  // количество слов
  WORDS_COUNT: document.querySelector('#answer2'),
  // количество символов
  NUMBER_OF_CHARACTERS: document.querySelector('#answer3'),
  // самое длинное слово
  MAX_LENGTH_WORD: document.querySelector('#answer4'),
  // перевернутое слово
  REVERSE_WORD: document.querySelector('#answer5'),
  // количество предложений
  SENTENCES_COUNT: document.querySelector('#answer6'),
  // количество уникальных слов
  UNIQUE_WORD_COUNT: document.querySelector('#answer7'),
  // слова в алфавитном порядке
  WORDS_IN_ALPHABETICAL_ORDER: document.querySelector('#answer8'),
}
