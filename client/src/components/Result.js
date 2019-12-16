import React, { Component } from 'react'

export default class Result extends Component {

    render() {
        let {content, country, director, id, img, keywords, name, realname, status, tag, url} = this.props.result;
        console.log(this.props.result)
        console.log(img)
        url = 'https://phimmoi.net/' + url;
        tag = tag.map((t) => t + ', ');
        country = country.map((t) => t + ', ');
        return (
            <div className="ui card container">
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
                    <a href={url}>
                        <button className="ui secondary button">
                            Xem Phim
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}
