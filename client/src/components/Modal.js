import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default class ModalCre extends React.Component {

    render() {
        return(
            <Modal trigger={<Button>
                <i className="add icon"></i>
                More Info
                </Button>}>
                <Modal.Header>Detail About This Movie</Modal.Header>
                <Modal.Content image>
                    <Image style={{ width: "300px", height: "400px"}} src={this.props.img} />
                    <Modal.Description>
                    <Header>{this.props.name}</Header>
                    <p>Other name: {this.props.realname}</p>
                    <p>{this.props.imdb}</p>
                    <p>Director: {this.props.director}</p>
                    <p>Country: {this.props.country}</p>
                    <p>Date: {this.props.dateIssue}</p>
                    <p>Type Of This Film: {this.props.tag}</p>
                    <span>Tags: {this.props.keywords}</span>
                    </Modal.Description>
                </Modal.Content>
                <div className="extra content">
                    <h5 style={{marginBottom: '20px'}}>Click Outside This Frame To Close 
                    <a href={this.props.url}>
                    <Button className="ui primary" style={{float: 'right'}}>
                        <i className="play icon" />
                        Watch
                    </Button></a></h5>
                </div>
            </Modal>
        )
    }
}