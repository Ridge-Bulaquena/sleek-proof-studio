import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';
import OrderTableHeader from './OrderTableHeader';
import OrderTableRow from './OrderTableRow';
import EmptyState from './EmptyState';

export type Order = {
  id: string;
  customerName: string;
  artist: string;
  product: string;
  proofStatus: 'awaiting' | 'sent' | 'approved' | 'rejected';
  fulfillmentStatus: 'pending' | 'fulfilled' | 'cancelled';
  createdAt: string;
};

const fetchOrders = async () => {
  const { data, error } = await supabase.from('orders').select('*');
  if (error) throw error;
  return data as Order[];
};

const OrderTable: React.FC = () => {
  const { data: orders = [], isLoading, isError } = useQuery(['orders'], fetchOrders);
  const [filter, setFilter] = useState<'all' | 'awaiting' | 'sent' | 'approved' | 'rejected'>('all');
  const [search, setSearch] = useState('');

  const filteredOrders = useMemo(() => {
    let filtered = orders;
    if (filter !== 'all') {
      filtered = filtered.filter(o => o.proofStatus === filter);
    }
    if (search.trim()) {
      filtered = filtered.filter(o =>
        o.customerName.toLowerCase().includes(search.toLowerCase()) ||
        o.id.toLowerCase().includes(search.toLowerCase()) ||
        o.product.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filtered;
  }, [orders, filter, search]);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 md:p-8 w-full overflow-x-auto">
      <OrderTableHeader
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      <div className="mt-4">
        {isLoading ? (
          <div className="text-center py-12 text-gray-400">Loading orders…</div>
        ) : isError ? (
          <div className="text-center py-12 text-red-500">Failed to load orders.</div>
        ) : filteredOrders.length === 0 ? (
          <EmptyState />
        ) : (
          <table className="min-w-full text-sm md:text-base">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2 px-2">Order ID</th>
                <th className="py-2 px-2">Customer</th>
                <th className="py-2 px-2">Artist</th>
                <th className="py-2 px-2">Product</th>
                <th className="py-2 px-2">Proof Status</th>
                <th className="py-2 px-2">Fulfillment</th>
                <th className="py-2 px-2">Created</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <OrderTableRow key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrderTable; 