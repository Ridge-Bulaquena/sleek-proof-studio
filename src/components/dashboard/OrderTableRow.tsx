import React from 'react';
import { Order } from './OrderTable';
import StatusIndicator from './StatusIndicator';

const OrderTableRow: React.FC<{ order: Order }> = ({ order }) => (
  <tr className="border-b last:border-none hover:bg-gray-50 dark:hover:bg-gray-800 transition">
    <td className="py-2 px-2 font-mono text-xs md:text-sm text-blue-900 dark:text-blue-200">{order.id}</td>
    <td className="py-2 px-2">{order.customerName}</td>
    <td className="py-2 px-2">{order.artist}</td>
    <td className="py-2 px-2">{order.product}</td>
    <td className="py-2 px-2">
      <StatusIndicator status={order.proofStatus} type="proof" />
    </td>
    <td className="py-2 px-2">
      <StatusIndicator status={order.fulfillmentStatus} type="fulfillment" />
    </td>
    <td className="py-2 px-2 text-xs text-gray-400">{new Date(order.createdAt).toLocaleDateString()}</td>
  </tr>
);

export default OrderTableRow; 