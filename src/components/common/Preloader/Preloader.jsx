import React from 'react';
import p from '../../Users/Users.module.css'
import preloader from '../../../assets/preloader.svg';


const Preloader = () => {
    return (
        <div className={p.preloader}>
                    <img  alt='' src={preloader} />
                </div>
    )
}

export default Preloader;