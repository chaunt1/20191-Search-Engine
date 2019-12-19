import React, { Component } from 'react'
import './Result.css'
import ModalCre from './Modal'

export default class Result extends Component {
    state = { showPopup: false };

    tooglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render() {
        console.log(this.props.result)
        let {IMDb, content, country, dateIssue, director, id, img, keywords, name, realname, status, tag, url} = this.props.result;
        if (IMDb) IMDb = 'IMDb: ' + IMDb;
            else IMDb = 'IMDb: Không Rõ';
        url = 'https://phimmoi.net/' + url;
        tag = tag.map((t) => t + ', ');
        keywords = keywords.map((t) => t + ', ');
        country = country.map((t) => t + ', ');
        return (
            <div className="ui card container" >
                <div className="image">
                    <img style={{ width: "290px", height: "366.6px"}} src={img} />
                </div>
                <div className="content">
                    <a className="header">{name}</a>
                    <div className="meta">
                        <span className="date">{country}</span>
                    </div>
                    <div className="description">{realname}</div>
                </div>
                <div className="extra content">
                    <ModalCre img={img} director={director} imdb={IMDb} content={content} country={country} dateIssue={dateIssue} keywords={keywords} name={name} realname={realname} tag={tag} url={url}/>
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
