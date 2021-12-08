import React from "react";
import { NewBackround } from "../background";
import './index.css';

export const About = () => {
    return(
        <div className='text'>
            <NewBackround/>
            <p className='firstText'>Şirkət haqqında</p>
            <span className='spanText'>“Life Electronics” Şirkəti 2016-ci ildə  təsis edilmişdi. 
                Şirkət müasir biznes effektivliyinin artırılması və potensialın aşkar edilməsi məqsədi üçün informasiya texnologiyaları sahəsində kompüter avadanlıqları və proqram təminatı üzrə təchizatçıdır.
                Şirkət, aparıcı İT istehsalçıları tərəfindən geniş çeşiddə kompüter komponentlərini, İT və proqramlaşdırma xidmətlərini, həmçinin proqram təminatının lisenziyalaşdırılmasını təmin edir.</span>
            </div>
    )
}