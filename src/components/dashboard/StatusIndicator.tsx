import React from 'react';

type ProofStatus = 'awaiting' | 'sent' | 'approved' | 'rejected';
type FulfillmentStatus = 'pending' | 'fulfilled' | 'cancelled';

type Props =
  | { type: 'proof'; status: ProofStatus }
  | { type: 'fulfillment'; status: FulfillmentStatus };

const statusStyles: Record<string, string> = {
  awaiting: 'bg-yellow-400 text-yellow-900',
  sent: 'bg-blue-400 text-blue-900',
  approved: 'bg-green-400 text-green-900',
  rejected: 'bg-red-400 text-red-900',
  pending: 'bg-gray-300 text-gray-700',
  fulfilled: 'bg-green-400 text-green-900',
  cancelled: 'bg-red-400 text-red-900',
};

const statusLabels: Record<string, string> = {
  awaiting: 'Awaiting Proof',
  sent: 'Sent',
  approved: 'Approved',
  rejected: 'Rejected',
  pending: 'Pending',
  fulfilled: 'Fulfilled',
  cancelled: 'Cancelled',
};

const StatusIndicator: React.FC<Props> = ({ status }) => (
  <span
    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}
    style={{ minWidth: 80, justifyContent: 'center' }}
  >
    <span className={`w-2 h-2 rounded-full mr-2 ${statusStyles[status]}`}></span>
    {statusLabels[status]}
  </span>
);

export default StatusIndicator; 