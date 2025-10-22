import * as React from 'react';

import { type Data } from '../../interfaces';

const DataContext = React.createContext<Data>({});
const ActionContext = React.createContext<{
    setData(current: Data): void;
}>({ setData: (current: Data) => {} });

const DataContextProvider = ({
    children,
    initialData,
}: React.PropsWithChildren<{ initialData?: Data }>) => {
    const [data, setDataState] = React.useState<Data>(() => initialData ?? {});

    const setData = React.useCallback((current: Data) => {
        setDataState((prev) => (prev === current ? prev : current));
    }, []);

    const actions = React.useMemo(
        () => ({
            setData,
        }),
        [setData],
    );

    return (
        <ActionContext.Provider value={actions}>
            <DataContext.Provider value={data}>{children}</DataContext.Provider>
        </ActionContext.Provider>
    );
};

export default DataContextProvider;

export const useDataContext = () => {
    const value = React.useContext(DataContext);

    return value;
};

export const useDataActionContext = () => {
    const value = React.useContext(ActionContext);
    return value;
};
