Set up the Figma MCP server so Claude can read Figma files directly.

## Steps

1. Tell the user they'll need a **Figma personal access token**. Ask them to:
   - Go to figma.com → click their avatar (top-right) → **Settings**
   - Scroll to **Personal access tokens** → click **Generate new token**
   - Give it a name (e.g. "Claude MCP"), set expiration if desired
   - Copy the token — they'll only see it once

2. Once they have the token, run this command (substituting their actual token):
   ```
   claude mcp add figma -s user -e FIGMA_API_KEY=<their-token> -- npx -y figma-developer-mcp
   ```
   - `-s user` stores it in their personal Claude settings (not the shared project), so they don't accidentally commit their token
   - Run this in the project directory or anywhere — it's user-scoped

3. Verify it was added:
   ```
   claude mcp list
   ```
   They should see `figma` in the list.

4. Tell them to **restart Claude Code** for the MCP server to connect.

5. After restarting, they can test it by asking Claude:
   > "Can you read this Figma file? [paste a Figma URL]"

## Notes

- The token is stored in their local user settings (`~/.claude/settings.json`), not in the repo
- If the token expires, they'll need to generate a new one and re-run step 2
- The MCP gives Claude access to read Figma file structure, components, and properties — useful for matching designs to prototypes
