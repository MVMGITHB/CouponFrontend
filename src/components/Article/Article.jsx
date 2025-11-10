'use client'
import React, { useState } from 'react'
import { ArticleHome } from './ArticleHome';
import { usePathname } from 'next/navigation';
// import Popup from '../Home/Popup';
// import Popup1 from '../Home/Popup1';
// import Popup3 from '../Home/Pop3'

 const Article = ({data}) => {


console.log(data)
  

  const pathname = usePathname();
  return (
    <div>

       {/* {pathname === '/automobile/fastag-annual-pass' ? (
          <Popup1/>
        ) : (
           <Popup3 data={data}/>
        
        )} */}
        
         <ArticleHome data={data}/>
       
        
    </div>
  )
}


export default  Article;