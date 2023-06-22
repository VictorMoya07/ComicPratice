import {useContext} from 'react'

import { ForeingContext } from '../context/foreingDataContext';

const useForeing = ()=>{
    return useContext(ForeingContext)
}

export default useForeing