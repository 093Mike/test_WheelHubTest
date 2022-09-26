import React from 'react';
import 'react-i18next';
import i18n from '../i18nTrans';


type DataCheck = {
    [key: string]: {
        check: boolean,
        textA: string,
    }
}

const NavegationElement = 
    ({step,setStep,saveDate ,steps} : 
    {step: number, setStep: Function ,saveDate: DataCheck, steps: number}) => {
    

    function controlCheckData({next}:{next:boolean}) {
        console.log(saveDate);
        if(next){
            if (step===1) {
                const check = ((document.getElementById("check1")) as HTMLFormElement);
                const checkError = ((document.getElementById("check1Error")) as HTMLElement);
                if(check !== null){
                    if(!check.checked && !saveDate[step]?.check){
                        checkError.style.display = "block";
                    }else{
                        checkError.style.display = "none";
                        setStep(step+1);
                    }
                }
            }else{
                const name = ((document.getElementById("name")) as HTMLFormElement);
                const error1 = ((document.getElementById("formElement1Error")) as HTMLFormElement);
                const error2 = ((document.getElementById("formElement2Error")) as HTMLFormElement);
                const error3 = ((document.getElementById("formElement3Error")) as HTMLFormElement);

                const password = ((document.getElementById("password")) as HTMLFormElement);
                const passwordR = ((document.getElementById("passwordR")) as HTMLFormElement);
                const QuestPass = ((document.getElementById("QuestPass")) as HTMLFormElement);
                const line = ((document.getElementById("line")) as HTMLElement);
                let checkOK = true;
                
                if(name !== null && password !== null && passwordR !== null && QuestPass !== null){
                    if(name.value.length === 0 || password.value.length === 0 || passwordR.value.length === 0){
                        checkOK = false;
                        if(name.value.length === 0) error1.style.display = 'block';
                        if(password.value.length === 0)error2.style.display = 'block';
                        if(passwordR.value.length === 0)error3.style.display = 'block'; 
                    }                    
                    if(line.style.backgroundColor === "red" || line.style.backgroundColor === "write") {                        
                        error2.style.display = 'block';
                        checkOK = false;
                    }
                    if(password.value !== passwordR.value) {
                        checkOK = false;
                        error3.style.display = 'block';

                    }
                }
                if(checkOK) setStep(step+1);
            }
        }else{
            setStep(step-1);
        }

    }
    
    return(
        <>
            <div className='lineSeparate' />
            <div className='navegation'>
            {step === 1 ?
                <>
                    <div className='buttonDisabled'></div>
                        <div className='buttonNext' onClick={()=>{controlCheckData({next:true})}}>
                            {i18n.t('Form.navegationNext')} 
                            <i className='fas fa-angle-right'></i>
                        </div>
                </>

            :
            step !== steps ?                 
                <>
                    <div className='buttonBack' onClick={()=>{controlCheckData({next:false})}}>
                        <i className='fas fa-angle-left'></i>
                        {i18n.t('Form.navegationBack')} 
                    </div>
                    <div className='buttonNext' onClick={()=>{controlCheckData({next:true})}}>
                        {i18n.t('Form.navegationNext')} 
                        <i className='fas fa-angle-right'></i>
                    </div>
                </>

            :
                <>
                    <div className='buttonDisabled'></div>
                    <div className='buttonBack' onClick={()=>{window.location.reload();}}>
                        <b>{i18n.t('Form.navegationFinish')} </b>
                    </div>
                </>
            }
        </div>
        </>
        
    );
}
export default NavegationElement;