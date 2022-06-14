import {React, useState, useEffect } from 'react';

export default function BingoCell({storageId, children}) {
    const [value, setValue] = useState(-1);

    const onClick = event => {
        setValue(value * -1);
    };

    // same as componentDidMount
    useEffect(() => {
        setValue(localStorage.getItem(storageId));
    }, []);

    useEffect(() => {
        localStorage.setItem(storageId, value);
    }, [storageId, value]);

    return (
        <div className={(value < 0) ? 'bg-black' : 'bg-white'}>
            <div onClick={onClick}>
                {children}
            </div>
        </div>
    );
}
