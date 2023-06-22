import {useContext} from 'react'
import { ConfigContext } from '../context/configContext'


const useConfig = ()=>{
    return useContext(ConfigContext)
}

export default useConfig;