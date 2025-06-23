
import React, { useState } from 'react';
import { Plus, Search, Filter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ExpenseList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const expenses = [
    { 
      id: 'EXP-001', 
      description: 'Office Supplies', 
      category: 'Office Expenses',
      amount: 245, 
      date: '2024-06-22',
      vendor: 'Office Depot'
    },
    { 
      id: 'EXP-002', 
      description: 'Software License', 
      category: 'Technology',
      amount: 89, 
      date: '2024-06-20',
      vendor: 'Adobe Inc'
    },
    { 
      id: 'EXP-003', 
      description: 'Business Lunch', 
      category: 'Meals & Entertainment',
      amount: 156, 
      date: '2024-06-18',
      vendor: 'Restaurant ABC'
    },
    { 
      id: 'EXP-004', 
      description: 'Uber Ride', 
      category: 'Transportation',
      amount: 32, 
      date: '2024-06-17',
      vendor: 'Uber Technologies'
    },
    { 
      id: 'EXP-005', 
      description: 'Marketing Materials', 
      category: 'Marketing',
      amount: 420, 
      date: '2024-06-15',
      vendor: 'Print Shop Pro'
    },
  ];

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.vendor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Office Expenses': 'bg-blue-100 text-blue-800',
      'Technology': 'bg-purple-100 text-purple-800',
      'Meals & Entertainment': 'bg-green-100 text-green-800',
      'Transportation': 'bg-yellow-100 text-yellow-800',
      'Marketing': 'bg-pink-100 text-pink-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Expenses</h2>
          <p className="text-gray-600">Track your business expenses</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Expense
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900">Total Expenses</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">${totalExpenses.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">5</p>
          <p className="text-sm text-gray-500 mt-1">Active categories</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900">Average</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">${Math.round(totalExpenses / expenses.length)}</p>
          <p className="text-sm text-gray-500 mt-1">Per expense</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredExpenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {expense.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(expense.category)}`}>
                      {expense.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {expense.vendor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    ${expense.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {expense.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
