import { AsyncStorage } from "react-native"

export const STORAGE_KEY = 'FlashCardApp : decks'

const decks = {
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


export const getDecks = () =>{
    return AsyncStorage.getItem(STORAGE_KEY).then(result =>{
        if(!result){
            AsyncStorage.setItem(STORAGE_KEY).then(JSON.stringify(decks))
            return desks
        } else {
            return JSON.parse(result)
        }
    })
}