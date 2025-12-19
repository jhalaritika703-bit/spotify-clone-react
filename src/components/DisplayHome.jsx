import React, { useContext } from 'react'
import { NavBar } from './NavBar'
import { albumsData, songsData } from '../assets/assets'
import { AlbumItem } from './AlbumItem'
import { PlayerContext } from '../Context/PlayerContext'

export const DisplayHome = () => {

  const { playWithId } = useContext(PlayerContext)

  return (
    <>
      <NavBar />

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest hit</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item, index) => (
            <div key={index} onClick={(e) =>{
           e.stopPropagation();
             playWithId(index);
             }}>
              <AlbumItem
              key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
                disableNavigate
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
