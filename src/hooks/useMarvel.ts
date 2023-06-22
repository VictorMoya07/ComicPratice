import {useContext}  from 'react'
import { MarvelContext } from '../context/marvelContext'

const useMarvel = ()=>{
    return useContext(MarvelContext)
}

export default useMarvel