import React from 'react';
import 'react-i18next';
import i18n from '../../i18nTrans';

type DataCheck = {
    [key: string]: {
        check: boolean,
        textA: string,
    }
}

const FormElement = ({step, saveDate,setSaveDate}:{step:number, saveDate : DataCheck ,setSaveDate : Function}) => {
    
    function inputCapture(value:string) {       
        let color = testPasswordStrength(value);
        if(value.length === 0){styleStrengthLine("write","0%");}
        else{
            color === "green" ? styleStrengthLine(color,"100%") :
            color === "orange" ? styleStrengthLine(color,"66%") :
            styleStrengthLine(color,"33%");
        }       
    }

    function styleStrengthLine(color:string,value:string) {
        const line = ((document.getElementById("line")) as HTMLElement);
        const error = ((document.getElementById("formElement2Error")) as HTMLElement);
        if(line !== null){
            line.style.backgroundColor = color;
            line.style.width = value;
        }
        if(error !== null ){
            if(color === "red"){
                error.style.display = "block";
            }else{
                error.style.display = "none";
            }
        }
    }
    
    function testPasswordStrength(value:string) {        
		var strongRegex = new RegExp(
				"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[=/()%ยง!@#$%^&*])(?=.{8,})"
			),
		mediumRegex = new RegExp(
			"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
		);

		if (strongRegex.test(value)) {
			return "green";
		} else if (mediumRegex.test(value) && /[A-Z]/.test(value)) {
			return "orange";
		} else {
			return "red";
		}
	}

    function inputEqual(value:string) {
        const error = ((document.getElementById("formElement3Error")) as HTMLElement);
        const fornImput = ((document.getElementById("password")) as HTMLFormElement);

        if(error !== null && fornImput.value !== value){
            error.style.display = "block";
        }else{
            error.style.display = "none";
        }
    }

    function saveData(value:string,elementForm:string) {
        let checkTEMP = {
            ...saveDate,
            [step.toString()+elementForm]:{check: false,textA:value}}
        setSaveDate(checkTEMP);
    }


    return(
        <form className='form'>
            <div className='formElement'>
                <label className='formElementLabel'
                htmlFor="name"> {i18n.t('Form.question1')}</label>
                <input 
                    className='formElementInput' 
                    placeholder={i18n.t('Form.placeholderQ1')} 
                    id={"name"} 
                    type={"text"}
                    value={saveDate["2A"]?.textA}
                    onChange={(e)=>{
                        const error1 = ((document.getElementById("formElement1Error")) as HTMLFormElement);
                        error1.style.display = 'none';
                        saveData(e.currentTarget.value,"A");
                    }}
                    /> 
                <p className='formElement1Error' id={'formElement1Error'}> {i18n.t('Form.errorRequired')}</p>
            </div>
            <div className='formTwoElements'>
                <div className='formElement'>
                    <label className='formElementLabel' htmlFor="password"> {i18n.t('Form.question2')}</label>
                    <div className='password-wrapper'>
                        <input 
                            className='formElementInput' 
                            type={"password"}
                            maxLength={24}
                            placeholder={i18n.t('Form.placeholderQ2')}
                            value={saveDate["2B"]?.textA}
                            onChange={(e)=>{
                                inputCapture(e.currentTarget.value)
                                saveData(e.currentTarget.value,"B");
                            }}
                            autoComplete={""}
                            id={"password"} />  
                        <div className="strength-lines">
                            <div className="line" id="line"></div>
                        </div>
                    </div>
                    <p className='formElement2Error' id='   '>{i18n.t('Form.errorNotOK')}</p>            
                </div>
                <div className='formElement'>
                    <label className='formElementLabel' htmlFor="passwordR"> {i18n.t('Form.question3')}</label>
                    <input 
                        className='formElementInput' 
                        type={"password"} 
                        maxLength={24}
                        placeholder={i18n.t('Form.placeholderQ3')} 
                        value={saveDate["2C"]?.textA}
                        onChange={(e)=>{
                            inputEqual(e.currentTarget.value)
                            saveData(e.currentTarget.value,"C");
                            }
                        }
                        autoComplete={"new-password"}
                        id={"passwordR"} />
                    <p className='formElement3Error' id='formElement3Error'>{i18n.t('Form.errorNotEqual')}</p>            
                </div>
            </div>
            <p className='formElementInfo'>{i18n.t('Form.infoquestion4')}</p>
            <div className='formElement'>
                <label className='formElementLabel' htmlFor="QuestPass"> {i18n.t('Form.question4')}</label>
                <input 
                    className='formElementInput'
                    placeholder={i18n.t('Form.placeholderQ4')}
                    id={"QuestPass"}
                    maxLength={60}
                    value={saveDate["2D"]?.textA}
                    onChange={(e)=>saveData(e.currentTarget.value,"D")}
                    type={"text"}/>
            </div>

        </form>

    );
}
export default FormElement;