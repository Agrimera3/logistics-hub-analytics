import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Map } from "@/components/Map";
import { Sidebar } from "@/components/Sidebar";

const facilities = [
  {
    id: 1,
    name: "Klaipeda Port Warehouse",
    type: "Warehouse",
    location: { lat: 55.7033, lng: 21.1443, label: "Klaipeda Port Warehouse" },
    capacity: "50000 sqft"
  }
];

const Facilities = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-8">
        <h1 className="text-2xl font-bold mb-6">Facilities Management</h1>
        
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Facility Locations</h2>
            <Map 
              markers={facilities.map(facility => ({
                ...facility.location
              }))}
              center={[54.7108, 20.4714]}
              zoom={6}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Capacity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {facilities.map((facility) => (
              <TableRow key={facility.id}>
                <TableCell>{facility.name}</TableCell>
                <TableCell>{facility.type}</TableCell>
                <TableCell>{facility.capacity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Facilities;