import React from 'react';

class SearchBar extends React.Component {
    state = { term: '', type: 'name' };

    onFormSubmit = event =>{
        event.preventDefault();
        let t = {
            term: this.state.term,
            type: this.state.type
        }
        this.props.onSubmit(t);
        console.log(t)
    };

    handleChange(e) {
        this.setState({
            type: e.target.value
        })
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" method="POST">
                    <div className="field">
                        <label>Input Your Search Here</label>
                        <input name="search" type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Type</label>
                        <select onChange={this.handleChange.bind(this)} value={this.state.type}>
                            <option value="name">Name</option>
                            <option value="tag">Categories</option>
                            <option value="keywords">Other</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;
