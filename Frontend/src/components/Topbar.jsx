import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Topbar = ({ toggleSidebar }) => {
    return (
        <div className="bg-green-600 text-white h-16 flex items-center justify-between px-4 shadow-md z-10">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-green-700 focus:outline-none mr-4 lg:hidden">
                    <MenuIcon />
                </button>
                <h1 className="text-xl font-bold tracking-wide">Inventory System</h1>
            </div>

            <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center cursor-pointer hover:bg-green-700 p-2 rounded-md transition-colors text-white">
                    <AccountCircle className="mr-2" />
                    <span className="text-sm font-medium">Admin</span>
                </Link>
            </div>
        </div>
    );
};

export default Topbar;
