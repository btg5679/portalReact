import React from 'react';

export default class CenterPanel extends React.Component {
    render() {
        return (
            <div className="mainContent">
            	<div>MAIN CONTENT</div>
                {this.props.children}
            </div>
        );
    }
}