VEHICLE_INFO = {
    "id": "veh_eqs_01",
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "variant": "580 4MATIC",
    "batteryCapacity": 108.4,
    "maxACCharging": 22,
    "maxDCCharging": 200,
    "efficiency": 18.5,
    "did": "did:ev:W1KAH5EB2PF093797",
    "didVerified": True,
}

VEHICLE_BATTERY_STATUS = {
    "currentSoC": 68,
    "currentEnergy": 41,
    "estimatedRange": 250,
    "batteryHealth": 96,
}

VEHICLE_CHARGING_HISTORY = {
    "totalSessions": 47,
    "totalEnergy": 1240,
    "averagePerMonth": 155,
}


def get_vehicle_info() -> dict:
    return VEHICLE_INFO


def get_vehicle_battery_status() -> dict:
    return VEHICLE_BATTERY_STATUS


def get_vehicle_charging_history() -> dict:
    return VEHICLE_CHARGING_HISTORY


