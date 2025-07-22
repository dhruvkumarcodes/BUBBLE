import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function Signup() {
    const [authUser, setAuthUser] = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const password = watch("password");
    const confirmPassword = watch("confirmPassword")
    const validatePasswordMatch = (value) => {
        return value === password || "Passwords don't match";
    }
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.username,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }
        await axios.post("/api/user/signup", userInfo)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    toast.success("Signup Successfull! You can Login Now")
                }
                localStorage.setItem("messenger", JSON.stringify(response.data));
                setAuthUser(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    toast.error("error in signup")
                }
                console.log(error);
            })
    }
    return (
        <div>
            <div className=" flex h-screen items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className='border border-black rounded-md p-6 max-w-sm bg-white shadow space-y-3 w-98'>
                    <h1 className='text-2xl items-center text-blue-500 font-bold'>BUBBLE</h1>
                    <h1 className='text-2xl items-center font-semibold'>Create a new Account</h1>


                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input type="text" placeholder="Enter Email" {...register("email", { required: true })} />

                    </label>
                    {errors.email && <span className='text-red-500 text-sm font-semibold'>**This field is required**</span>}

                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </g>
                        </svg>
                        <input
                            type="text"

                            placeholder="Username"
                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                            title="Only letters, numbers or dash"
                            {...register("username", { required: true })}
                        />

                    </label>
                    {errors.username && <span className='text-red-500 text-sm font-semibold'>**This field is required**</span>}

                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                ></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            type="Password"
                            placeholder="Password"

                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            {...register("password", { required: true })}
                        />

                    </label>
                    {errors.password && <span className='text-red-500 text-sm font-semibold'>**This field is required**</span>}

                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                ></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            type="password"
                            placeholder="Confirm Password"

                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            {...register("confirmPassword", { required: true, validate: validatePasswordMatch })}
                        />
                    </label>
                    {errors.confirmPassword && <span className='text-red-500 text-sm font-semibold'>{errors.confirmPassword.message}</span>}
                    <div className='flex justify-center pr-4'>

                        <input type="submit" value="Signup" className='text-white bg-blue-500 w-[30vh] rounded-lg h-10 cursor-pointer'></input>
                    </div>
                    <h1>Already have an account? <Link to="/login" className='text-blue-500 cursor-pointer ml-1 '>Login</Link></h1>
                </form>

            </div>

        </div>
    )
}
