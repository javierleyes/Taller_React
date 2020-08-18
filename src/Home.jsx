import React from 'react'
import banner from './Wallpaper.jpg'
import { Image } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <Image fluid src={banner}></Image>
        </>
    )
}

export default Home
