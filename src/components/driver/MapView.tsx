import { Zap, Navigation } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface Station {
  id: string;
  name: string;
  lat: number;
  lng: number;
  available: number;
  total: number;
  power: string;
  price: string;
}

interface MapViewProps {
  userLat: number;
  userLng: number;
  stations: Station[];
  selectedStation?: string;
  onStationSelect: (stationId: string) => void;
}

export function MapView({ userLat, userLng, stations, selectedStation, onStationSelect }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import Leaflet
    import('leaflet').then((L) => {
      // Initialize map
      const map = L.map(mapRef.current!, {
        center: [userLat, userLng],
        zoom: 14,
        zoomControl: false,
      });

      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add user location marker
      const userIcon = L.divIcon({
        className: 'custom-user-marker',
        html: `
          <div class="relative">
            <div class="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 border-3 border-white rounded-full shadow-lg animate-pulse"></div>
            <div class="absolute inset-0 w-5 h-5 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      L.marker([userLat, userLng], { icon: userIcon }).addTo(map);

      // Add station markers
      stations.forEach((station) => {
        const isSelected = station.id === selectedStation;
        const stationIcon = L.divIcon({
          className: 'custom-station-marker',
          html: `
            <div class="relative group cursor-pointer">
              <div class="${isSelected ? 'w-12 h-12' : 'w-10 h-10'} rounded-full flex items-center justify-center border-3 border-white shadow-lg transition-all duration-300 ${
                isSelected 
                  ? 'bg-gradient-to-br from-[#00FFA7] to-green-500 shadow-[#00FFA7]/50' 
                  : 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/50'
              }">
                <svg xmlns="http://www.w3.org/2000/svg" width="${isSelected ? 24 : 20}" height="${isSelected ? 24 : 20}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              ${isSelected ? '<div class="absolute inset-0 w-12 h-12 bg-[#00FFA7] rounded-full animate-ping opacity-75"></div>' : ''}
            </div>
          `,
          iconSize: [isSelected ? 48 : 40, isSelected ? 48 : 40],
          iconAnchor: [isSelected ? 24 : 20, isSelected ? 24 : 20],
        });

        const marker = L.marker([station.lat, station.lng], { icon: stationIcon })
          .addTo(map)
          .on('click', () => {
            onStationSelect(station.id);
          });

        // Add tooltip
        marker.bindTooltip(station.name, {
          permanent: isSelected,
          direction: 'top',
          className: isSelected 
            ? 'bg-[#00FFA7]/20 border border-[#00FFA7]/50 text-[#00FFA7] backdrop-blur-sm' 
            : 'bg-slate-900/80 border border-slate-700 text-slate-300 backdrop-blur-sm',
        });

        markersRef.current.push({ marker, station });
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers when selection changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    import('leaflet').then((L) => {
      markersRef.current.forEach(({ marker, station }) => {
        const isSelected = station.id === selectedStation;
        
        const stationIcon = L.divIcon({
          className: 'custom-station-marker',
          html: `
            <div class="relative group cursor-pointer">
              <div class="${isSelected ? 'w-12 h-12' : 'w-10 h-10'} rounded-full flex items-center justify-center border-3 border-white shadow-lg transition-all duration-300 ${
                isSelected 
                  ? 'bg-gradient-to-br from-[#00FFA7] to-green-500 shadow-[#00FFA7]/50' 
                  : 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/50'
              }">
                <svg xmlns="http://www.w3.org/2000/svg" width="${isSelected ? 24 : 20}" height="${isSelected ? 24 : 20}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              ${isSelected ? '<div class="absolute inset-0 w-12 h-12 bg-[#00FFA7] rounded-full animate-ping opacity-75"></div>' : ''}
            </div>
          `,
          iconSize: [isSelected ? 48 : 40, isSelected ? 48 : 40],
          iconAnchor: [isSelected ? 24 : 20, isSelected ? 24 : 20],
        });

        marker.setIcon(stationIcon);
        
        // Update tooltip
        marker.unbindTooltip();
        marker.bindTooltip(station.name, {
          permanent: isSelected,
          direction: 'top',
          className: isSelected 
            ? 'bg-[#00FFA7]/20 border border-[#00FFA7]/50 text-[#00FFA7] backdrop-blur-sm' 
            : 'bg-slate-900/80 border border-slate-700 text-slate-300 backdrop-blur-sm',
        });
      });
    });
  }, [selectedStation]);

  return (
    <div className="w-full h-full relative">
      {/* Map container */}
      <div ref={mapRef} className="w-full h-full" />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-[1000] bg-gradient-to-b from-slate-900/95 to-slate-900/0 backdrop-blur-sm pt-12 pb-6 px-5 pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-green-400 p-1.5 rounded-lg">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-white">ChargeID</span>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-700">
            <div className="flex items-center gap-2">
              <Navigation className="w-3 h-3 text-blue-400" />
              <span className="text-white text-sm">San Francisco</span>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-slate-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-700">
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-slate-300">You</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-blue-500" />
            <span className="text-slate-300">Stations</span>
          </div>
        </div>
      </div>

      {/* Leaflet CSS */}
      <style>{`
        .leaflet-container {
          background: #0f172a;
        }
        .leaflet-tile-pane {
          filter: grayscale(0.3) contrast(1.1) brightness(0.8);
        }
        .custom-user-marker,
        .custom-station-marker {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-tooltip {
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
        }
        .leaflet-control-attribution {
          display: none;
        }
      `}</style>
    </div>
  );
}