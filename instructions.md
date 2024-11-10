# WiFi QR Code Generator

A modern web application that generates QR codes for WiFi networks, allowing users to easily share WiFi credentials with others. When scanned with a smartphone camera, these QR codes automatically prompt users to connect to the WiFi network.

## Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component system
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### QR Code Generation
- **qrcode.react** - React component for generating QR codes

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Features

### 1. WiFi Credential Input
- Network name (SSID) input field
- Password input field with masked entry
- Encryption type selector (WPA/WPA2, WEP, None)

### 2. QR Code Generation
- Generates QR codes following the standard WiFi QR code format:
  ```
  WIFI:T:<encryption>;S:<ssid>;P:<password>;;
  ```
- High error correction level (Level H)
- 200x200px size with margins
- SVG format for crisp rendering

### 3. User Interface
- Clean, modern design
- Responsive layout
- Form validation
- Accessible form controls
- Dark mode support (prepared)

### 4. Security Features
- Client-side only processing
- Password masking
- No data storage or transmission

## Component Structure

### Layout Components
- `app/layout.tsx` - Root layout with global styles
- `app/page.tsx` - Main page component

### Feature Components
- `components/wifi-qr-generator.tsx` - Main QR code generator component

### UI Components (from shadcn/ui)
- Card
- Input
- Button
- Label
- Select

## Styling System

### Theme Configuration
- CSS variables for colors
- Dark mode ready
- Consistent spacing and typography
- Custom border radius values
- Responsive container sizes

### Utility Classes
- Tailwind CSS for responsive design
- Custom animations (accordion animations prepared)
- Flexible spacing system

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## Usage

1. Enter your WiFi network name (SSID)
2. Input the network password
3. Select the encryption type
4. Click "Generate QR Code"
5. Share the generated QR code with others
6. Users can scan the QR code with their smartphone camera to connect automatically

## Future Enhancements (Planned)
- Download QR code as PNG/SVG
- Save frequently used networks
- Custom QR code styling options
- PWA support for offline usage
- Share QR code directly to other devices 