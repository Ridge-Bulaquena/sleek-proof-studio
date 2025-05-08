
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type OrderStatus = 'approved' | 'pending' | 'rejected' | 'draft';

interface OrderCardProps {
  id: string;
  customerName: string;
  orderDate: string;
  status: OrderStatus;
  imageUrl: string;
  dueDate?: string;
  onClick?: () => void;
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

export const OrderCard: React.FC<OrderCardProps> = ({
  id,
  customerName,
  orderDate,
  status,
  imageUrl,
  dueDate,
  onClick,
}) => {
  return (
    <div 
      className="glass-card overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img
          src={imageUrl || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'}
          alt={`Order ${id}`}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute top-3 right-3">
          <span className={cn(
            "text-xs font-medium py-1 px-2 rounded-full",
            statusConfig[status].color
          )}>
            {statusConfig[status].label}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-heading font-semibold">{customerName}</h3>
            <p className="text-sm text-muted-foreground">Order #{id}</p>
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground mt-4">
          <span>Created: {orderDate}</span>
          {dueDate && <span>Due: {dueDate}</span>}
        </div>
      </div>
      
      <div className="border-t p-3 flex gap-2">
        <Button size="sm" variant="ghost" className="flex-1">Preview</Button>
        <Button size="sm" className="flex-1">Review</Button>
      </div>
    </div>
  );
};
