import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    // state = { result: [] }

    constructor(props) {
        super(props);
        this.state = { result: []}
    }

    onSearchSubmit = async term => {
        console.log(term);
        await fetch("http://localhost:3001", {
            method: 'post',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'query': term
            })
            })
            .then(res => {
                res.json()
                .then(
                    data =>    { this.setState({ result: data })
                    console.log(this.state.result.data.length)}
                    )})
    };

    render() {
        console.log(this.state.result.data);
        return (
            <div>
                <div className="page header">
                    <div className="ui container">
                        <div className="ui text menu">
                            <a href="/" style={{ margin: 'auto', padding: '100px', maxWidth: '100%', height: 'auto' }}>
                                <img src="/logo.png" alt="SearchHereLogo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    Found: {this.state.result.data} results
                    {/* <ImageList images={this.state.result} /> */}
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