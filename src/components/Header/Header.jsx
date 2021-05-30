import React from 'react'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
                    <AccountCircleIcon />
                    <HistoryIcon className='header-historyicon' />

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
