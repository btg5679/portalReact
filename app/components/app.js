import React from 'react';

import Header from './main/Header';
import LeftSidebar from './lobMainPanels/LeftSidebar';
import RightSidebar from './lobMainPanels/RightSidebar';
import CenterPanel from './lobMainPanels/CenterPanel';

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

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row mainPanelRow"> 
                        <LeftSidebar/>
                        <CenterPanel/>
                        <RightSidebar/>
                    </div>
                </div>
            </div>
        );
    }
}
