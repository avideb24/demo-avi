import Link from 'next/link';
import React from 'react';

const IconButton = ({ Icon, href = "/", background = "", className = "" }) => {
    return (
        <div className={`${background} `} >
            <Link href={href} className='inline-block' target='_blank'>
                <Icon className={`${className}  text-xl`} />
            </Link>
        </div>
    );
};

export default IconButton;