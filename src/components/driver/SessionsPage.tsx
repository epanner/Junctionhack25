import { Clock, MapPin, Battery, DollarSign, Zap, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { getChargingSessions, getUserStatistics } from '../../data_sources';

export function SessionsPage() {
  // Get sessions data from data source
  const sessions = getChargingSessions();
  const userStats = getUserStatistics();

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

      {/* Page Header */}
      <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 px-5 pt-8 pb-6">
        <h2 className="text-white text-xl mb-2">Charging Sessions</h2>
        <p className="text-slate-400 text-sm">View your charging history and active sessions</p>
      </div>

      <div className="px-5 py-6 space-y-4">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3 mb-2">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-center">
            <Calendar className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <div className="text-white text-sm">{userStats.totalSessions}</div>
            <div className="text-slate-400 text-xs">Sessions</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-center">
            <Zap className="w-4 h-4 text-green-400 mx-auto mb-1" />
            <div className="text-white text-sm">{userStats.totalEnergyCharged.toLocaleString()}</div>
            <div className="text-slate-400 text-xs">kWh</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-center">
            <DollarSign className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
            <div className="text-white text-sm">${userStats.totalSpent}</div>
            <div className="text-slate-400 text-xs">Total</div>
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-3">
          {sessions.map((session) => (
            <Card 
              key={session.id}
              className="bg-slate-800/50 border-slate-700 p-4 hover:bg-slate-800/70 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white text-sm">{session.station}</h3>
                    {session.status === 'ongoing' && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                        Live
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Clock className="w-3 h-3" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{session.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 mb-1">{session.cost}</div>
                  <div className="text-slate-400 text-xs">{session.duration}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-700">
                <div className="flex items-center gap-2">
                  <Battery className="w-3 h-3 text-blue-400" />
                  <div>
                    <div className="text-slate-400 text-xs">Energy</div>
                    <div className="text-white text-xs">{session.energy}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-purple-400" />
                  <div>
                    <div className="text-slate-400 text-xs">Duration</div>
                    <div className="text-white text-xs">{session.duration}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}