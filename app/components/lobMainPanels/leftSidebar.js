import React from 'react';
import AccountListContainer from '../accountList/AccountListContainer';

export default class LeftSidebar extends React.Component {
    render() {
        return (
            <aside className="leftSidebar">
            	<AccountListContainer/>
            	{this.props.children}
            </aside>
        );
    }
}