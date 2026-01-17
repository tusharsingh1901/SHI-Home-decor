# Elegant Curtains - Premium Home Décor Website

A luxurious, aesthetic website for showcasing premium curtains and fabrics. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Premium Design**: Minimal, elegant UI with soft colors, whitespace, and smooth animations
- **40 Fabric Collections**: Each with high-quality images, descriptions, texture details, and use-cases
- **Interactive Filters**: Filter fabrics by type, room, opacity, and color tone
- **Responsive Design**: Mobile-first approach ensuring beautiful experience on all devices
- **Smooth Animations**: Scroll-based reveals, hover effects, and transitions using Framer Motion
- **Complete Pages**:
  - Home with hero section and brand story
  - Fabric Collection with filtering
  - Product Detail pages
  - About Us page
  - Contact/Enquiry form

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable components (Navigation, Footer)
├── pages/          # Page components (Home, FabricCollection, etc.)
├── data/           # Fabric data and collections
├── types/          # TypeScript type definitions
├── App.tsx         # Main app component with routing
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
- `cream` - Warm cream tones
- `sage` - Natural sage greens
- `taupe` - Elegant taupe grays

### Fabrics

Add or modify fabrics in `src/data/fabrics.ts`. Each fabric includes:
- Name and description
- Type, opacity, color tone
- Room types and texture feel
- Styling suggestions
- Images

### Typography

Fonts are loaded from Google Fonts:
- **Playfair Display** - Serif headings
- **Inter** - Sans-serif body text

## Features in Detail

### Fabric Filtering

Users can filter fabrics by:
- **Type**: Sheer, Blackout, Semi-Sheer, Thermal, Decorative
- **Room**: Living Room, Bedroom, Dining Room, Kitchen, Bathroom, Office, Nursery
- **Opacity**: Sheer, Semi-Sheer, Blackout
- **Color Tone**: Warm, Cool, Neutral

### Animations

- Scroll-triggered animations using Framer Motion
- Hover effects on fabric cards
- Smooth page transitions
- Staggered animations for lists

## Browser Support

Modern browsers that support:
- ES6+
- CSS Grid
- Flexbox

## License

This project is created for Elegant Curtains business use.
