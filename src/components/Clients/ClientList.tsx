
import React, { useState } from 'react';
import { Plus, Search, Filter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ClientList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const clients = [
    { 
      id: 1,
      name: 'Acme Corporation', 
      email: 'contact@acme.com',
      phone: '+1 (555) 123-4567',
      address: '123 Business St, New York, NY',
      totalInvoiced: 12500,
      outstanding: 2500,
      status: 'Active'
    },
    { 
      id: 2,
      name: 'Tech Solutions Inc', 
      email: 'hello@techsolutions.com',
      phone: '+1 (555) 234-5678',
      address: '456 Tech Ave, San Francisco, CA',
      totalInvoiced: 8900,
      outstanding: 1800,
      status: 'Active'
    },
    { 
      id: 3,
      name: 'Global Industries', 
      email: 'info@global.com',
      phone: '+1 (555) 345-6789',
      address: '789 Corporate Blvd, Chicago, IL',
      totalInvoiced: 15600,
      outstanding: 3200,
      status: 'Active'
    },
    { 
      id: 4,
      name: 'StartUp Hub', 
      email: 'team@startuphub.com',
      phone: '+1 (555) 456-7890',
      address: '321 Innovation Dr, Austin, TX',
      totalInvoiced: 4200,
      outstanding: 950,
      status: 'Active'
    },
    { 
      id: 5,
      name: 'Enterprise Ltd', 
      email: 'contact@enterprise.com',
      phone: '+1 (555) 567-8901',
      address: '654 Enterprise Way, Seattle, WA',
      totalInvoiced: 22100,
      outstanding: 0,
      status: 'Active'
    },
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalOutstanding = clients.reduce((sum, client) => sum + client.outstanding, 0);
  const totalInvoiced = clients.reduce((sum, client) => sum + client.totalInvoiced, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Clients</h2>
          <p className="text-gray-600">Manage your customer relationships</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900">Total Clients</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{clients.length}</p>
          <p className="text-sm text-gray-500 mt-1">Active clients</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900">Total Invoiced</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">${totalInvoiced.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">All time</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900">Outstanding</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">${totalOutstanding.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">Pending payments</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
          {filteredClients.map((client) => (
            <div key={client.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  {client.status}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {client.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {client.phone}
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  {client.address}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Total Invoiced</p>
                    <p className="text-sm font-semibold text-gray-900">
                      ${client.totalInvoiced.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Outstanding</p>
                    <p className={`text-sm font-semibold ${
                      client.outstanding > 0 ? 'text-red-600' : 'text-green-600'
                    }`}>
                      ${client.outstanding.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientList;
