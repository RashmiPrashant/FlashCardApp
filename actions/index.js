export const LOAD_DECK = 'LOAD_DECK'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_NEW_CARD = 'ADD_NEW_CARD'
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'


export function loadDeck(){
    return{
        type:LOAD_DECK
    }
}

export function addNewDeck(){
    return{
        type:ADD_NEW_DECK
    }

}

export function addNewCard(){
    return{
        type:ADD_NEW_CARD
    }

}



export function receiveEntries (entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries,
  }
}

export function addEntry (entry) {
  return {
    type: ADD_ENTRY,
    entry,
  }
}