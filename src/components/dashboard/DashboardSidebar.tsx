
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
  color?: string;
}

const mainItems: SidebarItem[] = [
  {
    icon: <Home size={18} />,
    label: 'Dashboard',
    href: '/dashboard',
    color: 'bg-fluorescent-blue/10 text-fluorescent-blue'
  },
  {
    icon: <CheckSquare size={18} />,
    label: 'Approvals',
    href: '/dashboard/approvals',
    color: 'bg-fluorescent-green/10 text-fluorescent-green'
  },
  {
    icon: <Image size={18} />,
    label: 'Proofs',
    href: '/dashboard/proofs',
    color: 'bg-fluorescent-purple/10 text-fluorescent-purple'
  },
  {
    icon: <Clock size={18} />,
    label: 'Pending',
    href: '/dashboard/pending',
    color: 'bg-fluorescent-orange/10 text-fluorescent-orange'
  },
  {
    icon: <Package size={18} />,
    label: 'Production',
    href: '/dashboard/production',
    color: 'bg-fluorescent-pink/10 text-fluorescent-pink'
  },
  {
    icon: <Archive size={18} />,
    label: 'Archives',
    href: '/dashboard/archives'
  }
];

const secondaryItems: SidebarItem[] = [
  {
    icon: <FileText size={18} />,
    label: 'Templates',
    href: '/dashboard/templates'
  },
  {
    icon: <Users size={18} />,
    label: 'Team',
    href: '/dashboard/team'
  },
  {
    icon: <Settings size={18} />,
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
        "bg-card dark:bg-card/50 border-r backdrop-blur-sm h-screen sticky top-0 transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 border-b flex items-center justify-between h-16">
        {!collapsed && <Logo size="sm" />}
        {collapsed && (
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold mx-auto">
            SP
          </div>
        )}
        
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn("rounded-full ml-auto", collapsed && "mx-auto")}
          onClick={onToggle}
        >
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
              width="16"
              height="16"
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
      
      <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
        {mainItems.map((item, index) => {
          const active = isActive(item.href);
          return (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl transition-all font-medium",
                active
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted/80 text-muted-foreground hover:text-foreground",
                !collapsed && item.color && active && item.color
              )}
            >
              <div className={cn(
                "flex items-center justify-center w-8 h-8 rounded-lg",
                active ? "bg-primary/10" : "bg-transparent",
                collapsed && item.color && active && item.color
              )}>
                {item.icon}
              </div>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
        
        <div className="mt-6 pt-6 border-t border-muted">
          {secondaryItems.map((item, index) => {
            const active = isActive(item.href);
            return (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-xl transition-all font-medium",
                  active
                    ? "bg-muted/80 text-primary"
                    : "hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                )}
              >
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-lg",
                  active ? "bg-muted/80" : "bg-transparent"
                )}>
                  {item.icon}
                </div>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </div>
      </div>
      
      <div className="p-4 border-t mt-auto">
        <div className={cn(
          "flex items-center gap-3 rounded-xl p-2 bg-muted/50 hover:bg-muted/80 transition-colors",
          collapsed ? "justify-center" : ""
        )}>
          <div className="w-8 h-8 rounded-full bg-fluorescent-purple/20 flex items-center justify-center text-fluorescent-purple">
            JD
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="font-medium truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
