import { MapPin, Zap, Clock, DollarSign, Battery, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { Badge } from '../ui/badge';

interface Station {
  id: string;
  name: string;
  lat: number;
  lng: number;
  available: number;
  total: number;
  power: string;
  price: string;
  distance?: string;
}

interface BookingSheetProps {
  selectedStation: Station | null;
  targetSoC: number;
  setTargetSoC: (value: number) => void;
  departureTime: string;
  setDepartureTime: (value: string) => void;
  onBook: () => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export function BookingSheet({
  selectedStation,
  targetSoC,
  setTargetSoC,
  departureTime,
  setDepartureTime,
  onBook,
  isExpanded,
  onToggleExpand
}: BookingSheetProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-slate-900 rounded-t-3xl shadow-2xl transition-all duration-300"
      style={{ height: isExpanded ? '70%' : '280px' }}
    >
      {/* Drag Handle */}
      <div 
        className="flex justify-center pt-2 pb-3 cursor-pointer"
        onClick={onToggleExpand}
      >
        <div className="w-12 h-1 bg-slate-600 rounded-full"></div>
      </div>

      <div className="px-5 pb-6 overflow-y-auto" style={{ height: 'calc(100% - 24px)' }}>
        {selectedStation ? (
          <>
            {/* Selected Station Info */}
            <div className="mb-4 pb-4 border-b border-slate-800">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-white mb-1">{selectedStation.name}</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{selectedStation.distance || '2.3 km away'}</span>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  {selectedStation.available}/{selectedStation.total} Available
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 rounded-lg p-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-3 h-3 text-blue-400" />
                    <span className="text-slate-400 text-xs">Max Power</span>
                  </div>
                  <div className="text-white text-sm">{selectedStation.power}</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-3 h-3 text-green-400" />
                    <span className="text-slate-400 text-xs">Price</span>
                  </div>
                  <div className="text-white text-sm">{selectedStation.price}</div>
                </div>
              </div>
            </div>

            {/* Charging Preferences */}
            <div className="space-y-4 mb-4">
              <h4 className="text-white text-sm">Charging Preferences</h4>
              
              {/* Target SoC */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-slate-300 text-xs flex items-center gap-2">
                    <Battery className="w-3 h-3" />
                    Target Battery
                  </label>
                  <span className="text-white text-sm">{targetSoC}%</span>
                </div>
                <Slider
                  value={[targetSoC]}
                  onValueChange={(value) => setTargetSoC(value[0])}
                  min={50}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Departure Time */}
              <div className="space-y-2">
                <label className="text-slate-300 text-xs flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Ready By
                </label>
                <input
                  type="time"
                  value={departureTime}
                  onChange={(e) => setDepartureTime(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Estimated Cost */}
            <div className="bg-gradient-to-br from-blue-900/30 to-green-900/30 border border-blue-700/50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-300 text-xs">Estimated Cost</span>
                <span className="text-green-400">~$4.50</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-xs">Estimated Time</span>
                <span className="text-blue-400">~45 min</span>
              </div>
            </div>

            {/* Book Button */}
            <Button 
              onClick={onBook}
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white py-3"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Book & Start Charging
            </Button>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-white mb-2">Select a Charging Station</h3>
            <p className="text-slate-400 text-sm">
              Tap on any charging station marker on the map to view details and book
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
