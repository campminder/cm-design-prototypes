# Archive Prototype

Archive a prototype from this designer's campsite. This hides it in the UI but keeps the files in the repo.

## Steps

1. Ask the designer which prototype they want to archive (by name or slug).

2. Find their entry in `src/data/designers.js` and add `archived: true` to the prototype object. For example:
   ```js
   { name: 'My Prototype', slug: 'my-prototype', component: 'MyPrototype', description: '...', archived: true }
   ```

3. Confirm the change and let them know:
   - The prototype is now hidden on their campsite
   - The files are still in the repo at `src/pages/{slug}/{Component}/`
   - To fully delete it, they can remove the folder and the entry from `designers.js`

4. Ask if they want to commit and push so the change goes live on Vercel.
   If yes, stage only `src/data/designers.js`, commit with a clear message, and push to main.
