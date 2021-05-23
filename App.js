import React from "react";
import AppContainer from "./screens/navigation";
import ContextProvider from "./ContextApi";


export default function App() {
    return (
        <ContextProvider>
            <AppContainer />
        </ContextProvider>
    );
}
