import React from 'react';
import 'react-i18next';
import i18n from '../../i18nTrans';
import Success from '../../assets/img/success.png';

const FinishSurveyElement = () => {
    
    return(
        <div className='formFinish'>
            <div><img className='formFinishImg' alt='Complete' src={Success} /></div>
            <div className='formFinishText'>
                <p><b>{i18n.t('Form.success')}</b></p>
                <p>{i18n.t('Form.loremipsum')}</p>
            </div>
        </div>


    );
}
export default FinishSurveyElement;