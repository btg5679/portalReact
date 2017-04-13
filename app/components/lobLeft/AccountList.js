import React from 'react';
import {IndexLink} from 'react-router';

export default class AccountList extends React.Component {
    static get contextTypes() {
        return {
            root: React.PropTypes.string            
        };
    }

    render() {
        return (
            <div className="contInsideWrap">
              <div className="h5">Left sidebar</div>
              <div className="innerFullWidth">
                  <div className="myAccounts">
                  <span className="weight-700">My Accounts</span>
                  <span className="float-right">
                    <a href="#"><i className="icon fontello-rotate" aria-hidden="true"></i></a>
                    <a href="#"><i className="icon fontello-add" aria-hidden="true"></i></a>
                    <a href="#"><i className="icon fontello-chainlink" aria-hidden="true"></i></a>
                  </span>
                </div>
                <ul className="accountType list-unstyled">
                  <li className="active">All</li>
                  <li className="">Business</li>
                  <li className="">Personal</li>
                </ul>
                <div className="weight-700 accountHead">Total Assets:
                  <span>$1,663,208.98</span>
                </div>
                <ul className="accountsWrapper list-unstyled">
                  <li>
                    <a className="item active" href="#">
                      <ul className="list-unstyled list-inline">
                        <li>Business Checking</li>
                        <li className="text-right">34,052.71</li>
                      </ul>
                      <ul className="list-unstyled list-inline">
                        <li>Checking - 1234</li>
                        <li className="text-right">Last updated: 1 hr ago</li>
                      </ul>
                      <div className="iconWrapper editAccount">
                        <i className="icon fontello-edit" data-reveal-id="editModal" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="item" href="#">
                      <ul className="list-unstyled list-inline">
                        <li>Personal CD</li>
                        <li className="text-right">100,000.00</li>
                      </ul>
                      <ul className="list-unstyled list-inline">
                        <li>CD - 5678</li>
                        <li className="text-right">Last updated: 1 hr ago</li>
                      </ul>
                      <div className="iconWrapper account-status">
                        <i className="icon fontello-errorbang" aria-hidden="true"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="item" href="#">
                      <ul className="list-unstyled list-inline">
                        <li>Roth 401K</li>
                        <li className="text-right">350,000.00</li>
                      </ul>
                      <ul className="list-unstyled list-inline">
                        <li>Investment - 9012</li>
                        <li className="text-right">Last updated: 1 hr ago</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a className="item" href="#">
                      <ul className="list-unstyled list-inline">
                        <li>Live Oak Bank Card</li>
                        <li className="text-right">$10,000.00</li>
                      </ul>
                      <ul className="list-unstyled list-inline">
                        <li>Credit Card - 2345</li>
                        <li className="text-right">Last updated: 1 hr ago</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a className="item" href="#">
                      <ul className="list-unstyled list-inline">
                        <li>Expansion Loan</li>
                        <li className="text-right">$400,000.00</li>
                      </ul>
                      <ul className="list-unstyled list-inline">
                        <li>SBA Loan - 9876</li>
                        <li className="text-right">Last updated: 1 hr ago</li>
                      </ul>
                    </a>
                  </li>
                </ul>
                <div className="accountHead weight-700">Total Liabilities:
                  <span>$10,000.00</span>
                </div>
                <div className="accountHead weight-700">Net Worth:
                  <span>$760,000.00</span>
                </div>
              </div>
            </div>
        );
    }
}
