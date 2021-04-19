import React from 'react';
import { useEffect } from 'react';

const Radio = () => {
   
    
    useEffect(() => {
        
        const radio = document.querySelector<HTMLElement>(".ng-app-embedded")        

        if(radio) {
         
            radio.style.display = "block";
            radio.style.position = "absolute";
            radio.style.top = "0";

        }    
       
      }, []);
    return (
        <div className="radio">
            <form action="">
                <div>
        <label htmlFor="first">FOX</label>
                <input id="first" type="radio" />
                </div>
                <div>
        <label htmlFor="second">BBC</label>
                <input id="second" type="radio" />
                </div>
            </form>
        </div>
    );
};

export default Radio;




   