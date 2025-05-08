
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type OrderStatus = 'approved' | 'pending' | 'rejected' | 'draft';

interface Order {
  id: string;
  customerName: string;
  orderDate: string;
  status: OrderStatus;
  dueDate?: string;
}

interface OrdersTableProps {
  orders: Order[];
  onOrderClick: (orderId: string) => void;
}

const statusConfig = {
  approved: {
    label: 'Approved',
    color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  },
  pending: {
    label: 'Pending',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  },
  rejected: {
    label: 'Rejected',
    color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  },
  draft: {
    label: 'Draft',
    color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400',
  },
};

export const OrdersTable: React.FC<OrdersTableProps> = ({ orders, onOrderClick }) => {
  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4 font-medium text-muted-foreground">Order ID</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Customer</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Created</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Due Date</th>
              <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr 
                key={order.id} 
                className="border-b hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => onOrderClick(order.id)}
              >
                <td className="p-4 font-mono text-sm">#{order.id}</td>
                <td className="p-4 font-medium">{order.customerName}</td>
                <td className="p-4 text-muted-foreground text-sm">{order.orderDate}</td>
                <td className="p-4">
                  <span className={cn(
                    "text-xs font-medium py-1 px-2 rounded-full",
                    statusConfig[order.status].color
                  )}>
                    {statusConfig[order.status].label}
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">{order.dueDate || '—'}</td>
                <td className="p-4 text-right">
                  <Button 
                    size="sm"
                    variant="outline" 
                    className="rounded-xl border-fluorescent-blue/20 text-fluorescent-blue hover:bg-fluorescent-blue/10 hover:text-fluorescent-blue" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOrderClick(order.id);
                    }}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
