from typing import Any, Dict, Optional

BATTERY_SOH_RECORDS = [
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:883c83bd37b342a9b8dda5",
            "packUniqueId": "urn:uuid:97eff5ad-d828-4f14-a7d6-555fe918c64d",
            "previousSOHVal": "93.0",
            "previousSOHTimeStamp": "2025-04-18T23:28:49.481298Z",
            "newSOHVal": "94.2",
            "newSOHTimeStamp": "2025-05-06T18:07:49.481277Z",
            "chargeCycles": "834",
            "impedance": "5.52",
            "maxCapacity": "74.7",
            "batteryAge": "P2Y6M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:4c622a42593f4763b0a7a8",
            "packUniqueId": "urn:uuid:72cbfea6-6c3a-4ec6-9751-35230764a80a",
            "previousSOHVal": "90.19999999999999",
            "previousSOHTimeStamp": "2025-06-06T14:39:49.481699Z",
            "newSOHVal": "92.1",
            "newSOHTimeStamp": "2025-06-06T19:48:49.481686Z",
            "chargeCycles": "676",
            "impedance": "5.44",
            "maxCapacity": "73.6",
            "batteryAge": "P6Y6M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:c2e8da3cf5db40a59c2652",
            "packUniqueId": "urn:uuid:08a8b6df-0cb5-47b6-b593-996ce312453d",
            "previousSOHVal": "75.5",
            "previousSOHTimeStamp": "2025-04-29T15:52:49.481798Z",
            "newSOHVal": "76.4",
            "newSOHTimeStamp": "2025-07-03T00:30:49.481787Z",
            "chargeCycles": "669",
            "impedance": "4.51",
            "maxCapacity": "74.6",
            "batteryAge": "P3Y6M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:7cd0664cb3184ecaa60ad8",
            "packUniqueId": "urn:uuid:ce1e25da-1a75-472c-bd58-c5a7325dad58",
            "previousSOHVal": "79.2",
            "previousSOHTimeStamp": "2025-08-08T01:19:49.481848Z",
            "newSOHVal": "80.9",
            "newSOHTimeStamp": "2025-09-03T00:34:49.481841Z",
            "chargeCycles": "762",
            "impedance": "3.44",
            "maxCapacity": "71.3",
            "batteryAge": "P5Y7M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:c68695402a9b4e9b988184",
            "packUniqueId": "urn:uuid:7133efe1-854e-46c9-b890-81c41e3980e8",
            "previousSOHVal": "72.6",
            "previousSOHTimeStamp": "2025-04-29T18:19:49.481885Z",
            "newSOHVal": "70.69999999999999",
            "newSOHTimeStamp": "2025-06-09T12:08:49.481891Z",
            "chargeCycles": "902",
            "impedance": "5.29",
            "maxCapacity": "71.6",
            "batteryAge": "P3Y6M",
            "_autoCorrected": False,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:4bb0d1223e9f49aba61983",
            "packUniqueId": "urn:uuid:69439ffe-68a9-4418-a70a-364a350d951b",
            "previousSOHVal": "76.3",
            "previousSOHTimeStamp": "2025-08-06T04:21:49.481935Z",
            "newSOHVal": "77.3",
            "newSOHTimeStamp": "2025-08-11T05:12:49.481928Z",
            "chargeCycles": "776",
            "impedance": "6.11",
            "maxCapacity": "60.8",
            "batteryAge": "P6Y5M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:b885d5390a884fe9b93a68",
            "packUniqueId": "urn:uuid:a4695a87-46d8-4360-b2df-37ca912d43d6",
            "previousSOHVal": "88.2",
            "previousSOHTimeStamp": "2025-07-24T11:41:49.481971Z",
            "newSOHVal": "88.0",
            "newSOHTimeStamp": "2025-09-07T19:15:49.481977Z",
            "chargeCycles": "921",
            "impedance": "3.79",
            "maxCapacity": "60.9",
            "batteryAge": "P7Y6M",
            "_autoCorrected": False,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:c8205f7453904bd6b7731e",
            "packUniqueId": "urn:uuid:955432d5-08d6-463e-8dd2-467bf2dfd967",
            "previousSOHVal": "75.4",
            "previousSOHTimeStamp": "2025-05-18T11:54:49.482011Z",
            "newSOHVal": "74.80000000000001",
            "newSOHTimeStamp": "2025-06-24T15:48:49.482017Z",
            "chargeCycles": "1195",
            "impedance": "5.57",
            "maxCapacity": "68.1",
            "batteryAge": "P7Y5M",
            "_autoCorrected": False,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:e918a02227df44c0be49b3",
            "packUniqueId": "urn:uuid:b6514f6a-f1ef-4e31-8552-b448f0e89da5",
            "previousSOHVal": "77.8",
            "previousSOHTimeStamp": "2025-06-27T19:52:49.482111Z",
            "newSOHVal": "77.3",
            "newSOHTimeStamp": "2025-10-05T08:40:49.482121Z",
            "chargeCycles": "779",
            "impedance": "5.08",
            "maxCapacity": "55.7",
            "batteryAge": "P5Y7M",
            "_autoCorrected": False,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:4d45aa2840bd46cbb08fc9",
            "packUniqueId": "urn:uuid:bf9d3331-4d48-4584-8f87-f3eec8dbce35",
            "previousSOHVal": "78.10000000000001",
            "previousSOHTimeStamp": "2025-08-11T00:04:49.482173Z",
            "newSOHVal": "79.2",
            "newSOHTimeStamp": "2025-08-14T01:21:49.482167Z",
            "chargeCycles": "1071",
            "impedance": "5.79",
            "maxCapacity": "71.5",
            "batteryAge": "P8Y3M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:76474e50562b40608de094",
            "packUniqueId": "urn:uuid:cd122d5d-9e56-4803-ae98-4256b967a3b4",
            "previousSOHVal": "80.9",
            "previousSOHTimeStamp": "2025-08-31T05:57:49.482222Z",
            "newSOHVal": "79.30000000000001",
            "newSOHTimeStamp": "2025-09-10T14:29:49.482229Z",
            "chargeCycles": "594",
            "impedance": "3.1",
            "maxCapacity": "62.7",
            "batteryAge": "P3Y0M",
            "_autoCorrected": False,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:dc8bc6d313fd4d1ca79e90",
            "packUniqueId": "urn:uuid:fd9ba1bd-0137-429e-b9aa-2c636eea0523",
            "previousSOHVal": "77.7",
            "previousSOHTimeStamp": "2025-05-20T04:16:49.482265Z",
            "newSOHVal": "77.9",
            "newSOHTimeStamp": "2025-08-18T03:41:49.482259Z",
            "chargeCycles": "763",
            "impedance": "4.75",
            "maxCapacity": "60.3",
            "batteryAge": "P8Y9M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:181302c73d9a4f319b744a",
            "packUniqueId": "urn:uuid:e77f6bdb-16e7-40b4-9294-99a1dbb7f68d",
            "previousSOHVal": "76.2",
            "previousSOHTimeStamp": "2025-08-29T15:52:49.482303Z",
            "newSOHVal": "76.0",
            "newSOHTimeStamp": "2025-09-23T08:53:49.482308Z",
            "chargeCycles": "443",
            "impedance": "4.14",
            "maxCapacity": "58.0",
            "batteryAge": "P4Y7M",
            "_autoCorrected": False,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:38085fde0c644a34ac48da",
            "packUniqueId": "urn:uuid:5c93d31a-69e0-4871-9626-d873d016168d",
            "previousSOHVal": "89.7",
            "previousSOHTimeStamp": "2025-05-30T17:10:49.482341Z",
            "newSOHVal": "88.0",
            "newSOHTimeStamp": "2025-08-15T11:15:49.482348Z",
            "chargeCycles": "444",
            "impedance": "5.83",
            "maxCapacity": "59.4",
            "batteryAge": "P8Y4M",
            "_autoCorrected": False,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:4e50aae94d2842828c130f",
            "packUniqueId": "urn:uuid:abd84721-c6c3-41ea-b771-c38a181b046f",
            "previousSOHVal": "79.39999999999999",
            "previousSOHTimeStamp": "2025-07-29T21:27:49.482385Z",
            "newSOHVal": "80.1",
            "newSOHTimeStamp": "2025-08-20T08:07:49.482379Z",
            "chargeCycles": "1105",
            "impedance": "4.78",
            "maxCapacity": "64.6",
            "batteryAge": "P2Y2M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:bc3c20ed3ba0428783ebe9",
            "packUniqueId": "urn:uuid:685f8451-6921-473b-b60d-297c9ccc12f4",
            "previousSOHVal": "87.5",
            "previousSOHTimeStamp": "2025-05-01T05:20:49.482423Z",
            "newSOHVal": "88.2",
            "newSOHTimeStamp": "2025-07-31T09:29:49.482418Z",
            "chargeCycles": "710",
            "impedance": "5.22",
            "maxCapacity": "61.9",
            "batteryAge": "P7Y7M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:2a50f4e85e3c40f7865162",
            "packUniqueId": "urn:uuid:161cb2a6-631c-42c0-bccf-adc56696d6a8",
            "previousSOHVal": "78.6",
            "previousSOHTimeStamp": "2025-07-17T09:14:49.482455Z",
            "newSOHVal": "76.8",
            "newSOHTimeStamp": "2025-10-10T22:18:49.482461Z",
            "chargeCycles": "382",
            "impedance": "3.07",
            "maxCapacity": "67.2",
            "batteryAge": "P7Y9M",
            "_autoCorrected": False,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:61a2737e793644a5a714b2",
            "packUniqueId": "urn:uuid:1a4ceb0a-12a8-400d-8617-a6758d0465eb",
            "previousSOHVal": "82.30000000000001",
            "previousSOHTimeStamp": "2025-05-23T23:33:49.482504Z",
            "newSOHVal": "83.9",
            "newSOHTimeStamp": "2025-06-22T00:33:49.482497Z",
            "chargeCycles": "970",
            "impedance": "5.01",
            "maxCapacity": "66.8",
            "batteryAge": "P5Y11M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:494eea60985e45c5819baa",
            "packUniqueId": "urn:uuid:2157e1a0-057f-438b-ac57-236a2ef8055d",
            "previousSOHVal": "88.89999999999999",
            "previousSOHTimeStamp": "2025-06-10T12:55:49.482541Z",
            "newSOHVal": "90.1",
            "newSOHTimeStamp": "2025-08-18T09:50:49.482536Z",
            "chargeCycles": "974",
            "impedance": "3.33",
            "maxCapacity": "59.7",
            "batteryAge": "P6Y6M",
            "_autoCorrected": True,
        }
    },
    {
        "credentialSubject": {
            "type": "BatterySOH",
            "batteryId": "did:itn:6a9b03233ddb4b699e3246",
            "packUniqueId": "urn:uuid:c700084e-1ec7-40eb-ad17-6bcda45d9287",
            "previousSOHVal": "92.7",
            "previousSOHTimeStamp": "2025-05-08T05:02:49.482578Z",
            "newSOHVal": "94.0",
            "newSOHTimeStamp": "2025-06-03T10:17:49.482573Z",
            "chargeCycles": "450",
            "impedance": "5.56",
            "maxCapacity": "56.4",
            "batteryAge": "P6Y7M",
            "_autoCorrected": True,
        }
    },
]


def _build_index() -> Dict[str, Dict[str, Any]]:
    index: Dict[str, Dict[str, Any]] = {}
    for record in BATTERY_SOH_RECORDS:
        subject = record.get("credentialSubject", {})
        battery_id = subject.get("batteryId")
        if battery_id:
            index[battery_id] = subject
    return index


BATTERY_SOH_INDEX = _build_index()


def get_latest_battery_soh(battery_id: str) -> Optional[Dict[str, Any]]:
    """
    Returns the newest BatterySOH credential for the given battery ID, if available.
    """
    subject = BATTERY_SOH_INDEX.get(battery_id)
    return dict(subject) if subject else None


def get_soh_capacity_kwh(battery_id: str) -> Optional[float]:
    """
    Extracts the maxCapacity (in kWh) from the SOH data when present.
    """
    subject = BATTERY_SOH_INDEX.get(battery_id)
    if not subject:
        return None

    try:
        return float(subject.get("maxCapacity"))
    except (TypeError, ValueError):
        return None

