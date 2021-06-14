import { useMemo } from 'react';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootAction } from './actions';
import { rootState, RootState } from './reducers';

const initStore = (preloadedState?: RootState) => {
    const enhancer = composeWithDevTools();

    const store = createStore(rootState, preloadedState, enhancer);

    return store;
};

let __store: Store<RootState, RootAction> | undefined;

export const initialStore = (preloadedState?: RootState) => {
    let _store = __store ?? initStore(preloadedState);

    if (preloadedState && __store) {
        _store = initStore({
            ...__store.getState(),
            ...preloadedState,
        });

        __store = undefined;
    }

    if (typeof window === 'undefined') {
        return _store;
    }

    if (!__store) {
        __store = _store;
    }

    return _store;
};

export const useStore = (initialState?: RootState) => {
    const store = useMemo(() => initialStore(initialState), [initialState]);

    return store;
};
