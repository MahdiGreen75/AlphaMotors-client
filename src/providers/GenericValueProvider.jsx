import { createContext, useState } from "react";

export const GenericContext = createContext(null);



const GenericValueProvider = ({children}) => {
    const [details, setDetails] = useState([]);

  
    // console.log(details)
    return (
        <GenericContext.Provider value={[details, setDetails]}>
            {children}
        </GenericContext.Provider>
    );
};

export default GenericValueProvider;