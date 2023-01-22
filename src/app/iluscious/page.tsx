'use client';

import Registration from "@/components/Registration";
import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { v2 as cloudinary } from 'cloudinary'
import { CldUploadWidget } from "next-cloudinary";

const Iluscious:NextPage = () => {

    const session = useSession()
    console.log(session)

    return (
        <div>
            
            <h1>Welcome {session.data?.user.name}</h1>
            <div >
                <Image
                    src={session.data?.user.image as string}
                    alt={session.data?.user.name as string}
                    width={150}
                    height={150}
                />
            </div>

            <CldUploadWidget onUpload={(error, result, widget) => {
                if(!error && result && result.event === "success") {
                    console.log(result)
                    widget.close()
                }
            }} uploadPreset="users-avatar">
                {({ open }) => {
                    function handleOnClick(e) {
                    e.preventDefault();
                    open();
                    }
                    return (
                    <button onClick={handleOnClick}>
                        Upload an Image
                    </button>
                    );
                }}
            </CldUploadWidget>

            <button onClick={() => signOut()}>Sign Out</button>

        </div>
    )
}

export default Iluscious
