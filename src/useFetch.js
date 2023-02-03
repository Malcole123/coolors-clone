import { useEffect, useState } from "react";
import axios from "axios";


function useFetch(url, { params , body}){
    const [ data , setData ] = useState(null);
    const [ loading , setLoading ] = useState(false);
    const [ error , setError ] = useState(null);

    useEffect(()=>{
        setLoading(true);
        axios.get(url, {
            body,
            params,
        }).then(response =>{ 
            setData(response.data);
        }).catch(err=>{
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }, [ url, params, body ])
    return { data, loading , error}
}

export default useFetch
