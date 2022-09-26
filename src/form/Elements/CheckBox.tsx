import React from 'react';
import 'react-i18next';
import i18n from '../../i18nTrans';

type DataCheck = {
    [key: string]: {
        check: boolean,
        textA: string,
    }
}

const CheckBoxElement = ({step, saveDate,setSaveDate}:{step:number, saveDate : DataCheck ,setSaveDate : Function}) => {
    
    const handleChange = () => { 
        const check = ((document.getElementById("check1")) as HTMLFormElement);
        if(check !== null){
            let checkTEMP =  {
                ...saveDate,
                "1":{check: check.checked,textA:""}}
            setSaveDate(checkTEMP);
        }
      }; 

    return(
        <>
        <div className='checkBoxDiv'>
            <input 
                className="checkBox" 
                type="checkbox" 
                checked={saveDate[step.toString()]?.check} 
                onChange={handleChange}
                id="check1" value="soymayor" />
            <label className="checkBoxLabel" htmlFor="check1"> {i18n.t('Form.page1')}</label>
        </div>
            <p id="check1Error" className='checkBoxError' >{i18n.t('Form.error1')}</p>

        </>


    );
}
export default CheckBoxElement;