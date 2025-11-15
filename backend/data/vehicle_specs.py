VEHICLE_SPECS = {
    # Mercedes EQS SUV 580 4MATIC (example)
    "W1KAH5EB2PF093797": {
        "battery_capacity_kwh": 108.4,
        "max_dc_power_kw": 200,
    },
    # Hyundai Ioniq 6 AWD (example)
    "TMAH081A1RJ012825": {
        "battery_capacity_kwh": 77.4,
        "max_dc_power_kw": 233,
    },
}

DEFAULT_BATTERY_CAPACITY_KWH = 75.0


def get_vehicle_capacity_kwh(vin: str) -> float:
    """
    Returns the battery capacity for the requested VIN using static demo data.
    """
    spec = VEHICLE_SPECS.get(vin)
    if spec is None:
        return DEFAULT_BATTERY_CAPACITY_KWH
    return spec.get("battery_capacity_kwh", DEFAULT_BATTERY_CAPACITY_KWH)


