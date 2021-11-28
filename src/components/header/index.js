import React from "react";
import "./index.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="companyName">Life Electronics</div>
      <div>
        <ul className="naviBar">
            <li className='naviLink'>Ev sahnesi</li>
            <li className='naviLink'>Xidmətlərimiz</li>
            <li className='naviLink'>Proyektlərimiz</li>
            <li className='naviLink'>Partnyorlar</li>
            <li className='naviLink'>Əlaqə</li>
        </ul>
      </div>
    </div>
  );
};
