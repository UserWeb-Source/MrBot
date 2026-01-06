import React,{useState,useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Toast } from 'primereact/toast';
import axios from "axios";
// import { GoogleLogin } from '@react-oauth/google';


export default function SignUp() {
    const [formdata, setFormdata] = useState({
        username: '',
        email: "",
        password: "",
    });
    const {username,email, password} = formdata;
    const onchange = (e) => {
        setFormdata({
            ...formdata,[e.target.name]: e.target.value,
        })
    }
    const toast = useRef(null);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            const URI = "http://192.168.1.9:3001/blog/register" || "http:localhost:3001/blog/register";
            const res = await axios.post(URI, formdata);
            toast.current.show({ severity: 'success', summary: 'Info', detail:"Now,You Can Sign In"});
            setTimeout(() => {
                navigate("/signin");
            },3000);
        }catch(err){
            if(err.response.status === 400){
                return toast.current.show({ severity: 'contrast', summary: err.response.status, detail:err.response.data.message });
            }
            console.log(err.response.data.message);
        }
    }

    const header =  <div className="font-bold mb-3">Pick a password</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </>
    );

    return (
        <>
            <Toast ref={toast} position="top-center" />
            <div className="py-10 flex justify-center">
                <div className="sign-in-container w-105 pt-5 bg-gray-900 rounded-xl p-10" style={{fontFamily:"system-ui"}}>
                    <p className="text-2xl text-gray-100 font-[700]"> Sign Up </p>
                    <p className="text-gray-500"> Get Registered with Our Site </p>
                    <div className="sign-in-form-section mt-5">
                        <form action="/signin" onSubmit={onSubmit} className="form grid gap-3">
                            <div className="form-group grid gap-1">
                                <label htmlFor="username" className="text-sm font-semibold text-gray-300"> Username </label>
                                <input type="text" value={username} className="p-2 text-sm border bg-white border-gray-300 rounded-md"  onChange={onchange} placeholder="Enter your Username" id="username" name="username"/>
                            </div>
                            <div className="form-group grid gap-1">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-300"> Email </label>
                                <input type="email" value={email} className="p-2 text-sm border bg-white border-gray-300 rounded-md"  onChange={onchange} placeholder="Enter your Email" id="email" name="email" />
                            </div>
                            <div className="form-group grid gap-1">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-300"> Password </label>
                                <Password value={password} className="h-10 input-psw" placeholder="Enter Strong Password" onChange={onchange} id="password" name="password" header={header} footer={footer} />
                            </div>
                            <div className="form-group flex space-x-2">
                                <input type="checkbox" className="w-fit outline-0" />
                                <p className="text-gray-200 text-sm"> Remember me </p>
                            </div>
                            <div className="submit-btn">
                                <button className="bg-blue-400 py-2 w-full font-bold rounded-xl cursor-pointer text-white"> Get Registered </button>
                            </div>
                            <div className="flex justify-center items-center mt-1 gap-1">
                                <div className="bg-gray-400 w-25 h-0 p-[0.05px]"/>
                                <p className="text-gray-400 text-sm"> OR Login With </p>
                                <div className="bg-gray-400 w-25 h-0 p-[0.05px]"/>
                            </div>
                            <p className="text-gray-300 text-sm text-center mt-3"> Already you Registered? <a href="/register" className="underline text-sm text-blue-400"> Sign In </a></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export function SignIn(){
    const [formdata, setFormdata] = React.useState({
        email: "",
        password: "",
    });
    const {email, password} = formdata;
    const onchange = (e) => {
        setFormdata({
            ...formdata,[e.target.name]: e.target.value,
        })
    }

    const toast = useRef(null);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            const URI = "http://localhost:3001/blog/login" || "http://192.168.1.9:3001/blog/login";
            const res = await axios.post(URI, formdata);
            toast.current.show({ severity: 'success', summary: 'Info', detail:res.data.message});
            localStorage.setItem("token", res.data.token);
            setTimeout(() => {
                navigate("/");
            },3000);
        }catch(err){
            if(err.response.status === 400){
                return toast.current.show({ severity: 'contrast', summary: err.response.status, detail:err.response.data.message });
            }
            console.log(err.response.data.message);
        }
    }

    return (
        <>
            <Toast ref={toast} position="top-center" />
            <div className="py-10 flex justify-center">
                <div className="sign-in-container w-105 pt-5 bg-gray-900 rounded-xl p-10" style={{fontFamily:"system-ui"}}>
                    <p className="text-2xl text-gray-300 font-[700]"> Sign In </p>
                    <p className="text-gray-500"> Sign in and Read More Article </p>
                    <div className="sign-in-form-section mt-5">
                        <form action="/" method="POST" onSubmit={onSubmit} className="form grid gap-3">
                            <div className="form-group grid gap-1">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-300"> Email </label>
                                <input type="email" className="p-2 text-sm border bg-white border-gray-300 rounded-md" value={email} onChange={onchange} placeholder="Enter your Email" id="email" name="email" />
                            </div>
                            <div className="form-group grid gap-1">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-300"> Password </label>
                                <input type="password" value={password} className="p-2 text-sm border bg-white border-gray-300 rounded-md" placeholder="Enter Your Password" onChange={onchange} id="password" name="password" />
                            </div>
                            <p className="text-blue-200 text-sm text-end cursor-pointer hover:underline"> Forgot Password?</p>
                            <div className="submit-btn">
                                <button className="bg-blue-400 py-2 w-full font-bold rounded-xl cursor-pointer text-white"> Log In </button>
                            </div>
                            <div className="flex justify-center items-center mt-1 gap-1">
                                <div className="bg-gray-400 w-25 h-0 p-[0.05px]"></div>
                                <p className="text-gray-400 text-sm"> OR Login With</p>
                                <div className="bg-gray-400 w-25 h-0 p-[0.05px]"></div>
                            </div>
                            <div className="login-with-btns grid grid-cols-3 gap-6">
                                <button type="button" className="bg-gray-100 p-2 flex justify-center border-0 text-gray-300 rounded focus:scale-95 transition cursor-pointer">
                                    {/*<img src="/lg_icon_101.svg" alt="google"/>*/} Sign in with google
                                </button>
                                {/*<GoogleLogin auto_select={false} onSuccess={(credentialResponse) => {*/}
                                {/*   console.log(credentialResponse);*/}
                                {/*   localStorage.setItem("token", credentialResponse.credential); // Key -> Value*/}
                                {/*   window.location.href = "/";*/}
                                {/*}}  onError={(credentialResponse) => {*/}
                                {/*    console.log(credentialResponse,"Error Occured!");*/}
                                {/*}} />*/}
                                <button type="button" className="bg-gray-100 p-2 flex justify-center border-0 text-gray-300 rounded focus:scale-95 transition cursor-pointer">
                                    <img src="/lg_icon_102.svg" alt="facebook"/>
                                </button>
                                <button type="button" className="bg-gray-100 p-2  flex justify-center border-0 text-gray-300 rounded focus:scale-95 transition cursor-pointer">
                                    <img src="/lg_icon_103.svg" alt="twitter"/>
                                </button>
                            </div>
                            <p className="text-gray-400 text-sm text-center mt-3"> Not Registerd yet? <a href="/register" className="underline text-sm text-blue-400"> Sign Up Now </a> </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
