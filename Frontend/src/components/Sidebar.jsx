import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import OutputIcon from '@mui/icons-material/Output'; // For outgoing
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import manageAccountsIcon from '@mui/icons-material/ManageAccounts'; // For system users
import CircleIcon from '@mui/icons-material/Circle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
        { name: 'Category', icon: <CategoryIcon />, path: '/category' },
        { name: 'Product', icon: <Inventory2Icon />, path: '/product' },
        { name: 'Customer', icon: <PeopleIcon />, path: '/customer' },
        { name: 'Supplier', icon: <LocalShippingIcon />, path: '/supplier' },
        { name: 'Outgoing Products', icon: <OutputIcon />, path: '/outgoing' },
        { name: 'Purchase Products', icon: <ShoppingCartIcon />, path: '/purchase' },
        { name: 'System Users', icon: <manageAccountsIcon />, path: '/system-users' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-gray-800 text-white h-screen w-64 flex-shrink-0 flex flex-col transition-all duration-300">
            {/* User Info Section */}
            {/* User Info Section */}
            <Link to="/profile" className="p-4 border-b border-gray-700 flex items-center space-x-3 hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for user image if pertinent, using icon for now to match style */}
                    <AccountCircleIcon style={{ fontSize: 40, color: '#ccc' }} />
                </div>
                <div>
                    <div className="font-semibold text-sm">Admin</div>
                    <div className="text-xs text-green-400 flex items-center">
                        <CircleIcon style={{ fontSize: 10, marginRight: 4 }} /> Online
                    </div>
                </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${isActive(item.path)
                                    ? 'bg-black text-white border-l-4 border-green-500' // Active state style from image
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                <span className="mr-3 text-gray-400 group-hover:text-white">
                                    {/* Clone element to pass styling if needed, or just use as is */}
                                    {React.cloneElement(item.icon, { fontSize: "small" })}
                                </span>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
