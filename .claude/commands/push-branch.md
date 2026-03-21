Push a designer's prototype to a branch for PM review via a Vercel preview link. Use this instead of /push-live when you want feedback before it goes live, or if /push-live flagged a conflict.

## Steps

1. Ask for the designer's slug (e.g. `erica`, `mike`, `camila`) if not already known from context.

2. Ask which prototype this is for, or derive the slug from context. Branch name format: `{designer-slug}/{prototype-slug}` (e.g. `erica/booking-flow`).

3. Create and switch to the branch:
   ```
   git checkout -b {designer-slug}/{prototype-slug}
   ```
   If the branch already exists:
   ```
   git checkout {designer-slug}/{prototype-slug}
   ```

4. Stage only this designer's files:
   ```
   git add src/pages/{designer-slug}/
   git add src/data/designers.js
   ```

5. Check if there's anything staged:
   ```
   git diff --cached --quiet
   ```
   If nothing is staged, tell the designer there's nothing new to push and stop.

6. Ask for a short description of what they're pushing. Use it as the commit message.

7. Commit and push the branch:
   ```
   git commit -m "{their description}"
   git push origin {designer-slug}/{prototype-slug}
   ```

8. Confirm success and tell them:
   > "Your branch is pushed! Vercel will generate a preview link in about a minute. It'll look something like:
   > `https://cm-design-prototypes-git-{designer-slug}-{prototype-slug}-campminder.vercel.app`
   > Share that with your PM for feedback. When you're ready to go live, run `/push-live`."
