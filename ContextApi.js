import React, { createContext, useState } from "react";

export const ContextApi = createContext(true);
export const ContextProvider = props => {
    const [current_latitude, setCurrentLatitude] = useState(0.0);
    const [current_longitude, setCurrentLongitude] = useState(0.0);
    return (
        <ContextApi.Provider value={{ Latitude: [current_latitude, setCurrentLatitude], Longitude: [current_longitude, setCurrentLongitude] }}>
            {props.children}
        </ContextApi.Provider>
    );
};

export default ContextProvider;