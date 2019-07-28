import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { IEntry, IEntryState, entryReducer } from '../reducers/EntryReducer';

export enum EntryActionTypes {
    NEW_ENTRY = "NEW_ENTRY",
    GET_ENTRIES = "GET_ENTRIES",
}

export interface INewEntryAction {
    type: EntryActionTypes.NEW_ENTRY,
    entry: IEntry
}

export interface IGetEntriesAction {
    type: EntryActionTypes.GET_ENTRIES,
    entries: IEntry[]
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type EntryActions = INewEntryAction | IGetEntriesAction;

export const newEntryAction: ActionCreator<
    ThunkAction<Promise<any>, IEntryState, null, INewEntryAction>
> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: EntryActionTypes.NEW_ENTRY,
            entry: {
                id: 4,
                title: "Entry 4",
                date: new Date(2019, 7, 29),
                feeling: 5,
                whatHappened: 'Who knows what is happening right now because this is set in the future...'
            }
        });
    }
};

export const getEntriesAction: ActionCreator<
    ThunkAction<Promise<any>, IEntryState, null, IGetEntriesAction>
> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: EntryActionTypes.GET_ENTRIES,
            entries: [
                {
                    id: 1,
                    title: "Entry 1",
                    date: new Date(2019, 7, 26),
                    feeling: 5,
                    whatHappened: 'Had an absolutely wonderful time hanging out with Grant and Gianluca at Sorellina and Louis & Jerrys'
                },
                {
                    id: 2,
                    title: "Entry 2",
                    date: new Date(2019, 7, 27),
                    feeling: 3,
                    whatHappened: 'Day was ok. Wish I did more with it, but watched a great documentary called The Great Hack.'
                },
                {
                    id: 3,
                    title: "Entry 3",
                    date: new Date(2019, 7, 28),
                    feeling: 4,
                    whatHappened: 'Day is going pretty great so far with learning all this new react redux stuff'
                }
            ]
        })
    }
}