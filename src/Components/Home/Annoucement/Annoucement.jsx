import React, { useEffect, useState } from 'react';
import './Annoucement.css';
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './list-giftcard.jpg';
import photo6 from './Gift Cards.jpg';

import lol1 from './gift_card_lol1-removebg-preview.png';
import lol from './gift_card_lol-removebg-preview.png';
import wow from './5242f2898e6c1888f2d228b8ce631f98-removebg-preview.png';
import roblox from './roblox_gift_card2-removebg-preview.png';
import steam from './steam_gift_card1-removebg-preview.png';
import ps from './ps_gift_card-removebg-preview.png';
import xbox from './microsoft-xbox-bundle-removebg-preview.png';
import phone from './Google-Card-US-removebg-preview.png';

const Annoucement = () => {
    const array_photos = [photo6, photo5, photo1, photo2, photo3, photo4];
    const array_games = [lol, lol1, wow, roblox];
    const array_consoles = [ps, steam, xbox, phone];
    const [index, setIndex] = useState(0);
    const [ind, setInd] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % array_photos.length);
        }, 15000);
        
        return () => clearInterval(intervalId);
    }, [array_photos.length]);

    useEffect(() => {
        const swapImages = setInterval(() => {
            setInd((prevInd) => (prevInd + 1) % array_games.length);
        }, 10000);
        
        return () => clearInterval(swapImages);
    }, [array_games.length]);

    return (
        <>
            <div className='Annoucement-1-area'>
                <img src={array_photos[index]} alt="deal" className='Annoucement-image-style' />
            </div>

            <div className='Annoucement-2-area'>
                <img src={array_consoles[ind]} alt="console deal" className='consoles-games-style1' />
                <img src={array_games[ind]} alt="game deal" className='consoles-games-style2' />
            </div>
        </>
    );
}

export default Annoucement;
