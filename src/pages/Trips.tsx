import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Map } from "@/components/Map";
import { Sidebar } from "@/components/Sidebar";

interface Location {
  city: string;
  country: string;
  lat: number;
  lng: number;
}

interface Trip {
  id: number;
  pickup: Location;
  destination: Location;
  distance: number;
  status: string;
}

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c);
};

const initialTrips: Trip[] = [
  {
    id: 1,
    pickup: { city: "Klaipeda", country: "Lithuania", lat: 55.7033, lng: 21.1443 },
    destination: { city: "Warsaw", country: "Poland", lat: 52.2297, lng: 21.0122 },
    distance: calculateDistance(55.7033, 21.1443, 52.2297, 21.0122),
    status: "In Transit"
  }
];

const Trips = () => {
  const [trips] = useState<Trip[]>(initialTrips);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-8">
        <h1 className="text-2xl font-bold mb-6">Trip Management</h1>
        
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Active Routes</h2>
            <Map 
              markers={trips.map(trip => [
                { lat: trip.pickup.lat, lng: trip.pickup.lng, label: `${trip.pickup.city} (Pickup)` },
                { lat: trip.destination.lat, lng: trip.destination.lng, label: `${trip.destination.city} (Destination)` }
              ]).flat()}
              center={[54.7108, 20.4714]}
              zoom={6}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pickup Location</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Distance (km)</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trips.map((trip) => (
              <TableRow key={trip.id}>
                <TableCell>{`${trip.pickup.city}, ${trip.pickup.country}`}</TableCell>
                <TableCell>{`${trip.destination.city}, ${trip.destination.country}`}</TableCell>
                <TableCell>{trip.distance}</TableCell>
                <TableCell>{trip.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Trips;