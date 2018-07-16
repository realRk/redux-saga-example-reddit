import {ADD_NEW_SEARCH_ENTRY} from '../actions/actionsRed';
import {FETCH_DATA} from '../actions/browseUrlAction';
export default function reditReducer(state = [],action){
    if(action.type === ADD_NEW_SEARCH_ENTRY){       
        return {
            ...state,
            text:action.payload.searchTag
        }
    }
    else if(action.type === FETCH_DATA){
        return {
            ...state,
            data:action.searchFor
        
    }
    }
    else if(action.type === 'GOT_RESULT'){
        console.log("hettt",action.url)
        return {
            ...state,
            items:{links:action.url}
        }

        
    }
    return state
}