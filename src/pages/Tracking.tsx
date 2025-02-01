import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Map } from "@/components/Map";
import { Sidebar } from "@/components/Sidebar";

const activeDeliveries = [
  {
    id: 1,
    truckId: "TRK-001",
    currentLocation: { lat: 54.2, lng: 20.8, label: "En route to Warsaw" },
    status: "In Transit",
    eta: "2024-02-20 15:30"
  }
];

const Tracking = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-8">
        <h1 className="text-2xl font-bold mb-6">Live Tracking</h1>
        
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Active Deliveries</h2>
            <Map 
              markers={activeDeliveries.map(delivery => ({
                ...delivery.currentLocation
              }))}
              center={[54.7108, 20.4714]}
              zoom={6}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Truck ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>ETA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activeDeliveries.map((delivery) => (
              <TableRow key={delivery.id}>
                <TableCell>{delivery.truckId}</TableCell>
                <TableCell>{delivery.status}</TableCell>
                <TableCell>{delivery.eta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Tracking;