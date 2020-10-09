import React from "react";
import { Link } from "react-router-dom"

function Navigation () {
    return <div>
        <Link to="/">Home</Link>
        <Link to="/aobut">About</Link>


        {/*
        <a> 와 href 활용시 페이지 자체를 새로고침시키는데, 이를 막기위해 
        react-router-dom의 Link를 사용해야함

        또한 Link는 항상 router 내부에 있어야함

        라우터는 또한 라우트에게 props를 기본적으로 전송하고 이를 활용가능
        */}
    </div>
}

export default Navigation;