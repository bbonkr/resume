import * as React from 'react';
import { type Data } from '../../interfaces';

const DataContext = React.createContext<Data>({});
const ActionContext = React.createContext<{
    setData(current: Data): void;
}>({ setData: (current: Data) => {} });

const DataContextProvider = ({ children }: React.PropsWithChildren) => {
    const [data, setDataState] = React.useState<Data>({});
    const actions = React.useMemo(
        () => ({
            setData: (current: Data) => {
                setDataState((_) => current);
            },
        }),
        [],
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
