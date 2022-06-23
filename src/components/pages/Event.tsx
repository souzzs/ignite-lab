import React from 'react'
import Header from '../Header'
import PlayerVideo from '../PlayerVideo'
import SideBar from '../Sidebar'

const Event = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex flex-1'>
          <PlayerVideo />
          <SideBar />
        </main>
    </div>
  )
}

export default Event