
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { OrderCard } from '@/components/dashboard/OrderCard';
import { OrdersTable } from '@/components/dashboard/OrdersTable';
import { Button } from '@/components/ui/button';
import { 
  CheckSquare, 
  Clock, 
  AlertTriangle,
  ChevronRight,
  Inbox
} from 'lucide-react';

const mockOrders = [
  {
    id: '1001',
    customerName: 'Alex Johnson',
    orderDate: '2025-05-01',
    status: 'pending' as const,
    dueDate: '2025-05-10',
  },
  {
    id: '1002',
    customerName: 'Sarah Williams',
    orderDate: '2025-05-02',
    status: 'approved' as const,
    dueDate: '2025-05-08',
  },
  {
    id: '1003',
    customerName: 'Michael Brown',
    orderDate: '2025-05-03',
    status: 'rejected' as const,
    dueDate: '2025-05-12',
  },
  {
    id: '1004',
    customerName: 'Emily Davis',
    orderDate: '2025-05-04',
    status: 'draft' as const,
  },
  {
    id: '1005',
    customerName: 'James Wilson',
    orderDate: '2025-05-05',
    status: 'pending' as const,
    dueDate: '2025-05-15',
  }
];

const recentProofs = mockOrders.slice(0, 3);

const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleOrderClick = (orderId: string) => {
    navigate(`/dashboard/proofs/${orderId}`);
  };
  
  return (
    <div>
      <DashboardHeader title="Dashboard" />
      
      <div className="p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard 
            title="Approved Proofs" 
            value="32"
            change={{ value: 12, isPositive: true }}
            icon={<CheckSquare size={24} />}
          />
          <StatsCard 
            title="Pending Approvals" 
            value="8"
            change={{ value: 3, isPositive: false }}
            icon={<Clock size={24} />}
          />
          <StatsCard 
            title="Due Today" 
            value="5"
            icon={<AlertTriangle size={24} />}
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-heading font-semibold">Recent Proofs</h2>
            <Button variant="ghost" size="sm" className="gap-1" asChild>
              <a href="/dashboard/proofs">
                View All <ChevronRight size={16} />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProofs.map((order) => (
              <OrderCard 
                key={order.id}
                id={order.id}
                customerName={order.customerName}
                orderDate={order.orderDate}
                status={order.status}
                imageUrl=""
                dueDate={order.dueDate}
                onClick={() => handleOrderClick(order.id)}
              />
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-heading font-semibold">All Orders</h2>
          </div>
          
          <OrdersTable 
            orders={mockOrders} 
            onOrderClick={handleOrderClick} 
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
