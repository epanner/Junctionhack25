from typing import List, Optional

CHARGING_SESSIONS = [
    {
        "id": "sess_001",
        "date": "Today, 10:30 AM",
        "station": "Espoo West Mobility Hub",
        "stationId": "did:itn:charger:espoo-west",
        "location": "Espoo, FI",
        "energy": "32 kWh",
        "cost": "€12.59",
        "duration": "42 min",
        "status": "ongoing",
        "startTime": "10:30 AM",
        "startSoC": 45,
        "endSoC": None,
    },
    {
        "id": "sess_000",
        "date": "Yesterday, 5:45 PM",
        "station": "GridPass Demo Station",
        "stationId": "did:itn:charger:fleet-01",
        "location": "Helsinki, FI",
        "energy": "41 kWh",
        "cost": "€16.87",
        "duration": "55 min",
        "status": "completed",
        "startTime": "4:50 PM",
        "endTime": "5:45 PM",
        "startSoC": 34,
        "endSoC": 88,
    },
    {
        "id": "sess_123",
        "date": "Oct 04, 2:10 PM",
        "station": "Harbor Fast Charge",
        "stationId": "did:itn:charger:fleet-02",
        "location": "Tallinn, EE",
        "energy": "28 kWh",
        "cost": "€11.41",
        "duration": "34 min",
        "status": "completed",
        "startSoC": 51,
        "endSoC": 82,
    },
    {
        "id": "sess_087",
        "date": "Sep 27, 7:05 AM",
        "station": "Espoo West Mobility Hub",
        "stationId": "did:itn:charger:espoo-west",
        "location": "Espoo, FI",
        "energy": "19 kWh",
        "cost": "€7.98",
        "duration": "26 min",
        "status": "completed",
        "startSoC": 62,
        "endSoC": 86,
    },
]

ACTIVE_SESSION_ID = "sess_001"


def list_charging_sessions(limit: Optional[int] = None) -> List[dict]:
    sessions = CHARGING_SESSIONS
    return sessions[:limit] if limit else sessions


def get_charging_session(session_id: str) -> Optional[dict]:
    for session in CHARGING_SESSIONS:
        if session["id"] == session_id:
            return session
    return None


def get_active_session() -> Optional[dict]:
    if not ACTIVE_SESSION_ID:
        return None
    return get_charging_session(ACTIVE_SESSION_ID)


