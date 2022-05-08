import * as React from 'react';
import { createContext, useReducer } from 'react';
import { Socket } from 'socket.io-client';

interface IAppState {
    Socket: Socket;
}

const initialStateApp = {
    Socket: {} as Socket,
};

export enum IAppActionType {
    SetSocket = 'SetSocket',
}

type IAppDispatch = {
    type: IAppActionType;
    Socket?: Socket;
};

function appReducer(state: IAppState = initialStateApp, action: IAppDispatch): IAppState {
    switch (action.type) {
        case 'SetSocket':
            return {
                ...state,
                Socket: action.Socket || {} as Socket
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
