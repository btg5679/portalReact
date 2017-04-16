import React from 'react';

export default class RightSidebar extends React.Component {
    render() {
        return (
            <aside className="rightSidebar">
            	<div>RIGHT PANEL</div>
                {this.props.children}
            </aside>
        );
    }
}