import axios from '../../axios/axios'
import { createStore, createEvent, createEffect } from "effector";

interface userData{
    id: number,
    score: number | null,
};

export const $user = createStore<userData>({
    id: 1,
    score: null
})

export const getScore = createEffect(async(id) => {
    try{
        const responce = await axios.post('/', id);
        if(responce.status === 200){
            return responce.data
        }
    }
    catch(error){
        console.log(error)
    }
})

export const registerUser = createEffect(async(id) =>{
    try{
        const responce = await axios.post('/registerUser', {id_vk: id});
        if(responce.status === 200){
            return responce.data
        }
    }
    catch(error){
        console.log(error)
    }
})

export const loginUser = createEffect(async(id) =>{
    try{
        const responce = await axios.post('/loginUser', {id_vk: id});
        if(responce.status === 200){
            return responce.data
        }
    }
    catch(error){
        console.log(error)
    }
})

export const updateUserData = createEvent()

$user.on(updateUserData, (_,state) => state).watch((e) => console.log(e))