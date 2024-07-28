import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery=fetchBaseQuery({baseUrl:"http://localhost:5000"})


export const driverSlice=createApi({
    reducerPath:"driverApi",
    baseQuery,
    endpoints:(builder)=>({
        signup:builder.mutation({
            query:(data)=>({
              url:'/driver/Register',
              method:'POST',
              body:data  
            })
        })
    })
})

export const {useSignupMutation}=driverSlice