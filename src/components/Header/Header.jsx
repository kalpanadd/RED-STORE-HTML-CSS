import React from 'react'

import Avatar from '@material-ui/core/Avatar';
import HistoryIcon from '@material-ui/icons/History';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';

import './Header.css';
function Header() {
    return (
        <div>
            <div className='header-container'>
                <div className='header-left'>
                    <Avatar className='header-avtar' alt='image' />
                    <HistoryIcon className='MUI-icon' />

                </div>
                <div className='header-center'>
                    <SearchIcon />
                    <input
                        type='text'
                        placeholder='Search here' />
                </div>
                <div className='header-right'>
                    <HelpOutlineIcon />
                    <CloseIcon />

                </div>
            </div>

        </div>
    )
}

export default Header
