import React from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OutputIcon from '@mui/icons-material/Output'; // For outgoing
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StatCard = ({ title, value, icon, color, bgColor }) => {
    return (
        <div className={`relative overflow-hidden rounded-md shadow-md text-white h-32 flex flex-col justify-between ${bgColor}`}>
            <div className="p-4 flex justify-between items-start z-10 relative">
                <div>
                    <h3 className="text-3xl font-bold">{value}</h3>
                    <p className="text-sm font-medium uppercase tracking-wide opacity-90">{title}</p>
                </div>
                <div className="opacity-30 transform scale-150 origin-top-right">
                    {React.cloneElement(icon, { style: { fontSize: 60 } })}
                </div>
            </div>

            <div className="bg-black bg-opacity-20 py-1 px-4 text-center text-xs flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-colors">
                More info <ArrowForwardIcon style={{ fontSize: 14, marginLeft: 4 }} />
            </div>
        </div>
    );
};

const DashboardStats = () => {
    // Mock data based on image
    const stats = [
        { title: 'System Users', value: 1, icon: <ManageAccountsIcon />, bgColor: 'bg-cyan-500' },
        { title: 'Category', value: 5, icon: <CategoryIcon />, bgColor: 'bg-green-500' },
        { title: 'Product', value: 7, icon: <Inventory2Icon />, bgColor: 'bg-yellow-500' },
        { title: 'Customer', value: 6, icon: <PeopleIcon />, bgColor: 'bg-red-500' },
        { title: 'Supplier', value: 3, icon: <LocalShippingIcon />, bgColor: 'bg-indigo-500' },
        { title: 'Total Purchase', value: 4, icon: <ShoppingCartIcon />, bgColor: 'bg-pink-600' },
        { title: 'Total Outgoing', value: 3, icon: <OutputIcon />, bgColor: 'bg-blue-600' }, // Correct icon for outgoing
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                    bgColor={stat.bgColor}
                />
            ))}
        </div>
    );
};

export default DashboardStats;
