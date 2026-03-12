import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import SearchIcon from '@mui/icons-material/Search';

const ProductTable = () => {
    const products = [
        { id: 1, name: 'Product One', price: 20, qty: 181, category: 'Category One' },
        { id: 2, name: 'Product Two', price: 50, qty: 121, category: 'Category Two' },
        { id: 3, name: 'Product Three', price: 13, qty: 65, category: 'Category Three' },
        { id: 4, name: 'Product Four', price: 30, qty: 65, category: 'Category Four' },
        { id: 5, name: 'Product Five', price: 39, qty: 88, category: 'Category Three' },
        { id: 6, name: 'Product Six', price: 66, qty: 166, category: 'Category Four' },
        { id: 7, name: 'Test Product', price: 56, qty: 79, category: 'Category Five' },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg">
                <h2 className="text-xl font-semibold text-gray-700">List of Products</h2>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center text-sm font-medium transition-colors">
                    <AddBoxIcon style={{ fontSize: 18, marginRight: 6 }} /> Add Products
                </button>
            </div>

            {/* Controls */}
            <div className="p-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
                <div className="mb-2 sm:mb-0 flex items-center">
                    Show
                    <select className="mx-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-green-500">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                    </select>
                    entries
                </div>
                <div className="flex items-center">
                    Search:
                    <input
                        type="text"
                        className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-green-500"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-y border-gray-200 text-gray-700 text-sm font-semibold">
                            <th className="p-4 cursor-pointer hover:bg-gray-200">ID <UnfoldMoreIcon style={{ fontSize: 14, color: '#999' }} /></th>
                            <th className="p-4 cursor-pointer hover:bg-gray-200">Name <UnfoldMoreIcon style={{ fontSize: 14, color: '#999' }} /></th>
                            <th className="p-4 cursor-pointer hover:bg-gray-200">Price <UnfoldMoreIcon style={{ fontSize: 14, color: '#999' }} /></th>
                            <th className="p-4 cursor-pointer hover:bg-gray-200">Qty. <UnfoldMoreIcon style={{ fontSize: 14, color: '#999' }} /></th>
                            <th className="p-4 cursor-pointer hover:bg-gray-200">Image <UnfoldMoreIcon style={{ fontSize: 14, color: '#999' }} /></th>
                            <th className="p-4 cursor-pointer hover:bg-gray-200">Category <UnfoldMoreIcon style={{ fontSize: 14, color: '#999' }} /></th>
                            <th className="p-4 cursor-pointer hover:bg-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                        {products.map((product, index) => (
                            <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4">{product.id}</td>
                                <td className="p-4 font-medium text-gray-800">{product.name}</td>
                                <td className="p-4">{product.price}</td>
                                <td className="p-4">{product.qty}</td>
                                <td className="p-4">
                                    <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                                        {/* Placeholder for image */}
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </div>
                                </td>
                                <td className="p-4">{product.category}</td>
                                <td className="p-4">
                                    <div className="flex space-x-2">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors">
                                            <EditIcon style={{ fontSize: 14, marginRight: 4 }} /> Edit
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors">
                                            <DeleteIcon style={{ fontSize: 14, marginRight: 4 }} /> Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="p-4 flex justify-between items-center text-sm text-gray-600">
                <div>Showing 1 to {products.length} of {products.length} entries</div>
                <div className="flex space-x-1">
                    <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 bg-blue-600 text-white border border-blue-600 rounded">1</button>
                    <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50" disabled>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ProductTable;
