Start the local Vite dev server for the design prototype hub.

## Steps

1. Kill any existing Vite process on port 5173:
   ```
   lsof -ti :5173 | xargs kill -9 2>/dev/null || true
   ```

2. Start the dev server in the background:
   ```
   npm run dev
   ```

3. Tell the user the server is running and to open:
   `http://localhost:5173`
