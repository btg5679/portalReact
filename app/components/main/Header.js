import React from 'react';
import {IndexLink} from 'react-router';

export default class Header extends React.Component {
    static get contextTypes() {
        return {
            root: React.PropTypes.string            
        };
    }

    render() {
        return (
            <div className="navWrapper">
              <ul className="nav drop-down list-unstyled list-inline">
                <IndexLink to={this.context.root}>
                    <a>
                      <li className="branding">
                        <img src="/assets/lobImages/navLogoFull.png" title="Live Oak Bank" />
                        <img src="/assets/lobImages/navLogoFullWhite.png" title="Live Oak Bank" />
                      </li>
                    </a>
                </IndexLink>
                <li className="active">
                  <a>
                    <i className="icon fontello-deposits" aria-hidden="true"></i>
                    <span>Accounts</span>
                  </a>
                  <ul>
                    <li>
                      <a> Account Summary </a>
                    </li>
                    <li>
                      <a> Open New Account </a>
                    </li>
                    <li>
                      <a> Link External Account </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>
                    <i className="icon fontello-movemoney" aria-hidden="true"></i>
                    <span>Move Money</span>
                  </a>
                  <ul>
                    <li>
                      <a> Transfer Funds </a>
                    </li>
                    <li>
                      <a> Bill Pay </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>
                    <i className="icon fontello-managecards" aria-hidden="true"></i>
                    <span>Merchant</span>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="icon fontello-security" aria-hidden="true"></i>
                    <span>Vault</span>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="icon fontello-gear" aria-hidden="true"></i>
                    <span>Preferences</span>
                  </a>
                  <ul>
                    <li>
                      <a> Manage External Accounts </a>
                    </li>
                    <li>
                      <a> Manage Users </a>
                    </li>
                    <li>
                      <a> FAQ </a>
                    </li>
                    <li>
                      <a> Conbtact Us </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>
                    <i className="icon fontello-logout" aria-hidden="true"></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
        );
    }
}
