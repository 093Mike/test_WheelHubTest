import React from 'react';
import '../App.scss';
import Success from '../assets/img/success.png';

const IndexForm = ({step,steps} : {step: number, steps: number}) => {

    function showSteps(step:number) {
        let show = [];
        for (let i = 0; i < steps; i++) {
            step === i+1 ?
            show.push(<div className='itemActualStep'>{i+1}</div>)
            :
            step <= i+1 ?
            show.push(<div className='itemStep'>{i+1}</div>)
            :
            show.push(<div className='itemStepComplete'><img className='itemStepImg' alt='Complete' src={Success} /></div>);
            
            if(i+1 !== steps){
                step <= i+1 ?
                show.push(<div className='progress'></div>)
                :
                show.push(<div className='progressComplete'></div>);
            }
            
        }
        return show;
    }

    return(
        <div className='formHeader'>
            <div className='appHeader'>
                {showSteps(step)}
            </div>
        </div>
    );

}
export default IndexForm;

