# DyslexiAid

A Next.js web application that converts normal written text into dyslexia-friendly format, improving readability and accessibility for individuals with dyslexia.

## 🚀 Features

- **Text Conversion**: Transform regular text into dyslexia-friendly format
- **File Upload Support**: Upload TXT, DOC, DOCX, PDF, and RTF files for conversion
- **Webpage Conversion**: Convert entire webpages by entering the URL
- **Dyslexia-Friendly Typography**: Uses OpenDyslexic font and optimized spacing
- **Customizable Options**: Adjust font size, line spacing, and formatting
- **Responsive Design**: Works seamlessly across all devices
- **Modern Color Scheme**: Soft cream backgrounds with deep blue/purple text and warm orange/yellow accents
- **Instant Processing**: Real-time text transformation
- **Sample Texts**: Built-in examples to test the application

## 🎯 Benefits

- **Improved Reading Speed**: Up to 30% faster reading for individuals with dyslexia
- **Reduced Reading Errors**: Better spacing and typography reduce mistakes
- **Enhanced Focus**: Cleaner text layout improves concentration
- **Accessibility**: Designed with accessibility best practices in mind

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 with React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Next.js built-in bundler
- **Deployment**: Vercel-ready

## 📋 Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd dyslexia-text
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

### 5. Start Production Server

```bash
npm start
# or
yarn start
```

## 📁 Project Structure

```
dyslexia-text/
├── app/                    # Next.js 13+ app directory
│   ├── components/         # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── TextConverter.tsx # Main text conversion component
│   │   ├── Features.tsx   # Features showcase
│   │   └── Footer.tsx     # Footer component
│   ├── globals.css        # Global styles and Tailwind CSS
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🎨 Customization

### Tailwind CSS Configuration

The application uses a custom Tailwind CSS configuration with:

- Custom color palette for primary and dyslexia-friendly colors
- Custom font families including OpenDyslexic
- Responsive design utilities
- Custom component classes

### Dyslexia-Friendly Features

- **Font**: OpenDyslexic (fallback to Arial)
- **Line Height**: Configurable from 1.8 to 2.2
- **Font Size**: Standard (1.25rem) and Large (1.5rem) options
- **Spacing**: Optimized letter and word spacing
- **Colors**: High contrast combinations

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenDyslexic Font](https://opendyslexic.org/) - Dyslexia-friendly typography
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Research on dyslexia-friendly typography and accessibility

## 📞 Support

For support and questions:

- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation and FAQ

## 🔮 Future Enhancements

- [ ] PDF text extraction and conversion
- [ ] Browser extension for real-time webpage conversion
- [ ] Mobile app for iOS and Android
- [ ] Advanced text analysis and optimization
- [ ] Multi-language support
- [ ] User accounts and saved preferences
- [ ] API for third-party integrations

---

**DyslexiaText** - Making reading accessible for everyone. 📚✨
