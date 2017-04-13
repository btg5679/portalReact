import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';

import Dashboard from './components/dashboard/Dashboard';
import LatestBills from './components/bill/LatestBills';
import DetailedBill from './components/bill/DetailedBill';

import AccountList from './components/lobLeft/AccountList';

import DetailedBillStore from './stores/DetailedBillStore';
import LatestBillsStore from './stores/LatestBillsStore';

import ComponentConnectorFactory from './components/common/ComponentConnectorFactory';

const AccountListConnector = ComponentConnectorFactory.connect({
    name: 'AccountListConnector',
    component: AccountList,
    store: DetailedBillStore
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
        <Route component={AccountListConnector} />
        <Route component={Dashboard}>
            <IndexRoute component={LatestsBillsConnector}/>
            <Route path="bill/:id" component={DetailedBillConnector}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
);
