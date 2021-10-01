import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Parent__Content from './Parent__Content';



const Parent__Profile = () => {
   return (
      <>
         <Navbar />
         <div className="main-root">
            <Sidebar />
            <Parent__Content />
         </div>
      </>
   );
};

export default Parent__Profile;