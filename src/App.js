import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import { storeFromreddit } from './actions/actionsRed';
import { storeDataFromreddit } from './actions/browseUrlAction';

class App extends Component {
  constructor(props){
    super(props)
   
    this.setText = this.setText.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  setText(event){
    event.preventDefault();
    var t = event.target.value
    // this.setState({text:t}); 
    this.props.setText(t)
  }
  fetchData(event){
    event.preventDefault();
    var nm = this.props.tag
    var urlfor =`https://www.reddit.com/r/${nm}.json`
    console.log(urlfor)
    this.props.fetchData(urlfor)
  }
  
  render() {   
    // this.props.urls && this.props.urls.links.map((iteration) =>{
    //   console.log('inside map : '+iteration);
    // })
    console.log(this.props.urls)
    
    return (
      <div>
        <input onChange = {this.setText}/>
        <button onClick = {this.fetchData}>Update</button>
        <div className = "textarea">
        <ul>
          {
            this.props.urls && this.props.urls.links.map((item,i)=>{
              return <li key ={i}><a href={item.url}>{item.title}</a></li>
            })
          }
        </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  tag:state.text,
  uri:state.data,
  urls:state.items
})
const mapActionToProps = (dispatch,props)=>{
  return bindActionCreators({
    setText:storeFromreddit,
    fetchData:storeDataFromreddit
  },dispatch)
}
export default connect(mapStateToProps,mapActionToProps)(App);
