import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Errormessage = ({showToast,msg,type}) => {
    const notify = ()=>{
        toast[type](msg,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
    useEffect(()=>{
        if(showToast){
            notify()
        }
    },[showToast])
    return (
        <div><ToastContainer/></div>
    )
}

export default Errormessage