import React from 'react'
import { BlogHome } from './BlogHome'
// import Popup from '../Home/Popup'
export const Blog = ({url}) => {
    return (
        <div>
            {/* <Popup/> */}
            <BlogHome url={url}/>
        </div>
    )
}
