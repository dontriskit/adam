# Asset Placeholders

This document outlines the expected assets for the Adam Drone website.

## Directory Structure

```
public/
├── drone/          - Drone imagery and 3D models
├── icons/          - UI icons and symbols
├── textures/       - Background textures and patterns
└── video/          - Video demonstrations
```

## Expected Assets

### Drone Images (`/public/drone/`)
- `hero-render.png` - Main hero section drone render (1920x1920px recommended)
- `underwater-mode.png` - Drone in submarine configuration (1200x1200px)
- `aerial-mode.png` - Drone in flight configuration (1200x1200px)
- `drone-3d-model.glb` - Optional 3D model for interactive viewing

### Icons (`/public/icons/`)
- `compass.svg` - Navigation compass icon
- `depth-icon.svg` - Underwater depth indicator
- `altitude-icon.svg` - Aerial altitude indicator
- `navigation-arrows.svg` - Directional navigation icons

### Textures (`/public/textures/`)
- `water-pattern.png` - Water/ocean texture for underwater sections
- `sky-gradient.png` - Sky gradient for aerial sections
- `topographic-bg.svg` - Topographic/expedition-themed background pattern

### Videos (`/public/video/`)
- `underwater-demo.mp4` - Underwater operation demonstration
- `aerial-demo.mp4` - Aerial flight demonstration

## Image Specifications

- **Format**: PNG for images with transparency, JPG for photos
- **Optimization**: Compress images for web (use tools like TinyPNG)
- **Naming**: Use kebab-case for consistency
- **Alt text**: Ensure all images have descriptive alt attributes

## Video Specifications

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or 1280x720
- **Duration**: 30-60 seconds recommended
- **Size**: Optimize for web (<10MB per video)

## Notes

All placeholder locations are marked in the components with dashed borders and file path indicators.
Simply add your assets to the appropriate folder and update the component imports.
