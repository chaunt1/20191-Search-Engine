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
            <div>
                <div className="page header">
                    <div className="ui container">
                        <div className="ui text menu">
                            <a href="/" style={{ margin: 'auto', padding: '100px' }}>
                                <img src="/logo.png" alt="SearchHereLogo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    Found: {this.state.images.length} images
                    <ImageList images={this.state.images} />
                </div>
                <div className="footer">
                    <div className="ui container">
                        <div className="ui section divider"></div>
                        <div className="ui small horizontal list">
                            <div className="disable item">&copy; 2019 GINP14</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;