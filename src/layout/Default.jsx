import classNames from 'classnames'
import React from 'react'
import Navbar from '../components/common/navbar/Navbar'

const Layout = ({children,pageHeading}) => {
  return (
    <div className={classNames("w-full h-96 mt-5")}>
        <Navbar/>
      
        <div className={classNames("p-4 sm:ml-64")}>
        <div>
          <h4 className={classNames("text-2xl font-bold dark:text-white p-2 mt-5")}>{pageHeading}</h4>
        </div>
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-3">
            {children}</div>
        </div>


    </div>
  )
}

export default Layout