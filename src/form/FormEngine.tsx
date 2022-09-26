import React,{ useState} from 'react';
import IndexForm from './IndexForm';
import GenerateForm from './GenerateForm';
import Navegation from './Navegation';

const Form = () => {

    interface Question {
        elements: Array<String>;
        type: string;
    }
    type DataCheck = {
        [key: string]: {
            check: boolean,
            textA: string,
    }
}   

    const [step, setStep] = useState(1);
    const [questions] = useState<Question[]>([
        {
            elements:[
                "TITLE",
                "IMG_LOGO",
                "INIT_FORM_TEXT",
                "INIT_SURVEY",
            ],
            type:"INITIAL"
        },
        {
            elements:[
                "TITLE",
                "SURVEY"
            ],
            type:"FORM"
        },
        {
            elements: [
                "FINISH_SURVEY"
            ],
            type:"FINISH"
        },
    ]);


    const [saveDate, setSaveDate] = useState<DataCheck>({});

    return(
        <>
            <IndexForm step = {step} steps = {questions.length}/>
            <div className = 'formElements'>
                <div className='mainform'>
                    <GenerateForm step={step} question = {questions[step-1]} saveDate={saveDate} setSaveDate={setSaveDate} />
                    <Navegation 
                        saveDate={saveDate}
                        step={step} 
                        setStep={setStep} 
                        steps={questions.length}/>
                </div>
                
            </div>
            
        </>
    );

}
export default Form;

