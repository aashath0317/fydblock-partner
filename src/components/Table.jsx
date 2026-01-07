import React from 'react';

const Table = () => {
    const data = [
        { id: 1, name: 'Alice Smith', date: '2023-10-24', status: 'Active', value: '$120.00' },
        { id: 2, name: 'Bob Jones', date: '2023-10-25', status: 'Pending', value: '$0.00' },
        { id: 3, name: 'Charlie Brown', date: '2023-10-26', status: 'Active', value: '$340.50' },
        { id: 4, name: 'David Lee', date: '2023-10-27', status: 'Inactive', value: '$0.00' },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
                <thead className="text-xs uppercase bg-white/5 text-gray-300">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">{item.name}</td>
                            <td className="px-6 py-4">{item.date}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded text-xs ${item.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                                    item.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                                        'bg-red-500/20 text-red-400'
                                    }`}>
                                    {item.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-white">{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
