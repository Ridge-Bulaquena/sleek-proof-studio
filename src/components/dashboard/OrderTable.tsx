import React, { useState, useMemo } from 'react';

// Mock data since we don't have supabase
const mockOrders = [
  {
    id: '1001',
    customerName: 'Alex Johnson',
    artist: 'Michael Smith',
    product: 'Custom T-shirt',
    proofStatus: 'awaiting' as const,
    fulfillmentStatus: 'pending' as const,
    createdAt: '2025-05-01',
  },
  {
    id: '1002',
    customerName: 'Sarah Williams',
    artist: 'David Jones',
    product: 'Mug Design',
    proofStatus: 'sent' as const,
    fulfillmentStatus: 'pending' as const,
    createdAt: '2025-05-02',
  },
  {
    id: '1003',
    customerName: 'Michael Brown',
    artist: 'Emma Wilson',
    product: 'Poster Print',
    proofStatus: 'approved' as const,
    fulfillmentStatus: 'fulfilled' as const,
    createdAt: '2025-05-03',
  }
];

export type Order = {
  id: string;
  customerName: string;
  artist: string;
  product: string;
  proofStatus: 'awaiting' | 'sent' | 'approved' | 'rejected';
  fulfillmentStatus: 'pending' | 'fulfilled' | 'cancelled';
  createdAt: string;
};

const OrderTable: React.FC = () => {
  const [orders] = useState<Order[]>(mockOrders);
  const [filter, setFilter] = useState<'all' | 'awaiting' | 'sent' | 'approved' | 'rejected'>('all');
  const [search, setSearch] = useState('');
  const isLoading = false;
  const isError = false;

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

  // These components should be imported but we'll keep them for simplicity in this example
  const OrderTableHeader = () => (
    <div className="flex justify-between mb-4">
      <div>
        <h2 className="text-lg font-semibold">Orders</h2>
      </div>
      <div className="flex gap-2">
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search orders..."
          className="px-3 py-1 border rounded"
        />
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="px-3 py-1 border rounded"
        >
          <option value="all">All</option>
          <option value="awaiting">Awaiting</option>
          <option value="sent">Sent</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="text-center py-12">
      <p className="text-xl text-gray-500">No orders found</p>
      <p className="text-gray-400">Try changing your filters</p>
    </div>
  );

  const OrderTableRow = ({ order }: { order: Order }) => (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3 px-4">{order.id}</td>
      <td className="py-3 px-4">{order.customerName}</td>
      <td className="py-3 px-4">{order.artist}</td>
      <td className="py-3 px-4">{order.product}</td>
      <td className="py-3 px-4">
        <span className={`px-2 py-1 rounded ${
          order.proofStatus === 'approved' ? 'bg-green-100 text-green-800' :
          order.proofStatus === 'awaiting' ? 'bg-yellow-100 text-yellow-800' :
          order.proofStatus === 'rejected' ? 'bg-red-100 text-red-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {order.proofStatus}
        </span>
      </td>
      <td className="py-3 px-4">
        <span className={`px-2 py-1 rounded ${
          order.fulfillmentStatus === 'fulfilled' ? 'bg-green-100 text-green-800' :
          order.fulfillmentStatus === 'cancelled' ? 'bg-red-100 text-red-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {order.fulfillmentStatus}
        </span>
      </td>
      <td className="py-3 px-4">{order.createdAt}</td>
    </tr>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 w-full overflow-x-auto">
      <OrderTableHeader />
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
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Artist</th>
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Proof Status</th>
                <th className="py-2 px-4">Fulfillment</th>
                <th className="py-2 px-4">Created</th>
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
