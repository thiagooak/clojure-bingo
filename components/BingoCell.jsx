import {React, useState, useEffect } from 'react';

export default function BingoCell({storageId, children}) {
    const [value, setValue] = useState(-1);

    const onClick = event => {
        setValue(value * -1);
    };

    // same as componentDidMount
    useEffect(() => {
        setValue(localStorage.getItem(storageId) || -1);
    }, []);

    useEffect(() => {
        localStorage.setItem(storageId, value);
    }, [storageId, value]);

    return (
        <div onClick={onClick} className="w-64 h-64 bg-white p-2 m-2" >
            {value > 0 && (<div className="text-6xl float-right">✔️</div>)}
            {children}
        </div>
    );
}
