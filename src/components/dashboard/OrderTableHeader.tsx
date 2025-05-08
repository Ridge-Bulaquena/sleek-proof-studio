import React from 'react';

interface Props {
  filter: 'all' | 'awaiting' | 'sent' | 'approved' | 'rejected';
  setFilter: (f: Props['filter']) => void;
  search: string;
  setSearch: (s: string) => void;
}

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Awaiting Proof', value: 'awaiting' },
  { label: 'Sent', value: 'sent' },
  { label: 'Approved', value: 'approved' },
  { label: 'Rejected', value: 'rejected' },
];

const OrderTableHeader: React.FC<Props> = ({ filter, setFilter, search, setSearch }) => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div className="flex gap-2">
      {FILTERS.map(f => (
        <button
          key={f.value}
          className={`px-4 py-1 rounded-full font-medium transition text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 ${
            filter === f.value ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
          }`}
          onClick={() => setFilter(f.value as Props['filter'])}
        >
          {f.label}
        </button>
      ))}
    </div>
    <input
      type="text"
      placeholder="Search orders..."
      value={search}
      onChange={e => setSearch(e.target.value)}
      className="rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 w-full md:w-64 text-sm md:text-base"
    />
  </div>
);

export default OrderTableHeader; 