import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Calendar,
  Home,
  Map,
  Settings,
  Truck,
  FileText,
  Building2,
  MapPin,
  ClipboardList,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Truck, label: "Trucks", path: "/trucks" },
  { icon: Map, label: "Trips", path: "/trips" },
  { icon: MapPin, label: "Tracking", path: "/tracking" },
  { icon: Building2, label: "Facilities", path: "/facilities" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: ClipboardList, label: "Schedule", path: "/schedule" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-slate-900 text-white p-4 fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Logistics Manager</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg mb-1 hover:bg-slate-800 transition-colors",
              location.pathname === item.path && "bg-slate-800"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}