import React, { Component } from 'react'

export default class Result extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {ename, vname, director, country, content, tag, url} = this.props.result;
        url = 'https://phimmoi.net/' + url;
        tag = tag.map((t) => t + ', ');
        return (
            <div className="ui text container">
                <a href={url}>
                    <h1 className="ui header">{ename}</h1>
                </a>
                <p>{vname}</p>
                <p>Đạo diễn: {director}</p>
                <p>Quốc gia: {country}</p>
                <p>Nội dung: {content}</p>
                <h6>Thể loại: {tag}</h6>
                <div className="ui divider" />
            </div>
        )
    }
}
