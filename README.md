# Professional Portfolio

A modern, animated portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring the elegant design and animations from the 21 Dev MCP template.

## Features

- ✨ **Elegant Animations**: Smooth Framer Motion animations throughout
- 🎨 **Modern Design**: Professional dark theme with gradient accents
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 🎯 **SEO Ready**: Proper meta tags and semantic HTML
- 🔧 **Easy Customization**: Simple data structure for personalization

## Sections

- **Hero**: Eye-catching landing section with animated geometric shapes
- **About**: Personal introduction and professional summary
- **Skills**: Categorized technical skills with progress indicators
- **Projects**: Featured and additional project showcases
- **Experience**: Professional work history and education
- **Contact**: Contact information and social links

## Customization

### 1. Personal Information

Edit the `portfolioData` object in `src/app/page.tsx`:

```typescript
const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  description: "Your professional description...",
  experience: "X+ Years Experience",
  location: "Your Location",
  // ... rest of your data
};
```

### 2. Skills

Update the skills array with your technical expertise:

```typescript
skills: [
  { name: "React", level: 95, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  // Add more skills...
],
```

### 3. Projects

Add your projects to showcase your work:

```typescript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "TypeScript", "Tailwind"],
    image: "/project-image.jpg",
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true, // Set to true for featured projects
  },
  // Add more projects...
],
```

### 4. Experience & Education

Update your professional experience and education:

```typescript
experiences: [
  {
    title: "Your Job Title",
    company: "Company Name",
    location: "Location",
    startDate: "2022",
    endDate: "Present",
    description: [
      "Key achievement 1",
      "Key achievement 2",
      "Key achievement 3",
    ],
    technologies: ["React", "Node.js", "AWS"],
  },
  // Add more experiences...
],
```

### 5. Contact Information

Update your contact details:

```typescript
contactInfo: {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your Location",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername",
},
```

### 6. Styling

The portfolio uses a consistent color scheme with:
- Primary background: `#030303` (dark)
- Accent colors: Indigo, Rose, Violet, Amber, Cyan gradients
- Text: White with various opacity levels

You can customize colors by modifying the gradient classes in the components.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **shadcn/ui** - UI components

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

Built with ❤️ using the 21 Dev MCP template