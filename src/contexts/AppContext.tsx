import React, { useContext, useState } from "react";

type context = {
    isModalOpen:boolean;
    setIsModalOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const appContext = React.createContext<context>({} as context)

const AppContextProvider = ({ children }:{children:React.ReactNode}) =>{

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    
    const value = { isModalOpen, setIsModalOpen }
    return(
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    )
}

export default AppContextProvider

export const useAppContext:() => context = () => useContext(appContext)