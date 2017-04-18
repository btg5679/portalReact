import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';

import Dashboard from './components/dashboard/Dashboard';
import LatestBills from './components/bill/LatestBills';
import DetailedBill from './components/bill/DetailedBill';
import AccountContainer from './components/accountList/AccountContainer';


import DetailedBillStore from './stores/DetailedBillStore';
import LatestBillsStore from './stores/LatestBillsStore';
import AccountsStore from './stores/AccountsStore';

import ComponentConnectorFactory from './components/common/ComponentConnectorFactory';

const AccountContainerConnector = ComponentConnectorFactory.connect({
    name: 'AccountContainerConnector',
    component: AccountContainer,
    store: AccountsStore
});

const DetailedBillConnector = ComponentConnectorFactory.connect({
    name: 'DetailedBillConnector',
    component: DetailedBill,
    store: DetailedBillStore
});

const LatestsBillsConnector = ComponentConnectorFactory.connect({
    name: 'LatestsBillsConnector',
    component: LatestBills,
    store: LatestBillsStore
});

export default (
    <Route path="/" component={App}>
        <Route component={AccountContainerConnector} />
        <Route component={Dashboard}>
            <IndexRoute component={LatestsBillsConnector}/>
            <Route path="bill/:id" component={DetailedBillConnector}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
);
