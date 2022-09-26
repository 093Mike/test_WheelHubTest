import React from 'react';
import Title from './Elements/Title';
import Img from './Elements/Img';
import TextInitForm from './Elements/TextInitForm';
import InitForm from './Elements/CheckBox';
import Survey from './Elements/Form';
import FinishSurvey from './Elements/FinishSurvey';

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

const GenerateForm = ({step, question, saveDate, setSaveDate} : {step:number, question : Question, saveDate : DataCheck, setSaveDate: Function}) => {

    function generateElements(question : Question) {
        let elements = [
            <></>
        ];
        question.elements.forEach(element => {            
            switch(element){
                case "TITLE":
                    elements.push(<Title />);
                break;
                case "IMG_LOGO":
                    elements.push(<Img />);
                break;
                case "INIT_FORM_TEXT":
                    elements.push(<TextInitForm />);
                break;
                case "INIT_SURVEY":
                    elements.push(<InitForm step={step} saveDate={saveDate} setSaveDate={setSaveDate} />);
                break;
                case "SURVEY":
                    elements.push(<Survey step={step} saveDate={saveDate} setSaveDate={setSaveDate}/>);
                break;
                case "FINISH_SURVEY":
                    elements.push(<FinishSurvey />);
                break;
            }
        });
        return elements;
    }


    return(
        <div>
            {generateElements(question)}
        </div>
    );

}
export default GenerateForm;