import React from "react";
import './Layout.css';
import MainNavigation from './MainNavigation';


interface Props {
  children: React.ReactNode
}

  const Layout: React.FC<Props> = (props:Props) => {
    return (
      <div className="body">
        <MainNavigation/>
        {props.children}
      </div>
    );
  };
  
  export default Layout;