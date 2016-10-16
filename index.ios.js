

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

var facts = require("./facts")

export default class Franklin extends Component {

   getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min)) + min;
   }

  render() {
     var randomIndex = this.getRandomInt(0,12)
    return (
      <View style={{flex:1,backgroundColor:'#FF5E3A',alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:0.5,alignItems:'center',justifyContent:'center'}}>
               <Text style={{fontSize:30,fontFamily:'AvenirNext-Bold',color:'#FFFFFF',textAlign:'center'}}> {facts[randomIndex].virtue}</Text>
            </View>
            <View style={{flex:1,marginLeft:50,marginRight:50,marginBottom:50,alignItems:'center',justifyContent:'center',backgroundColor:'transparent',opacity:1}}>
               <Text style={{fontSize:25,fontFamily:'AvenirNext-Bold',color:'#FFFFFF',textAlign:'center'}}> {facts[randomIndex].detail}</Text>
            </View>
            <View style={{flex:0.5}}>
               <TouchableHighlight underlayColor= '#EEEEEE' onPress = {()=>{this.setState({random:Math.random()})}}  style={{height:60,width:200,backgroundColor:'#FFFFFF',opacity:0.8,alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',textAlign:'center'}}>Next Virtue</Text>
               </TouchableHighlight>
            </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Franklin', () => Franklin);
