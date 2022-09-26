import React from 'react';
import ImgLogo from '../../assets/img/Logotipo-Vertical-Verde-Alta.png';
const ImgElement = () => {
    return(
        <div className='imgFormDiv'>
            <img className='imgForm' src={ImgLogo} alt='Logo'/>
        </div>
        
    );
}
export default ImgElement;