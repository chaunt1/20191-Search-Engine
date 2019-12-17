import React, { Component } from 'react'

export default class Result extends Component {
    state = { opened: false };
    toggleBox = this.toggleBox.bind(this);

    toggleBox() {
        const {opened} = this.state;
        this.setState({
            opened: !opened
        });
    }

    render() {
        const {opened} = this.state;
        let title
        if(!opened) {
            title = 'show';
        }
        console.log(this.props.result)
        let {IMDb, content, country, dateIssue, director, id, img, keywords, name, realname, status, tag, url} = this.props.result;
        if (IMDb) IMDb = 'IMDb: ' + IMDb;
            else IMDb = 'IMDb: Không Rõ';
        url = 'https://phimmoi.net/' + url;
        tag = tag.map((t) => t + ', ');
        country = country.map((t) => t + ', ');
        return (
            <div className="ui card container" >
                <div className="image">
                    <img src={img} />
                </div>
                <div className="content">
                    <a className="header">{name}</a>
                    <div className="meta">
                        <span className="date">{country}</span>
                    </div>
                    <div className="description">{realname}</div>
                </div>
                <div className="extra content">
                        <div className="ui button" onClick={this.toggleBox}>
                            <i className="add icon"></i>
                            More Info
                        </div>
                    <a href={url}>
                        <div className="ui primary button">
                                <i className="play icon" />
                                Watch
                        </div>
                    </a>
                </div>
                {opened && (
                            <div class="boxContent">
                                {IMDb}
                            </div>
                        )}
            </div>
        )
    }
}
