import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Student__Content from './Student__Content';



const Student__Profile = () => {
   return (
      <>
         <Navbar />
         <div className="main-root">
            <Sidebar />
            <Student__Content />
         </div>
      </>
   );
};

export default Student__Profile;