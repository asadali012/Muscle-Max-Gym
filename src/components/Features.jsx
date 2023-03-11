import React from 'react';
import Featurebox from './Featurebox';
import image1 from '../images/image1.svg';
import image2 from '../images/image2.svg';
import image3 from '../images/image3.svg';
import image4 from '../images/image4.svg';


function Features() {
    return (
        <div id='Features'>
            <h1>FEATURES</h1>
            <div className="a-container">
                <Featurebox image={image1} title='Weight Lifting' quote="The clock is ticking. Are you becoming the person you want to be?" />
                <Featurebox image={image2} title='Routine Excercise' quote="The question isn’t who is going to let me; it’s who is going to stop me." />
                <Featurebox image={image3} title='Power Lifting' quote="Everybody wants to be a bodybuilder, but don’t nobody wanna lift no heavy ass weight." />
                <Featurebox image={image4} title='Cardio Excercise' quote="Strength does not come from physical capacity. " />


            </div>
        </div>
    )
}

export default Features