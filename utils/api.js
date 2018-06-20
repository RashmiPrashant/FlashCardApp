import { AsyncStorage } from "react-native"

export const STORAGE_KEY = 'FlashCardApp : decks'

const decks_data = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }


export function setInitialDecks(){
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks_data));
  return decks_data
}  

export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY).then(setInitialDecks())
}

