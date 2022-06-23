import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import PlayerVideo from '../PlayerVideo'
import SideBar from '../Sidebar'


const Event = () => {
  const {slug} = useParams<{slug: string}>();
  console.log(slug);
  
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex flex-1'>
          {slug ? <PlayerVideo lessonSlug={slug}/> : <div className='flex-1'/>}
          <SideBar />
        </main>
    </div>
  )
}

export default Event