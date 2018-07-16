import axios from 'axios';
import {FETCH_DATA} from '../actions/browseUrlAction';
import { takeEvery,put,call} from '../../node_modules/redux-saga/effects';
 function fetchURL(searchFor){
    //can access action elements inside saga
    console.log("search",searchFor)
    var urlFR = searchFor.searchFor
   return axios({
       url:urlFR
   })
//    .then((result)=>{
//     var datafrom = result.data.data.children.map((item,i)=>{
//         return item.data.url
//     })
//     return datafrom
//    }).then((data)=>{
//     var data = data 
//    })
//    yield put({
//     type:'GOT_RESULT',
//     data
//   })
}

export function* fetchURLFrom(searchFor){
 const result = yield call(fetchURL,searchFor)
    var url = result.data.data.children.map((item,i)=>{

        return item.data
    })
 yield put({type:'GOT_RESULT',url})
}
export function* watchFetchURl(){
 yield takeEvery(FETCH_DATA,fetchURLFrom);
}