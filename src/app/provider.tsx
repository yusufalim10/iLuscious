'use client'
import { NextPage } from "next"
import React from "react"
import { Provider } from 'react-redux'
import store from 'lib/utils/redux/store'

interface ProviderModel {
    children: React.ReactNode
}

const Providers:NextPage<ProviderModel> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers