import React from 'react';

const EmptyState: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-16 text-center text-gray-400">
    <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-4 opacity-40">
      <rect x="8" y="16" width="32" height="20" rx="4" fill="#e5e7eb" />
      <rect x="14" y="22" width="20" height="2" rx="1" fill="#cbd5e1" />
      <rect x="14" y="27" width="12" height="2" rx="1" fill="#cbd5e1" />
    </svg>
    <div className="text-lg font-semibold mb-1">No orders found</div>
    <div className="text-sm">Try adjusting your filters or search.</div>
  </div>
);

export default EmptyState; 