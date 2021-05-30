import React from 'react';
import './Sidebar.css';

import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-Header'>
                <div className='sidebar-info'>
                    <h2>ProductEngineering</h2>
                </div>
                <div className='sidebar-header-icon'>
                    <CreateRoundedIcon className='MUI-icon' />
                </div>

            </div>


        </div>


    )
}

export default Sidebar
