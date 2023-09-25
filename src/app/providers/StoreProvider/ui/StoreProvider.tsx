import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { StateSchema } from '../config/StateSheme';
import { createReduxStore } from '../config/store';
import cls from './StoreProvider.module.scss';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
