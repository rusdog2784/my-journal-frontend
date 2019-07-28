import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../store/Store';

import { IEntry } from '../reducers/EntryReducer';

interface IProps {
    entry?: IEntry;
    entries?: IEntry[];
}

class EntryList extends React.Component<IProps> {
    public render() {
        const { entries } = this.props;
        const dateStringOptions = {year: 'numeric', day: 'numeric', month: 'numeric'}

        return (
            <div className="entry-list-container">
                { entries && 
                    entries.map(entry => {
                        return (
                            <div key={entry.id} className="entry">
                                <p>Title: {entry.title}</p>
                                <p>Date: {entry.date.toLocaleDateString('en-US', dateStringOptions)}</p>
                                <p>Feeling: {entry.feeling}</p>
                                <p>What Happened: {entry.whatHappened}</p>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        entries: store.entryState.entries,
    }
}

export default connect(mapStateToProps)(EntryList);