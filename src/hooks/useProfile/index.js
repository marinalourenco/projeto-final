import { useState } from "react";
import { toast } from 'react-toastify';

export const useProfile = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState();
    const [origin, setOrigin] = useState();
    const [job, setJob] = useState("");

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
                job,
                );
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
