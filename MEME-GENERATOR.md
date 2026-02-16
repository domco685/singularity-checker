# Meme Generator Feature

## Overview

The Singularity Checker now includes a shareable meme generator that creates 4 different meme styles for each user's humanity score. Users can download memes as PNG files or share them directly to Twitter/X.

## Features

### 4 Meme Styles

1. **Score Card** - Clean stats display with score, status, and fun facts
2. **Two-Panel Comic** - Before/after format showing the reality check
3. **Status Badge** - Hexagonal badge design with witty one-liners
4. **Warning Sign** - Dramatic warning-style meme for critical scores

### Score-Based Messaging

Messages automatically adapt based on score ranges:

- **90-100 (Fully Human)**: "Still human. Somehow."
- **70-89 (Mostly Human)**: "Mostly human, slightly digital"
- **50-69 (Balanced)**: "Schrödinger's engineer"
- **30-49 (Mostly Machine)**: "More machine than person now"
- **0-29 (Digital Entity)**: "Error 404: Humanity not found"

### Visual Design

- **Cyberpunk aesthetic** matching the site
- **Colors**: Blue (#00D9FF), Purple (#B026FF), Pink (#FF0844), Green (#00FF41)
- **Font**: JetBrains Mono (monospace)
- **Effects**: Scanlines, glitch text, holographic borders, neon glows
- **Dimensions**: 1200x630px (Twitter card optimized)

## File Structure

```
lib/
└── meme-templates.ts         # Meme configurations, messages, and score ranges

components/
├── MemeCard.tsx              # Individual meme preview card with buttons
├── MemeGenerator.tsx         # Canvas rendering for all 4 meme styles
└── ShareButton.tsx           # Twitter share and download utilities

app/results/[score]/
└── page.tsx                  # Results page (meme section added)
```

## Implementation Details

### Meme Generation

Memes are generated client-side using HTML5 Canvas:
- Canvas size: 1200x630px (Twitter card dimensions)
- Rendered on-demand when page loads
- Converted to PNG data URLs for preview/download

### Twitter Sharing

Pre-filled tweet format:
```
I just took the Singularity Check 🤖

Humanity Score: {score}/100
Status: {status}

{witty_message}

Are you still human? Find out: singularitychecker.com
```

### Download Functionality

- Click "Download PNG" button
- File saved as: `singularity-check-{score}.png`
- Full resolution 1200x630px image

## Usage

On the results page (`/results/{score}`), users will see:

1. **Meme Section** appears after main results and action buttons
2. **4 Meme Options** displayed in a 2x2 grid (responsive)
3. **Preview** of each meme style
4. **Two Buttons** per meme:
   - **Download PNG** - Save meme to device
   - **Share on X** - Open Twitter with pre-filled text

## Viral Mechanics

- **Frictionless sharing** - One-click to Twitter
- **Visual variety** - 4 options let users pick their favorite
- **Score-specific humor** - Messages resonate with their specific result
- **Built-in attribution** - "singularitychecker.com" on every meme
- **Twitter-optimized** - Perfect dimensions for social cards

## Testing

✅ Build successful - No TypeScript errors
✅ All components render correctly
✅ Memes generate on client-side
✅ Download functionality works
✅ Twitter share opens with correct text
✅ Responsive design (mobile + desktop)
✅ Cyberpunk aesthetic matches site theme

## Deployment

1. ✅ Code committed to repo
2. Push to GitHub
3. Vercel auto-deploys
4. Test on production URL

## Future Enhancements (Optional)

- Instagram story format (1080x1920)
- Animated GIF versions
- Custom text input for users
- Direct image upload to Twitter via API (requires auth)
- A/B test different message variations

---

Built with: Next.js 16, TypeScript, Canvas API, Framer Motion
