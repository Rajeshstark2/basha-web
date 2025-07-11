# Logo Setup Instructions

## Adding Your PNG Logo

1. **Place your logo file here**: `public/images/logo.png`
2. **Recommended specifications**:
   - Format: PNG with transparent background
   - Size: 200x200 pixels (minimum)
   - Style: Should work well with dark backgrounds
   - Colors: Preferably white or light colors to contrast with dark theme

## Logo Features

- **Automatic fallback**: If logo.png is not found, it will show the sparkles icon
- **Responsive sizing**: Automatically scales for different screen sizes
- **Glassmorphism effect**: Semi-transparent background with blur
- **Hover effects**: Glows on hover
- **Fixed positioning**: Stays in top-left corner while scrolling

## Current Logo Component

The logo component supports:
- **Image mode**: Uses your PNG logo
- **Icon mode**: Uses sparkles icon as fallback
- **Multiple sizes**: sm, md, lg
- **Custom styling**: Accepts className props

## File Structure
```
public/
└── images/
    ├── logo.png (your logo file here)
    └── README.md (this file)
``` 