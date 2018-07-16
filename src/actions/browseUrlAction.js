export const FETCH_DATA = 'data:storeDataFromreddit'
export function storeDataFromreddit(searchTag){
    return {
        type:FETCH_DATA,
        searchFor:searchTag
       
    }
}