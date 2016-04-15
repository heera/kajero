import React, { Component } from 'react';
import { updateAuthor, toggleFooter } from '../actions';

export default class Metadata extends Component {

    constructor(props) {
        super(props);
        this.updateAuthor = this.updateAuthor.bind(this);
        this.toggleFooter = this.toggleFooter.bind(this);
    }

    updateAuthor() {
        this.props.dispatch(updateAuthor(this.refs.authorField.value));
    }

    toggleFooter() {
        this.props.dispatch(toggleFooter());
    }

    render() {
        const { editable, metadata } = this.props;
        const author = metadata.get('author');
        const date = new Date(metadata.get('created')).toUTCString();
        if (editable) {
            const iconFooter = metadata.get('showFooter') ? 'check-circle' : 'circle-o';
            return (
                <div className="metadata">
                    <div className="metadata-row">
                        <i className="fa fa-user"></i>
                        <input type="text" defaultValue={author}
                            ref="authorField" onBlur={this.updateAuthor} />
                    </div>
                    <div className="metadata-row">
                        <i className={'fa fa-' + iconFooter + ' clickable'}
                            onClick={this.toggleFooter} >
                        </i>
                        <span>Show footer</span>
                    </div>
                </div>
            );
        }
        return (
            <div className="metadata">
                <span className="metadata-item">
                    <i className="fa fa-user"></i>{'\u00a0' + author}
                </span>
                <span className="metadata-sep">{'\u00a0//\u00a0'}</span>
                <span className="metadata-item">
                    <i className="fa fa-clock-o"></i>{'\u00a0' + date}
                </span>
            </div>
        );
    }

}
