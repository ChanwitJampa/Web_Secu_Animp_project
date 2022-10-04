import {startFetch,endFetch,errorFetch} from './statusAction'
import { getAllAnime } from '../api/anime'
import axios from 'axios';
export const SET_LIST = 'SET_LIST'

export function setList(list){
    return{
        type:SET_LIST,
        payload:list
    }
}
export function fetchAnimeAsync(){
    return async function(dispatch){
        try{
             dispatch(startFetch())
            const anime = await axios.get(`localhost:5000/animes`);
            console.log(anime)
            if(anime){
                dispatch(setList(anime))
                dispatch(errorFetch(''))
                dispatch(endFetch())
            }
        }catch(error){
            dispatch(setList(null))
            dispatch(errorFetch(error))
            dispatch(endFetch())
        }
    }
}