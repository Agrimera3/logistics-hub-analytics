import { Truck, MapPin, Building2, DollarSign } from "lucide-react";
import { Map } from "@/components/Map";
import { MetricsCard } from "@/components/MetricsCard";
import { Sidebar } from "@/components/Sidebar";

const metrics = [
  { title: "Total Trucks", value: "24", change: "+160%", icon: <Truck className="w-5 h-5" /> },
  { title: "Active Trips", value: "20", change: "+130%", icon: <MapPin className="w-5 h-5" /> },
  { title: "Facilities", value: "8", change: "+150%", icon: <Building2 className="w-5 h-5" /> },
  { title: "Revenue", value: "$84,237", change: "+70%", icon: <DollarSign className="w-5 h-5" /> },
];

const tripMarkers = [
  { lat: 54.7108, lng: 20.4714, label: "Klaipeda (Pickup)" },
  { lat: 52.2297, lng: 21.0122, label: "Warsaw (Destination)" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <MetricsCard key={metric.title} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Active Routes</h2>
            <Map markers={tripMarkers} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Latest Trips</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Origin</th>
                    <th className="text-left py-2">Destination</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">Klaipeda, Lithuania</td>
                    <td className="py-2">Warsaw, Poland</td>
                    <td className="py-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        In Transit
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;