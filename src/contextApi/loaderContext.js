import { createContext, useState } from "react";

export const loaderContext = createContext();

const LoaderContextProvider = ({children})=>{
    const [loading , setLoading] = useState(false);
   
    return <loaderContext.Provider value={{loading ,setLoading}}>
        {children}
    </loaderContext.Provider>
}

export default LoaderContextProvider;