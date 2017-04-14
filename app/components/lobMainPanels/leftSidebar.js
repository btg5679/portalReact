import React from 'react';

export default class LeftSidebar extends React.Component {
    render() {
        return (
            <aside className="leftSidebar">
                {this.props.children}
            </aside>
        );
    }
}