import React from 'react'
import Header from './Header'
import SongRow from './SongRow'
import "../styles/Body.css"
import { useDataLayerValue } from '../DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// spotify variable we made in app js
function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className='body'>
            {/* Displays header */}
            <Header spotify={spotify} />

            <div className='body__info'>
                {/* pulls image of who's DW that is logged in */}
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                    <p>Spotify - 298 likes - 30 songs, 1 hr 48 min</p>
                </div>
            </div>


            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilledIcon className='body__shuffle' />
                    <FavoriteBorderIcon className="body__fave" fontSize="large" />
                    <MoreHorizIcon className="body__fave" />
                </div>
                {discover_weekly?.tracks.items.map((item =>
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body