import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  markers?: { lat: number; lng: number; label: string }[];
  center?: [number, number];
  zoom?: number;
}

export function Map({ markers = [], center = [54.7108, 20.4714], zoom = 6 }: MapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    mapRef.current = L.map(mapContainerRef.current).setView(center, zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    // Add markers
    markers.forEach(marker => {
      L.marker([marker.lat, marker.lng])
        .bindPopup(marker.label)
        .addTo(mapRef.current!);
    });

    // Cleanup
    return () => {
      mapRef.current?.remove();
    };
  }, [markers, center, zoom]);

  return <div ref={mapContainerRef} className="w-full h-[400px] rounded-lg" />;
}