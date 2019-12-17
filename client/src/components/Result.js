import React, { Component } from 'react'

export default class Result extends Component {

    render() {
        let {content, country, director, id, img, keywords, name, realname, status, tag, url} = this.props.result;
        console.log(this.props.result)
        console.log(this.props.result.IMBDb)
        url = 'https://phimmoi.net/' + url;
        tag = tag.map((t) => t + ', ');
        country = country.map((t) => t + ', ');
        return (
            <div className="ui card container" data-tooltip="Adds" data-position="top left">
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
                <div className="ui two button attached buttons">
                <div className="ui button">
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
            </div>
        )
    }
}
