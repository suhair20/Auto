import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery=fetchBaseQuery({baseUrl:"http://localhost:5000",
    credentials:"include"
  })


export const driverSlice=createApi({
    reducerPath:"driverApi",
    baseQuery,
    endpoints:(builder)=>({
        signup:builder.mutation({
            query:(formData)=>({
              url:'/driver/Register',
              method:'POST',
              body:formData  
            })
        }),
       otp:builder.mutation({
        query: (data)=>({
            url:'/driver/verifyotp',
            method:'POST',
            body:data
        })
       }) ,
       resendotp:builder.mutation({
        query:(data)=>({
            url:'/driver/resendotp',
            method:'POST',
            body:data
        })
       }),
       verification:builder.mutation({
        query:(data)=>({
            url:'/driver/verification',
            method:'POST',
            body:data
        })
       }),
       driverLogin :builder.mutation({
        query:(data)=>({
            url:'/driver/login',
            method:'POST',
            body:data
        })
       }),
       drivercheckAuth:builder.query({
        query:()=>({
            url:'/driver/checkAuth',
            method:'GET'
        })
       }),
       dlogout:builder.mutation({
        query:()=>({
            url:'/driver/logout',
            method:'POST'
        })
       })
    })
})

export const {useSignupMutation,useOtpMutation,useResendotpMutation,useVerificationMutation,useDriverLoginMutation,useDrivercheckAuthQuery}=driverSlice