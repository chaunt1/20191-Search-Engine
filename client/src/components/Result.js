import React, { Component } from 'react'
import './Result.css'

class Popup extends Component {
    render() {
        return(
            <div className="popup">
                <div className="popup_inner">
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
        );
    }
}

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
                        <div className="ui button" onClick={this.tooglePopup.bind(this)}>
                            <i className="add icon"></i>
                            More Info
                        </div>
                        {this.state.showPopup ?
                            <Popup
                                text='Close Me'
                                closePopup={() => this.tooglePopup.bind(this)}
                            />
                            : null
                        }
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
