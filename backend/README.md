## Backend Setup

1. Create and activate a Python 3.11+ virtual environment.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the FastAPI app:
   ```bash
   uvicorn backend.app:app --reload
   ```

## Environment Variables (`backend/.env`)

The backend expects a `.env` file (or equivalent environment variables) inside `backend/`. At minimum include:

```
SOLANA_ENABLED=true
SOLANA_RPC_URL=https://api.devnet.solana.com
SOLANA_KEYPAIR_PATH=FULL_PATH_TO/backend/id.json
```

- `SOLANA_KEYPAIR_PATH` must point to the Solana keypair JSON generated via `solana-keygen new` (e.g., `D:\hackathons\junction2025\Junctionhack25\backend\id.json`).
- Update `SOLANA_RPC_URL` if you use a custom RPC endpoint.
- Restart the backend after modifying `.env`.

