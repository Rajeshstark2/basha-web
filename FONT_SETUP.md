# Bucklane Font Setup Guide

## How to Add Bucklane Font Files

The Bucklane font is now configured to load from local files. To complete the setup:

### 1. Download Bucklane Font Files
You need to download the Bucklane font files and place them in the `public/fonts/` directory.

Required files:
- `Bucklane-Regular.woff2`
- `Bucklane-Regular.woff`
- `Bucklane-Regular.ttf`
- `Bucklane-Medium.woff2`
- `Bucklane-Medium.woff`
- `Bucklane-Medium.ttf`
- `Bucklane-SemiBold.woff2`
- `Bucklane-SemiBold.woff`
- `Bucklane-SemiBold.ttf`
- `Bucklane-Bold.woff2`
- `Bucklane-Bold.woff`
- `Bucklane-Bold.ttf`

### 2. File Structure
Your `public/fonts/` directory should look like this:
```
public/
└── fonts/
    ├── Bucklane-Regular.woff2
    ├── Bucklane-Regular.woff
    ├── Bucklane-Regular.ttf
    ├── Bucklane-Medium.woff2
    ├── Bucklane-Medium.woff
    ├── Bucklane-Medium.ttf
    ├── Bucklane-SemiBold.woff2
    ├── Bucklane-SemiBold.woff
    ├── Bucklane-SemiBold.ttf
    ├── Bucklane-Bold.woff2
    ├── Bucklane-Bold.woff
    └── Bucklane-Bold.ttf
```

### 3. Where to Get Bucklane Font
- Check if Bucklane is available on Google Fonts
- Look for it on font marketplaces like MyFonts, Fontspring, or Creative Market
- Contact the font designer directly if it's a custom font

### 4. Current Usage
The Bucklane font is currently applied to:
- **Certificates Section**: "Certifications" heading

### 5. Font Classes Available
- `font-bucklane` - Basic Bucklane font family
- `font-bucklane font-bold` - Bold weight
- `font-bucklane font-semibold` - Semi-bold weight
- `bucklane-heading` - Custom CSS class with optimized typography

### 6. Fallback
If Bucklane font files are not found, the browser will fall back to the system's default sans-serif font.

## Alternative: Use a Similar Font
If you can't find Bucklane, you can replace it with a similar elegant font like:
- Playfair Display (already configured)
- Merriweather
- Lora
- Source Serif Pro

Just update the `@font-face` declarations in `src/index.css` and the font family in `tailwind.config.ts`. 