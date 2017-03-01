/**
 * Created by gkvir on 2/27/2017.
 */
import   React , { Component } from 'react';
import {Text , View} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

    componentWillMount() {
        function getMoviesFromApiAsync() {
            return fetch('https://facebook.github.io/react-native/movies.json')
                .then((response) => response.json())
                .then((responseJson) => {
                    return responseJson.movies;
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        getMoviesFromApiAsync().then((data) => {
            this.setState({
                results: {
                    items: data
                }
            });

        }).catch((er) => {
            console.log(er);
        });
    }

    render() {
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}
export default AlbumList;