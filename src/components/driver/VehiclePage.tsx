import { Car, Battery, Gauge, Zap, TrendingUp, Calendar, ChevronRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { getVehicleInfo, getVehicleBatteryStatus, getVehicleChargingHistory } from '../../data_sources';

export function VehiclePage() {
  // Get vehicle data from data source
  const vehicleInfo = getVehicleInfo();
  const batteryStatus = getVehicleBatteryStatus();
  const chargingHistory = getVehicleChargingHistory();

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-950 pb-20">
      {/* Header */}
      <div className="bg-slate-900/95 backdrop-blur-sm px-5 pt-10 pb-4 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-green-400 p-1.5 rounded-lg">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-white">ChargeID</span>
          </div>
        </div>
      </div>

      {/* Vehicle Header */}
      <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 px-5 pt-8 pb-8">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <Car className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-white text-xl mb-1">{vehicleInfo.make} {vehicleInfo.model}</h2>
            <p className="text-slate-400 text-sm">{vehicleInfo.variant}</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-6 space-y-4">
        {/* Current Battery Status */}
        <Card className="bg-slate-800/50 border-slate-700 p-4">
          <div className="flex items-center gap-2 mb-4">
            <Battery className="w-4 h-4 text-green-400" />
            <h3 className="text-white text-sm">Current Battery Status</h3>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-xs">State of Charge</span>
              <span className="text-white">{batteryStatus.currentSoC}%</span>
            </div>
            <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500"
                style={{ width: `${batteryStatus.currentSoC}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-slate-500 text-xs">~{batteryStatus.estimatedRange} km range</span>
              <span className="text-slate-500 text-xs">{batteryStatus.currentEnergy} kWh</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/50 rounded-lg p-3">
              <div className="text-slate-400 text-xs mb-1">Estimated Range</div>
              <div className="text-white">{batteryStatus.estimatedRange} km</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-3">
              <div className="text-slate-400 text-xs mb-1">Battery Health</div>
              <div className="text-green-400">{batteryStatus.batteryHealth}%</div>
            </div>
          </div>
        </Card>

        {/* Vehicle Specifications */}
        <Card className="bg-slate-800/50 border-slate-700 p-4">
          <h3 className="text-white text-sm mb-3">Vehicle Specifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <Battery className="w-4 h-4 text-blue-400" />
                <span className="text-slate-400 text-sm">Battery Capacity</span>
              </div>
              <span className="text-white text-sm">{vehicleInfo.batteryCapacity} kWh</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-slate-700">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-slate-400 text-sm">Max AC Charging</span>
              </div>
              <span className="text-white text-sm">{vehicleInfo.maxACCharging} kW</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-slate-700">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-400" />
                <span className="text-slate-400 text-sm">Max DC Charging</span>
              </div>
              <span className="text-white text-sm">{vehicleInfo.maxDCCharging} kW</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-slate-700">
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-purple-400" />
                <span className="text-slate-400 text-sm">Efficiency</span>
              </div>
              <span className="text-white text-sm">{vehicleInfo.efficiency} kWh/100km</span>
            </div>
          </div>
        </Card>

        {/* Connected Vehicle DID */}
        <Card className="bg-slate-800/50 border-slate-700 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white text-sm">Vehicle DID Status</h3>
            <Badge className={`${
              vehicleInfo.didVerified
                ? 'bg-green-500/20 text-green-400 border-green-500/30'
                : 'bg-red-500/20 text-red-400 border-red-500/30'
            } text-xs`}>
              {vehicleInfo.didVerified ? 'Verified' : 'Not Verified'}
            </Badge>
          </div>
          <p className="text-slate-400 text-xs mb-3">
            Your vehicle is securely connected via decentralized identity authentication
          </p>
          <div className="bg-slate-900/50 rounded-lg p-3">
            <div className="text-slate-500 text-xs mb-1">Vehicle DID</div>
            <div className="text-slate-300 text-xs font-mono break-all">
              {vehicleInfo.did}
            </div>
          </div>
        </Card>

        {/* Charging History Summary */}
        <Card className="bg-slate-800/50 border-slate-700 p-4">
          <h3 className="text-white text-sm mb-3">Charging History</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-slate-400 text-sm">Total Sessions</span>
              </div>
              <span className="text-white text-sm">{chargingHistory.totalSessions}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-slate-700">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-slate-400 text-sm">Total Energy</span>
              </div>
              <span className="text-white text-sm">{chargingHistory.totalEnergy.toLocaleString()} kWh</span>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-slate-700">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-slate-400 text-sm">Avg. per Month</span>
              </div>
              <span className="text-white text-sm">{chargingHistory.averagePerMonth} kWh</span>
            </div>
          </div>
        </Card>

        {/* Manage Vehicle */}
        <button className="w-full flex items-center justify-between py-3 px-4 bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50 rounded-lg transition-colors">
          <span className="text-white text-sm">Manage Vehicle Settings</span>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>
  );
}