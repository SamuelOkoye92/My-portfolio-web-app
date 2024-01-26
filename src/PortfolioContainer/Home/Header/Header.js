import { useState } from 'react';
import React from 'react';
import {TOTAL_SCREENS, GET_SCREEN_INDEX} from "../../../utilities/commonUtils"
import ScrollService from '../../../utilities/ScrollService';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Header.css'

export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) => {
         if(!currentScreen || !currentScreen.screenInView)
         return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
        if(screenIndex < 0)
        return
    }
    let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

    const getHeaderOptions = () => {
        return(
            TOTAL_SCREENS.map((screen, i) => (
                <div key={screen.screen_name} className={getHeaderOptionClass(i)}
                onClick={() => swtchScreen(i, screen)}>
                   <span>{screen.screen_name}</span>
                </div>
            ))
        )
    }

    const getHeaderOptionsClass = (index) => {
        let classes = "header-option";
        if(index < TOTAL_SCREENS.length -1)
        classes += "header-option-seperator";

        if(selectedScreen == index)
        classes += "selected-header-option";
        return;
    }

   const switchScreen =  (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name)
    if(!screenComponent)
    return;

    screenComponent.scrollIntoView({behavior: 'smooth'});
    setSelectedScreen(index);
    setShowHeaderOptions(false);
   };

    return (
        <div className='header-option' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
            
        </div>
    );
};
