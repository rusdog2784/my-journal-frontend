import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { Store } from 'redux';

import configureStore, { IAppState } from './store/Store';
import { getEntriesAction } from './actions/EntryActions';

import './static/css/index.css';
import App from './components/App';

interface IProps {
    store: Store<IAppState>;
}

const Root: React.SFC<IProps> = props => {
    return (
        <Provider store={props.store}>
            <App />
        </Provider>
    )
}

const store = configureStore();
/* Can dispatch from here if you want. For example:
store.dispatch(newEntryAction());
*/
store.dispatch(getEntriesAction());

ReactDOM.render(<Root store={store} />, document.getElementById('root') as HTMLElement);