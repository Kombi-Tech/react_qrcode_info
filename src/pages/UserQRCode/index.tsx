import React from "react";
import QRCode from "qrcode";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

function UserQRCode() {

    const data = localStorage.getItem("user") ?? null
    const user = data && JSON.parse(data)

    const navigate = useNavigate();

    function info(user: object) {
        return Object.entries(user).map(([k, v]) => 
            <span key={k}>{k}: {v} <br/></span>
        )
    }
    
    function qrcode(data: string) {
        QRCode.toCanvas(
            document.getElementById("qr_code"),
            data,
            function (error) {
            if (error) console.error(error);
            }
        );
        return
    }

    useEffect(() => {
        data && qrcode(data)
    }, [])

    return (
        <div>
            {info(user)}<br/>
            <canvas id="qr_code"></canvas><br/>
            <button onClick={(e) => navigate("/")}>Edit Info</button>
        </div>
    )
}

export { UserQRCode };
