# Professional Portfolio Website

A beautiful and modern portfolio website built with Next.js, designed to showcase professional experience, skills, and expertise to potential employers.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Contact Form**: Functional contact form with API integration
- **Dark Theme**: Professional dark theme with accent colors
- **Smooth Animations**: Framer Motion animations for engaging UX
- **Easy to Customize**: Simple structure for easy content updates

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Professional background and key highlights
3. **Skills Section**: Technical and soft skills with visual progress bars
4. **Experience Section**: Professional timeline with achievements
5. **Contact Section**: Contact form and information
6. **Footer**: Social links and quick navigation

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

Edit the following files to customize the content:

1. **src/app/layout.js** - Update metadata (title, description)
2. **src/components/Hero.js** - Update name, title, and introduction
3. **src/components/About.js** - Update professional background and highlights
4. **src/components/Skills.js** - Update skills and expertise levels
5. **src/components/Experience.js** - Update work experience and certifications
6. **src/components/Contact.js** - Update contact information

### Update Colors

Modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Update these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Add Profile Picture

Replace the placeholder in `src/components/Hero.js` with an actual image:

```jsx
<Image 
  src="/profile.jpg" 
  alt="Profile" 
  width={160} 
  height={160}
  className="rounded-full"
/>
```

## 📧 Email Integration (Optional)

To enable email notifications for contact form submissions:

1. Sign up for an email service (SendGrid, Resend, etc.)
2. Get your API key
3. Create `.env.local` file:
   ```
   SENDGRID_API_KEY=your_api_key_here
   CONTACT_EMAIL=uncle@example.com
   ```
4. Uncomment the email code in `src/app/api/contact/route.js`

## 🚀 Deployment to Vercel

### Method 1: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings (Next.js will be auto-detected)
6. Click "Deploy"

### Custom Domain

After deployment, you can add a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

Vercel automatically handles:
- ✅ SSL/TLS certificates
- ✅ CDN distribution
- ✅ Automatic deployments on git push
- ✅ Preview deployments for branches

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Support

For issues or questions, please open an issue in the repository.

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ using Next.js and Tailwind CSS**
