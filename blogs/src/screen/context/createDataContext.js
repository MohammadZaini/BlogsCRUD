import React, {useReducer} from "react";

const Context = React.createContext();

export default (reducer, actions, initialValue) => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    const boundActions = {};
    for (let key in actions) {
        return boundActions[key] = actions[key](dispatch)
    }

    const Provider = ({children}) => {
        return <Context.Provider value={{state, ...boundActions}} >
                    {children}
                </Context.Provider>
    }

    return {Context, Provider};
};

