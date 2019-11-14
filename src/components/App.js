import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async term => {
        const res = await unsplash
            .get('https://api.unsplash.com/search/photos', {
                params: {
                    query: term
                }
            });
    this.setState({ images: res.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
};

export default App;