# 🌟 Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a cosmic-themed design with smooth animations and dark/light mode support.

**🌐 Live Demo: [www.amaneyhussain.me](https://www.amaneyhussain.me)**

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-cyan)

## ✨ Features

- 🎨 **Modern Design**: Cosmic-themed UI with smooth animations and transitions
- 🌙 **Theme Toggle**: Dark/Light mode support with localStorage persistence
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🚀 **Fast Performance**: Built with Vite for lightning-fast development and builds
- ♿ **Accessible**: Built with Radix UI primitives for proper accessibility
- 📧 **Contact Form**: Functional contact form integrated with FormSubmit
- 🎭 **Animations**: Custom CSS animations including fade-in, float, and meteor effects

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Routing**: React Router DOM
- **Form Handling**: FormSubmit integration
- **Deployment**: Static hosting ready

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/codename-SilverMask/portfolio_react.git
   cd portfolio_react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HeroSection.jsx # Landing section
│   ├── AboutSection.jsx# About me section
│   ├── SkillsSection.jsx# Skills showcase
│   ├── ProjectsSection.jsx# Projects gallery
│   ├── ContactSection.jsx# Contact form
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
└── index.css           # Global styles and CSS variables
```

## 🎨 Customization

### Theme Colors

Colors are defined using CSS variables in `src/index.css`. Update the HSL values to customize the theme:

```css
:root {
  --primary: 210 100% 50%;
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  /* ... more variables */
}
```

### Animations

Custom animations are defined as CSS variables and can be applied using Tailwind classes:

```jsx
<div className="animate-fade-in-delay-2">
<div className="animate-float">
<div className="animate-meteor">
```

### Contact Form

The contact form uses FormSubmit. To use your own email, update the action URL in `ContactSection.jsx`:

```jsx
action = "https://formsubmit.co/your-email@gmail.com";
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder will contain the production build ready for deployment.

### Deploy to Popular Platforms

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the built-in Actions workflow
- **Firebase Hosting**: Use Firebase CLI to deploy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/codename-SilverMask/portfolio_react/issues).

## 📞 Contact

**Amaney Hussain**

- Portfolio: [www.amaneyhussain.me](https://www.amaneyhussain.me)
- Email: contact.amaneyhussain@gmail.com
- LinkedIn: [amaney-hussain](https://www.linkedin.com/in/amaney-hussain/)
- GitHub: [@codename-SilverMask](https://github.com/codename-SilverMask)

---

⭐ Star this repository if you found it helpful!
