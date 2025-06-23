
import React from 'react';
import { Download, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ReportsView = () => {
  const monthlyData = [
    { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
    { month: 'Feb', revenue: 52000, expenses: 28000, profit: 24000 },
    { month: 'Mar', revenue: 48000, expenses: 35000, profit: 13000 },
    { month: 'Apr', revenue: 61000, expenses: 42000, profit: 19000 },
    { month: 'May', revenue: 55000, expenses: 38000, profit: 17000 },
    { month: 'Jun', revenue: 67000, expenses: 41000, profit: 26000 },
  ];

  const expenseCategories = [
    { name: 'Office Expenses', value: 1200, color: '#3b82f6' },
    { name: 'Technology', value: 800, color: '#8b5cf6' },
    { name: 'Marketing', value: 1500, color: '#10b981' },
    { name: 'Transportation', value: 400, color: '#f59e0b' },
    { name: 'Meals & Entertainment', value: 600, color: '#ef4444' },
  ];

  const quarterlyComparison = [
    { quarter: 'Q1 2023', revenue: 145000, expenses: 95000 },
    { quarter: 'Q2 2023', revenue: 164000, expenses: 108000 },
    { quarter: 'Q3 2023', revenue: 158000, expenses: 112000 },
    { quarter: 'Q4 2023', revenue: 178000, expenses: 125000 },
    { quarter: 'Q1 2024', revenue: 189000, expenses: 132000 },
    { quarter: 'Q2 2024', revenue: 183000, expenses: 121000 },
  ];

  const currentProfit = monthlyData[monthlyData.length - 1].profit;
  const previousProfit = monthlyData[monthlyData.length - 2].profit;
  const profitChange = ((currentProfit - previousProfit) / previousProfit * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Financial Reports</h2>
          <p className="text-gray-600">Analyze your business performance</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Reports
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Profit</p>
              <p className="text-2xl font-bold text-gray-900">${currentProfit.toLocaleString()}</p>
              <div className="flex items-center mt-2">
                {Number(profitChange) >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                )}
                <span className={`text-sm ${Number(profitChange) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {profitChange}%
                </span>
              </div>
            </div>
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">YTD Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$328K</p>
              <p className="text-sm text-green-600 mt-2">+15.3% vs last year</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">YTD Expenses</p>
              <p className="text-2xl font-bold text-gray-900">$216K</p>
              <p className="text-sm text-yellow-600 mt-2">+8.7% vs last year</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Profit Margin</p>
              <p className="text-2xl font-bold text-gray-900">34.2%</p>
              <p className="text-sm text-green-600 mt-2">+2.1% vs last year</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Profit & Loss</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Revenue" />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
              <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} name="Profit" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseCategories}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {expenseCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quarterly Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={quarterlyComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
              <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Financial Ratios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">2.4x</p>
            <p className="text-sm text-gray-600">Current Ratio</p>
            <p className="text-xs text-gray-500 mt-1">Current Assets / Current Liabilities</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">18.5%</p>
            <p className="text-sm text-gray-600">ROI</p>
            <p className="text-xs text-gray-500 mt-1">Return on Investment</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">65.8%</p>
            <p className="text-sm text-gray-600">Expense Ratio</p>
            <p className="text-xs text-gray-500 mt-1">Total Expenses / Total Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsView;
