import { AlertColor } from '@mui/material';
import { ReactNode, createContext, useState} from 'react'



interface IAlertProvider {
    children: ReactNode;
  }

interface IAlert {
    message: string;
    type:AlertColor
}

interface IAlertContext {
    showAlert: (message: string,type: AlertColor) => void;
    alert: IAlert 
  }

const initialState:IAlert={
    message:'' ,
    type:'' 
}



const AlertContext = createContext<IAlertContext>({} as IAlertContext)


const AlertProvider = ({children}:IAlertProvider)=>{
    const [alert, setAlert] = useState<IAlert>(initialState)

    const showAlert = (message: string,type: AlertColor)=>{
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