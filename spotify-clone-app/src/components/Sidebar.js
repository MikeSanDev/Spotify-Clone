import React from 'react'
import "../styles/Sidebar.css"
import SidebarOption from './SidebarOption'
// Imported icons from Material UI
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
    // destructured and pulls playlists from data layer
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className='sidebar'>
            <img className='sidebar__logo'
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="sidebar_logo" />

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar