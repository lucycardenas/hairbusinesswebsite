# Belle Hair Studio - Static Website

This is a static HTML/CSS/JS website that works anywhere without needing any build tools or frameworks.

## Files Included

- `index.html` - Home page
- `services.html` - Services page
- `portfolio.html` - Portfolio page
- `booking.html` - Booking page
- `contact.html` - Contact page
- `styles.css` - All styling
- `script.js` - JavaScript for interactivity

## How to Use

### Option 1: Open Directly in Browser
Simply open any HTML file in your web browser by double-clicking it or using File > Open in your browser.

### Option 2: Host on Any Web Server
Upload all files to any web hosting service:
- Upload all files to your web hosting root directory
- Access via your domain (e.g., https://yourdomain.com)

### Option 3: Local Development Server
If you want to test locally with a simple server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000` in your browser.

**Using Node.js (if installed):**
```bash
npx http-server
```

### Option 4: Popular Hosting Services
These files can be deployed to:
- **Netlify**: Drag and drop the folder
- **Vercel**: Deploy via CLI or web interface
- **GitHub Pages**: Push to a repository and enable Pages
- **Surge.sh**: Simple command-line deployment
- **Any traditional web hosting** (GoDaddy, Bluehost, etc.)

## Features

- ✅ No build process required
- ✅ No dependencies
- ✅ Works in all modern browsers
- ✅ Mobile responsive
- ✅ Custom color scheme (#6F4D24, #FF9ACC, #FFF7C6, #FFFFFF)
- ✅ Professional minimalist design
- ✅ Form validation
- ✅ Interactive mobile menu
- ✅ Booking system (frontend only)
- ✅ Contact form (frontend only)

## Customization

### Colors
Edit the CSS variables in `styles.css` (lines 11-16):
```css
:root {
    --color-brown: #6F4D24;
    --color-pink: #FF9ACC;
    --color-cream: #FFF7C6;
    --color-white: #FFFFFF;
    --color-border: rgba(111, 77, 36, 0.1);
    --color-text: #6F4D24;
    --color-text-light: rgba(111, 77, 36, 0.7);
}
```

### Content
Simply edit the HTML files to change text, images, or structure.

### Images
All images are currently using Unsplash URLs. Replace these with your own images by updating the `src` attributes in the HTML files.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Forms currently show success messages but don't send data anywhere
- To make forms functional, you'll need to add backend integration or use a service like:
  - Formspree
  - Netlify Forms
  - Google Forms
  - EmailJS
  - Your own backend API

## License

Feel free to use and customize for your hair business!
