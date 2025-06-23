
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardOverview from '@/components/Dashboard/DashboardOverview';
import InvoiceList from '@/components/Invoices/InvoiceList';
import ExpenseList from '@/components/Expenses/ExpenseList';
import ClientList from '@/components/Clients/ClientList';
import ReportsView from '@/components/Reports/ReportsView';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'invoices':
        return <InvoiceList />;
      case 'expenses':
        return <ExpenseList />;
      case 'clients':
        return <ClientList />;
      case 'reports':
        return <ReportsView />;
      case 'settings':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
            <p className="text-gray-600 mt-2">Configure your account and preferences</p>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
