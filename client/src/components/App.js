import React from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import {Pagination} from 'semantic-ui-react';

class App extends React.Component {
    state = { result: [], found: 0, page: false };

    onSearchSubmit = async term => {
        await fetch("http://localhost:3001", {
            method: 'post',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'query': term.term,
                'type': term.type,
                'pageNumb': this.state.page
            })
            })
            .then(res => res.json()
                .then(
                    data => {
                        let b = Object.keys(data).map(key => [data[key]]);
                        this.setState({ found: b[0][0][0]})
                        b[0][0].shift()
                        this.setState({ result: b[0][0] })
                        if (this.state.found > 0) this.setState({ page: true });
                    }
                ))
            .catch(err => console.log(err));
    };

    render() {
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
                <div className="ui container" style={{ marginTop: '10px', marginBottom: '200px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    Found: {this.state.found} results
                    <ResultList result={this.state.result} />
                </div>
                <div className="footer">
                    {this.state.page && <Pagination defaultActivePage={1} totalPages={(this.state.found - this.state.found % 10) / 10} style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} />}
                    <div className="ui container" style={{ marginBottom: '20px'}}>
                        <div className="ui section divider"></div>
                        <div className="ui small horizontal list">
                            <i className="vn flag" />
                            <div className="disable item">&copy; 2019 GINP14</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;