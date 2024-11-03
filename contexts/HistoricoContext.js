import React, {createContext, useState} from 'react';

export const HistoricoContext = createContext();

export function HistoricoProvider({ children }){
    const [historico, setHistorico] = useState([]);

    const adicionarAoHistorico = (dica) => {
        setHistorico((prevHistorico) => [...prevHistorico, dica]);
    }

    return (
        <HistoricoContext.Provider value={{historico, adicionarAoHistorico}}>
            {children}
        </HistoricoContext.Provider>
    )
}