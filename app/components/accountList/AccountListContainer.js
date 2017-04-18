import React from 'react';
import AccountContainer from './AccountContainer';
import Actions from '../../actions/Actions';

export default class AccountListContainer extends React.Component {
	static loadAction(params, domain) {
		return Actions.loadLatestAccountList(params, domain);
	}

    constructor(props) {
        super(props);
        console.log('props' + props);
        // this.changeHandler = this.onChange.bind(this);
        // this.state = this.props.store.getAll() || {};
    }

    // componentWillMount() {
    //     if (process.browser) {
    //         this.props.store.addChangeListener(this.changeHandler);            
    //     }
    // }

    // componentWillUnmount() {
    //     this.props.store.removeChangeListener(this.changeHandler);
    // }

    // componentDidMount() {
    //     Actions.getAccountList(this.props.params);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     let result = true;

    //     if (this.state.items && nextState.items) {
    //         const oldItems = this.state.items;
    //         const newItems = nextState.items;

    //         if (oldItems.length === newItems.length) {
    //             const validList = newItems.filter((item, index) => {
    //                 return oldItems[index].id !== item.id;
    //             });

    //             if (validList.length === 0) {
    //                 result = false;
    //             }
    //         }
    //     }

    //     return result;
    // }

    // onChange() {
    //     const state = this.props.store.getAll();
    //     this.setState(state);
    // }


    render() {
        return (
			<div className="accountsMenu depositGroup" id="accountList">
				<div className="myAccounts">
					<span>My Accounts</span>
					<a href="">
						<div className="has-tip tip-right" title="Refresh Accounts">
							<i className="fa fa-refresh"></i>
						</div>
					</a>
					<a className="removeStorage" href="#new-account">
						<div data-tooltip="Open a Live Oak Bank Account." aria-haspopup="true" 
								className="has-tip tip-right removeStorage" 
								title="Open a Live Oak Bank Account.">
							<i className="fa fa-plus removeStorage"></i>
						</div>
					</a>
					<a href="#">
						<div data-tooltip="Connect An External Account" 
								className="has-tip tip-right" 
								aria-haspopup="true" 
								title="Connect An External Account">
						<i className="fa fa-link" ></i>
						</div>
					</a>
				</div>
				<ul className="accountType">
					<li data-filter="all" className="active accountListLI">All</li>
					<li data-filter="business" className="accountListLI" >Business</li>
					<li data-filter="personal" className="accountListLI" >Personal</li>
				</ul>
				<div id="external-institution-list" className="depositGrp" ></div>
				<div className="depositGrp">
					<div className="accountHead">Total Assets
						<span >$349,452.84</span>
					</div>
					<div>
						<AccountContainer/>
					</div>
				</div>
				<div className="creditGrp">
					<div className="accountHead">Total Liabilities
						<span >$0.00</span>
					</div>
					<div className="creditGrp" ></div>
				</div>
				<div className="messageGrp">
					<div className="accountHead">Net Worth
						<span >$349,452.84</span>
					</div>
				</div>
			</div>
        );
    }
}