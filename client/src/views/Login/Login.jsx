import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GetUser, PostUser } from "../../redux/actions";

export default function User(){
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    let users = useSelector((state)=> state.users)
    const history = useHistory()

    useEffect(()=>{
        dispatch(GetUser())
    }, [dispatch])

    const validate = (data) =>{
        const {name, nickName, mail, password, country} = data;
        if(mail == users.mail && password == users.password){
            history.push("/welcome")
        }else{
            if(!name || !nickName || !mail) {
                alert("fill in the necessary fields")
            }else{
                dispatch(PostUser(data));
                history.push("/welcome");
            }
        }
    }

}