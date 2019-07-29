import { Reducer } from 'redux';
import {
    EntryActions,
    EntryActionTypes
} from '../actions/EntryActions';

export interface IEntry {
    id: number,
    title?: string,
    date: Date,
    feeling: number,
    whatHappened: string,
}

export interface IEntryState {
    readonly entry?: IEntry;
    readonly entries?: IEntry[];
}

const initialEntryState: IEntryState = {
    entry: {
        id: 0,
        title: '',
        date: new Date(),
        feeling: 3,
        whatHappened: ''
    },
    entries: []
};

export const entryReducer: Reducer<IEntryState, EntryActions> = (
    state = initialEntryState,
    action
) => {
    switch(action.type) {
        case EntryActionTypes.ADD_ENTRY: {
            return {
                ...state,
                entry: action.entry
            };
        }
        case EntryActionTypes.GET_ENTRIES: {
            return {
                ...state,
                entries: action.entries
            }
        }
        default:
            return state;
    }
};
