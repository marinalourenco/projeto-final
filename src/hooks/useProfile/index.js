import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const useProfile = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState();
    const [origin, setOrigin] = useState();
    const [job, setJob] = useState("");
//const {nameHook,genderHook,originHook,jobHook}= context/redux com os dados do login

// useEffect(()=>{
//     const init=()=>{
//         setName(namehook);
//         setGender(genderHook);
//         setOrigin(originHook);
//         setJob(jobHook);
//     };
//     init();
// },[])

    const handleName = (event) => setName(event.target.value);
    const handleGender = (event) =>{
        console.log(event.target)
        setGender(event.target.value)};
    const handleOrigin = (event) => setOrigin(event.target.value);
    const handleJob = (event) => setJob(event.target.value);

    const submitProfile = (event) => {
        event.preventDefault();
        try{
            console.log(
                name, 
                gender, 
                origin, 
                job);
                // const body = {
                //     name, 
                //     gender, 
                //     origin, 
                //     job
                // };
                // await api.post(`user`,body);
                toast('Salvo com sucesso!')
        
            } catch(error){
            toast.error('Erro ao atualizar perfil')
        }
    }

    const returnButton = () => {
       window.history.back();
    }

    return {
        name, 
        gender, 
        origin, 
        job,
        handleName,
        handleGender,
        handleOrigin,
        handleJob,
        submitProfile,
        returnButton
    }
}


export default useProfile;