import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex text-white p-4 text-lg font-serif'>
        <img style={{height:'30px',width:'30px'}} src="https://cdn-icons-png.flaticon.com/512/4052/4052984.png"/>
        <div className='ml-1'>Weather app</div>
    </div>
  )
}

export default Navbar