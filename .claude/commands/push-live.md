Push a designer's prototype to main so it goes live on Vercel.

## Steps

1. Ask for the designer's slug (e.g. `erica`, `mike`, `camila`) if not already known from context.

2. Pull latest from main to avoid overriding anyone else's work:
   ```
   git pull origin main
   ```
   - If there are merge conflicts, STOP. Tell the designer:
     > "There are conflicts with changes someone else pushed. Use `/push-branch` instead to share your work as a preview link — I'll flag it for Erica to merge safely."
   - Do not attempt to resolve conflicts automatically.

3. Stage only this designer's files:
   ```
   git add src/pages/{designer-slug}/
   git add src/data/designers.js
   ```

4. Check if there's anything staged:
   ```
   git diff --cached --quiet
   ```
   If nothing is staged, tell the designer there's nothing new to push and stop.

5. Ask for a short description of what they're pushing (e.g. "Add booking flow prototype"). Use it as the commit message.

6. Commit and push:
   ```
   git commit -m "{their description}"
   git push origin main
   ```

7. Confirm success and tell them:
   > "You're live! Vercel will deploy in about a minute. Share this link with your PM: https://cm-design-prototypes.vercel.app/{designer-slug}"
