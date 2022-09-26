import React from 'react';
import 'react-i18next';
import i18n from '../../i18nTrans';

const TextInitElement = () => {
    
    return(
        <>
            <p><b>{i18n.t('TextInit.text1')}</b></p>
            <p>{i18n.t('TextInit.text2')}</p>
            <p>{i18n.t('TextInit.text3')}</p>
            <p>{i18n.t('TextInit.text4')}</p>
        </>

    );
}
export default TextInitElement;