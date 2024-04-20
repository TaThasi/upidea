'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const {data: session} = useSession();  

    // if(!session || !session.user) return <div>
    //     <p className=' text-red-500'>You Need To Sign In</p>
    // </div>

    return (
        <div>
        This page is protected 
        </div>
    )
}

export default page
