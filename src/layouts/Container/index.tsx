import { AUTH_PATH } from 'constant';
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

//        component: 레이아웃        //
export default function Container() {

    //        state: 현재 페이지 path name 상태         //
    const {pathname} = useLocation();  //description: 현재 패스 이름

    //        render: 레이아웃 랜더링        //
    return (
        <>
            <Header/>
            <Outlet/>
            {pathname !== AUTH_PATH() && <Footer/>}
        </>
    )
}
