import { useState } from 'react';
import { MobilePhoneFrame } from './driver/MobilePhoneFrame';
import { MapView } from './driver/MapView';
import { BookingSheet } from './driver/BookingSheet';
import { BottomNav } from './driver/BottomNav';
import { ProfilePage } from './driver/ProfilePage';
import { VehiclePage } from './driver/VehiclePage';
import { SessionsPage } from './driver/SessionsPage';
import { getChargingStations, getDefaultLocation, type Station } from '../data_sources';

// Get stations from data source
const stations: Station[] = getChargingStations();
const defaultLocation = getDefaultLocation();

export function DriverScreen() {
  const [activeTab, setActiveTab] = useState<'map' | 'profile' | 'vehicle' | 'sessions'>('map');
  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);
  const [targetSoC, setTargetSoC] = useState(80);
  const [departureTime, setDepartureTime] = useState('15:00');
  const [isSheetExpanded, setIsSheetExpanded] = useState(false);
  const [isSmartMode, setIsSmartMode] = useState(false);

  const selectedStation = selectedStationId 
    ? stations.find(s => s.id === selectedStationId) || null
    : null;

  const handleStationSelect = (stationId: string) => {
    setSelectedStationId(stationId);
    if (!isSmartMode) {
      setIsSheetExpanded(false);
    }
  };

  const handleBook = () => {
    alert('Booking charging session...');
    // TODO: Navigate to active session view
  };

  const handleSmartModeChange = (smartMode: boolean) => {
    setIsSmartMode(smartMode);
    if (smartMode) {
      setIsSheetExpanded(true);
    }
  };

  return (
    <MobilePhoneFrame>
      <div className="relative w-full h-full">
        {/* Content based on active tab */}
        {activeTab === 'map' && (
          <>
            {/* Full-screen Map */}
            <div className="absolute inset-0">
              <MapView
                userLat={defaultLocation.lat}
                userLng={defaultLocation.lng}
                stations={stations}
                selectedStation={selectedStationId || undefined}
                onStationSelect={handleStationSelect}
                onSmartModeChange={handleSmartModeChange}
              />
            </div>

            {/* Bottom Sheet */}
            <BookingSheet
              selectedStation={selectedStation}
              targetSoC={targetSoC}
              setTargetSoC={setTargetSoC}
              departureTime={departureTime}
              setDepartureTime={setDepartureTime}
              onBook={handleBook}
              isExpanded={isSheetExpanded}
              onToggleExpand={() => setIsSheetExpanded(!isSheetExpanded)}
              isSmartMode={isSmartMode}
            />
          </>
        )}

        {activeTab === 'sessions' && <SessionsPage />}
        {activeTab === 'vehicle' && <VehiclePage />}
        {activeTab === 'profile' && <ProfilePage />}

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </MobilePhoneFrame>
  );
}
