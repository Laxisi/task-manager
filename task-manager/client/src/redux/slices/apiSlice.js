import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// const API_URI = "http://localhost:8800/api"
const API_URI = import.meta.env.VITE_APP_BASE_URL

const baseQuery = fetchBaseQuery({
     baseUrl: API_URI + "/api",
    credentials:"include",
prepareHeaders:(headers,{getState})=>{
    const token=getState().auth?.token

    if(token){
        headers.set("Authorization",`Bearer${token}`)
    }
    return headers
} })

export const apiSlice = createApi({
    baseQuery,
    tagTypes: [],
    endpoints: (builder) => ({}),
})
