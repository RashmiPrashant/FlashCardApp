import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions'

    /* import { 
    LOAD_DECK, 
    ADD_NEW_DECK, 
    ADD_NEW_CARD } from '../actions'function decks( state, action){

        switch (action.type){
            case LOAD_DECK:
                return state
            case ADD_NEW_DECK:
                return state
            case ADD_NEW_CARD:
                return state
            default:
                return state
        }

    }

    */

    function entries (state = {}, action) {
        switch (action.type) {
          case RECEIVE_ENTRIES :
            return {
              ...state,
              ...action.entries,
            }
          case ADD_ENTRY :
            return {
              ...state,
              ...action.entry
            }
          default :
            return state
        }
      }

export default entries
