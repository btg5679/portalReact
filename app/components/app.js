import React from 'react';

import Header from './main/Header';
import AccountList from './lobLeft/AccountList';

export default class App extends React.Component {
    static get childContextTypes() {
        return {
            root: React.PropTypes.string            
        };
    }
    
    getChildContext() {
        return {
            root: this.props.route.path
        };
    }

    /*{this.props.children}*/

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                  <div className="row">
                    <aside className="leftSidebar">
                        <AccountList/>
                    </aside>
                    <div className="mainContent">
                      <div className="small-12 column"></div>
                    </div>
                    <aside className="rightSidebar"></aside>
                  </div>
                </div>
            </div>
        );
    }
}
