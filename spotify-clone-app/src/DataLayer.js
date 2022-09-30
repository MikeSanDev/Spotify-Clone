import React,
{
    createContext,
    useContext,
    useReducer
}
    from 'react';

// prepares the Data Layer for the data is coming
export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer,
    // child is referted to whats wrapped inside i.e App
    children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue =
    () => useContext(DataLayerContext);

    // this DataLayer.js file is necessary to use ContextAPI 