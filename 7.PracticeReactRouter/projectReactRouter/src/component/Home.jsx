

import React, { useContext } from 'react';
import { MyContext } from './MyContext';
function Home() {
    const value = useContext(MyContext);
    console.log(value)
  return (
    <div className='cl1 '>
      {value.data}
        </div>
  )
}

export default Home
