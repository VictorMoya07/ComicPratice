import { ReactNode, createContext, useState} from 'react'



interface IAlertProvider {
    children: ReactNode;
  }

interface IAlert {
    message: string;
    type: string;
}

interface IAlertContext {
    showAlert: (message: string,type: string) => void;
    alert: IAlert 
  }

const initialState={
    message:'' ,
    type:'' 
}



const AlertContext = createContext<IAlertContext|null>(null)


const AlertProvider = ({children}:IAlertProvider)=>{
    const [alert, setAlert] = useState<IAlert>(initialState)

    const showAlert = (message: string,type: string)=>{
        setAlert({message, type})

        setTimeout(() => {
            setAlert(initialState)
          }, 3000);
    }

    return(
        <AlertContext.Provider value={{showAlert, alert}} >
                    {children}
        </AlertContext.Provider>
    )
}

export {AlertContext, AlertProvider}