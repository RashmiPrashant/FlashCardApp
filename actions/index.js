export const LOAD_DECK = 'LOAD_DECK'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_NEW_CARD = 'ADD_NEW_CARD'

export function loadDeck(decks){
    return{
        type:LOAD_DECK,
        decks
    }
}

export function addNewDeck(){
    return{
        type:ADD_NEW_DECK,
        deck
    }

}

export function addNewCard(){
    return{
        type:ADD_NEW_CARD,
        deck
    }

}


