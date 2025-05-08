
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Logo } from '../layout/Logo';
import { Button } from '@/components/ui/button';
import {
  Archive,
  CheckSquare,
  Clock,
  FileText,
  Home,
  Image,
  Package,
  Settings,
  Users
} from 'lucide-react';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const mainItems: SidebarItem[] = [
  {
    icon: <Home size={20} />,
    label: 'Dashboard',
    href: '/dashboard'
  },
  {
    icon: <CheckSquare size={20} />,
    label: 'Approvals',
    href: '/dashboard/approvals'
  },
  {
    icon: <Image size={20} />,
    label: 'Proofs',
    href: '/dashboard/proofs'
  },
  {
    icon: <Clock size={20} />,
    label: 'Pending',
    href: '/dashboard/pending'
  },
  {
    icon: <Package size={20} />,
    label: 'Production',
    href: '/dashboard/production'
  },
  {
    icon: <Archive size={20} />,
    label: 'Archives',
    href: '/dashboard/archives'
  }
];

const secondaryItems: SidebarItem[] = [
  {
    icon: <FileText size={20} />,
    label: 'Templates',
    href: '/dashboard/templates'
  },
  {
    icon: <Users size={20} />,
    label: 'Team',
    href: '/dashboard/team'
  },
  {
    icon: <Settings size={20} />,
    label: 'Settings',
    href: '/dashboard/settings'
  }
];

interface DashboardSidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ 
  collapsed = false,
  onToggle
}) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  
  return (
    <aside 
      className={cn(
        "bg-card border-r h-screen sticky top-0 transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 border-b flex items-center justify-between h-16">
        {!collapsed && <Logo size="sm" />}
        {collapsed && <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold mx-auto">SP</div>}
        
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn("rounded-full ml-auto", collapsed && "mx-auto")}
          onClick={onToggle}
        >
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          )}
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
        {mainItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium",
              isActive(item.href)
                ? "bg-primary/10 text-primary"
                : "hover:bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
        
        <div className="mt-6 pt-6 border-t">
          {secondaryItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium",
                isActive(item.href)
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t">
        <div className={cn(
          "flex items-center gap-3",
          collapsed ? "justify-center" : ""
        )}>
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            JD
          </div>
          {!collapsed && (
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
