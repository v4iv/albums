import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))
            .catch(err => console.error(err));
    }

    render() {
        const { albums } = this.state;

        return (
            <ScrollView>
                {albums.map((album, index) =>
                    <AlbumDetail key={index} album={album} />
                )}
            </ScrollView>
        );
    }
}

export default AlbumList;
