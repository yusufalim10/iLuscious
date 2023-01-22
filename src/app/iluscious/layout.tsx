"use client"

import styles from './homepage.module.css'
import { NextPage } from 'next'
import React from 'react'
import Navbar from '@/components/Navbar'
import { useSession } from 'next-auth/react'


interface ilusciousPage {
    children: React.ReactNode
}

const IlusciousLayout:NextPage<ilusciousPage> = ({children}) => {

    const session = useSession()

    console.log(session)

    return (
        <>
        
            <Navbar />
            <div>{children}</div>

        </>
    )
}

export default IlusciousLayout