import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class albums extends Component {
  render() {
    return (
        <View>
          <Header headerText={"Albums"}/>
          <AlbumList/>
        </View>

    );
  }
}

AppRegistry.registerComponent('albums', () => albums);

