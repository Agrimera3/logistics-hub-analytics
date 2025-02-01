import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sidebar } from "@/components/Sidebar";

const trucks = [
  { id: 1, number: "TRK-001", capacity: "20000 lbs", status: "Available" },
  { id: 2, number: "TRK-002", capacity: "30000 lbs", status: "In Transit" },
  { id: 3, number: "TRK-003", capacity: "45000 lbs", status: "Maintenance" },
];

const Trucks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-8">
        <h1 className="text-2xl font-bold mb-6">Trucks Management</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Truck Number</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trucks.map((truck) => (
              <TableRow key={truck.id}>
                <TableCell>{truck.number}</TableCell>
                <TableCell>{truck.capacity}</TableCell>
                <TableCell>{truck.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Trucks;