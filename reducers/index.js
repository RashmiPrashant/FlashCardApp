import { 
    LOAD_DECK, 
    ADD_NEW_DECK, 
    ADD_NEW_CARD } from '../actions'
    
    function decks( state = {}, action){

        switch (action.type){
            case LOAD_DECK:
                return action.decks
            case ADD_NEW_DECK:
                return state
            case ADD_NEW_CARD:
                return state
            default:
                return state
        }

    }

  export default decks
