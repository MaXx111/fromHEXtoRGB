import React, { useState } from 'react'
import { Form } from './form'

const body = document.querySelector('body');

export function FromHEX() {

    const [RGB, setRGB] = useState({
        r: 255,
        g: 255,
        b: 255,
    });

    const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (event.target.value.length < 7) return

        let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(event.target.value);

        

        let res = rgb ? {
            r: parseInt(rgb[1], 16),
            g: parseInt(rgb[2], 16),
            b: parseInt(rgb[3], 16)
        } : undefined;

        setRGB(res!)

        let color = event.target.value;
        if (!res) color = `#FFFFFF`

        body!.style.backgroundColor = color;
    }

    
    return (
        <>
            <Form handler={formHandler}/>
            <div className="rgb">
                <span>{RGB ? `rgb (${RGB.r}) (${RGB.g}) (${RGB.b})` : 'ОШИБКА!!!'}</span>
            </div>
        </>
    )
}