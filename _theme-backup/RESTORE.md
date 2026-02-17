# Theme Restore Instructions

To restore the original dark theme, copy these files back to their original locations:

```bash
cp _theme-backup/globals.css styles/globals.css
cp _theme-backup/ThemeProvider.tsx components/theme/ThemeProvider.tsx
cp _theme-backup/layout.tsx app/layout.tsx
cp _theme-backup/manifest.json public/manifest.json
cp _theme-backup/Navbar.tsx components/layout/Navbar.tsx
cp _theme-backup/Footer.tsx components/layout/Footer.tsx
cp _theme-backup/Button.tsx components/ui/Button.tsx
```

Then revert all other component and page file changes via git:
```bash
git checkout -- components/ui/ components/sections/ app/
```
