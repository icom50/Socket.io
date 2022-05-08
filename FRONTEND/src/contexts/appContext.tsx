import * as React from 'react';
import { createContext, useReducer } from 'react';
import { Socket } from 'socket.io-client';
import { IUser, Users } from '../models/IUsers';

interface IAppState {
    Socket: Socket;
    Users: IUser[];
    CurrentUser: IUser;
}

const initialStateApp = {
    Socket: {} as Socket,
    Users: Users,
    CurrentUser: {} as IUser
};

export enum IAppActionType {
    SetSocket = 'SetSocket',
    SetCurrentUser = 'SetCurrentUser',
}

type IAppDispatch = {
    type: IAppActionType;
    Socket?: Socket;
    User?: IUser;
};

function appReducer(state: IAppState = initialStateApp, action: IAppDispatch): IAppState {
    switch (action.type) {
        case 'SetSocket':
            return {
                ...state,
                Socket: action.Socket || {} as Socket
            };
        case 'SetCurrentUser':
            return {
                ...state,
                CurrentUser: action.User || {} as IUser
            };
        default:
            return state;
    }
}

interface defaultValue {
    state: IAppState;
    dispatch: React.Dispatch<IAppDispatch>;
}

const AppContext = createContext<defaultValue>({
    state: initialStateApp,
    dispatch: () => { }
});

function AppProvider(props: any) {
    const [state, dispatch] = useReducer(appReducer, initialStateApp);
    return <AppContext.Provider value={{ state, dispatch }} >{props.children}</AppContext.Provider>
}

export { AppContext, AppProvider };
