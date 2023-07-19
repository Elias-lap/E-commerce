import { createContext } from "react";
export   let counterContext=createContext()


 export  function CounterContextProvider (props){
   
  return <counterContext.Provider value={{}}>
    {props.children}

  </counterContext.Provider>
}
