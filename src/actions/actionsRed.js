export const ADD_NEW_SEARCH_ENTRY = 'text:storeFromreddit'
export function storeFromreddit(newEntry){
    return {
        type:ADD_NEW_SEARCH_ENTRY,
        payload:{
            searchTag:newEntry
        }
    }
}