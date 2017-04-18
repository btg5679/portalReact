import BaseStore from './BaseStore';
import Consts from '../actions/Consts';

let latestAccountsData = {};

export default class LatestBillStore extends BaseStore {
    resetAll() {
        latestAccountsData = {};
    }

    setAll(data) {
        latestAccountsData = data;  
    }

    getAll() {
        return latestAccountsData;
    }

    handleAction(action) {
        switch (action.type) {
        case Consts.LOAD_ACCOUNT_LIST:
            this.setAll(action.data);
            this.emitChange();
            break;
        default:
        }
    }
}
