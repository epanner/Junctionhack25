USER_PROFILE = {
    "id": "user_001",
    "name": "John Driver",
    "email": "john.driver@email.com",
    "memberSince": "Jan 2024",
    "totalSessions": 47,
    "totalEnergyCharged": 1240,
    "didVerified": True,
    "walletConnected": True,
}

USER_STATISTICS = {
    "totalSessions": 47,
    "totalEnergyCharged": 1240,
    "totalSpent": 218,
    "averageMonthlyUsage": 155,
}


def get_user_profile() -> dict:
    return USER_PROFILE


def get_user_statistics() -> dict:
    return USER_STATISTICS


