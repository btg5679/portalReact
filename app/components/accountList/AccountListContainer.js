import React from 'react';

export default class AccountListContainer extends React.Component {
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
						ACCTS GO HERE
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