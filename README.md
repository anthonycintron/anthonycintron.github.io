# Anthony Cintron Portfolio Website

A modern, accessible, and performant portfolio website for product strategist and designer Anthony Cintron.

## Features

### Performance Optimizations
- **CSS Variables**: Centralized design system with CSS custom properties
- **Component Architecture**: Reusable components to reduce code duplication
- **Lazy Loading**: Images and iframes load only when needed
- **Service Worker**: Caching for offline functionality and faster loading
- **Font Optimization**: Preloaded critical fonts with font-display: swap
- **Responsive Images**: Optimized loading with proper sizing

### Accessibility Improvements
- **Semantic HTML**: Proper use of landmarks and headings
- **ARIA Labels**: Screen reader friendly navigation
- **Focus Management**: Visible focus indicators and skip links
- **Color Contrast**: High contrast ratios for readability
- **Reduced Motion**: Respects user's motion preferences
- **Keyboard Navigation**: Full keyboard accessibility

### Modern Web Standards
- **Mobile-First Design**: Responsive across all devices
- **Progressive Enhancement**: Works without JavaScript
- **Modern CSS**: Grid, Flexbox, and custom properties
- **Web Standards**: Valid HTML5 and CSS3
- **SEO Optimized**: Meta tags and structured data

## File Structure

```
├── css/
│   ├── variables.css      # Design system variables
│   ├── base.css          # Reset and base styles
│   ├── components.css    # Reusable components
│   └── main-updated.css  # Main stylesheet
├── components/
│   ├── header.html       # Reusable header
│   └── footer.html       # Reusable footer
├── js/
│   └── performance.js    # Performance utilities
├── sw.js                 # Service worker
└── README.md            # This file
```

## CSS Architecture

### Variables (variables.css)
- Color system with semantic naming
- Typography scale with responsive sizing
- Spacing system based on consistent units
- Transition and animation values
- Breakpoint definitions

### Base Styles (base.css)
- CSS reset and normalization
- Typography base styles
- Grid system utilities
- Accessibility helpers
- Animation preferences

### Components (components.css)
- Header and navigation
- Buttons and interactive elements
- Cards and content blocks
- Social media components
- Video and media elements

## Performance Features

### Lazy Loading
- Images load when entering viewport
- Iframes defer loading until needed
- Intersection Observer API for modern browsers

### Caching Strategy
- Service Worker caches critical resources
- Font preloading for faster text rendering
- Critical CSS inlined for above-the-fold content

### Responsive Design
- Mobile-first approach
- Flexible grid system
- Optimized for all screen sizes
- Touch-friendly interactive elements

## Accessibility Features

### Screen Reader Support
- Semantic HTML structure
- ARIA labels and descriptions
- Skip navigation links
- Proper heading hierarchy

### Keyboard Navigation
- Focus indicators on all interactive elements
- Logical tab order
- Keyboard shortcuts where appropriate

### Visual Accessibility
- High contrast color combinations
- Scalable text and interface elements
- Reduced motion support
- Print-friendly styles

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Development

### Prerequisites
- Modern web browser
- Local web server (for testing Service Worker)

### Setup
1. Clone the repository
2. Serve files through a local web server
3. Open in browser and test functionality

### Optimization Checklist
- [ ] Compress images to WebP format
- [ ] Minify CSS and JavaScript
- [ ] Implement critical CSS inlining
- [ ] Add more comprehensive error handling
- [ ] Test across different devices and browsers

## Future Enhancements

- **Image Optimization**: Convert to WebP format with fallbacks
- **Build Process**: Add Webpack or similar for asset optimization
- **Analytics**: Implement privacy-friendly analytics
- **Dark Mode**: Add system preference detection
- **Internationalization**: Support for multiple languages