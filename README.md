# 🚀 Nuxt Portfolio Template

> **Sponsored by [HostedPocket.com](https://hostedpocket.com/)** - The easiest way to host PocketBase in the cloud

A modern, responsive portfolio website built with **Nuxt 4**, **PocketBase**, and **Tailwind CSS**. Perfect for developers, designers, and professionals who want to showcase their work with a clean, performant, and SEO-optimized portfolio.

**✨ [Get other templates at NuxtMint.com](https://nuxtmint.com/)**

## 🌟 Features

- **🎨 Modern Design**: Clean, professional layout with dark/light theme support
- **📱 Fully Responsive**: Mobile-first design that looks great on all devices
- **⚡ Performance Optimized**: Built with Nuxt 4 for maximum speed and SEO
- **🗄️ Dynamic Content**: Powered by PocketBase for easy content management
- **🌙 Theme Toggle**: System preference detection with localStorage persistence
- **🔧 Type Safe**: Full TypeScript support with proper type definitions

## 🛠️ Tech Stack

- **[Nuxt 4](https://nuxt.com/)** - The Intuitive Vue Framework
- **[PocketBase](https://pocketbase.io/)** - Open source backend in 1 file
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Nuxt Icon](https://nuxt.com/modules/icon)** - Icon component with 100k+ icons

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm**
- **PocketBase** instance (local or hosted)

## 🚀 Quick Start

### 1. Clone & Install

```bash
# Clone the repository
git clone <this-repo-url>
cd nuxt-portfolio

# Install dependencies
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```bash
# Copy the example environment file
cp .env.example .env
```

Update the `.env` file with your PocketBase URL:

```env
# PocketBase Configuration
POCKETBASE_URL=http://localhost:8090
# or your hosted PocketBase URL
# POCKETBASE_URL=https://your-pocketbase-instance.hostedpocket.com

# Demo Mode (optional)
DEMO=false
```

### 3. PocketBase Setup

#### Option A: Local PocketBase

1. **Download PocketBase** from [pocketbase.io](https://pocketbase.io/)
2. **Start PocketBase**:
   ```bash
   ./pocketbase serve
   ```
3. **Access Admin Panel**: Open `http://localhost:8090/_/` and create an admin account

#### Option B: Hosted PocketBase (Recommended)

1. **Sign up** at [HostedPocket.com](https://hostedpocket.com/)
2. **Create a new instance**
3. **Update** your `.env` file with the hosted URL

### 4. Import Database Schema

1. **Open PocketBase Admin Panel** (`http://localhost:8090/_/` or your hosted URL)
2. **Go to Settings** → **Import collections**
3. **Upload** the `database/pocketbase.json` file
4. **Click Import** to create all collections

### 5. Seed the Database

We've created an automated seeding script to populate your database with sample data. This is much faster than manually entering data through the admin panel.

#### Automatic Seeding (Recommended)

1. **Add superuser credentials** to your `.env` file:

   ```env
   # Superuser credentials for seeding
   SUPERUSER_EMAIL=your-admin@example.com
   SUPERUSER_PASSWORD=your-admin-password
   ```

2. **Run the seeding script**:

   ```bash
   npm run seed
   # or
   node scripts/seed-database.js
   ```

3. **Verify the data** (optional):
   ```bash
   npm run verify
   # or
   node scripts/verify-data.js
   ```

The seeding script will create:

- **1 Profile record** - Your personal information and contact details
- **3 Experience records** - Sample work history with technologies
- **2 Education records** - Academic background and certifications
- **3 Skills categories** - Frontend, Backend, and Tools & DevOps
- **4 Project records** - Portfolio projects with GitHub/demo links

#### Manual Seeding (Alternative)

If you prefer to add data manually or customize the sample data:

1. **Open PocketBase Admin Panel** (`http://localhost:8090/_/` or your hosted URL)
2. **Navigate to Collections** and add records to each collection:
   - **profile**: Personal info, contact details, availability status
   - **experience**: Work history with job titles, companies, and technologies
   - **education**: Academic background and certifications
   - **skills**: Technical skills organized by category
   - **projects**: Portfolio projects with descriptions and links

#### Customizing Sample Data

To customize the sample data before seeding:

1. **Edit** `scripts/seed-database.js`
2. **Update** the data objects with your information
3. **Run** the seeding script with your custom data

### 6. Start Development

```bash
# Start the development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 🏗️ Project Structure

```
nuxt-portfolio/
├── app/                          # Nuxt 4 app directory
│   ├── components/              # Vue components
│   │   ├── demo/               # Demo-specific components
│   │   ├── AppHeader.vue       # Site header
│   │   ├── AppFooter.vue       # Site footer
│   │   ├── HeroSection.vue     # Hero/intro section
│   │   ├── ExperienceSection.vue
│   │   ├── EducationSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   └── ContactSection.vue
│   ├── composables/            # Vue composables
│   │   ├── usePocketBase.ts    # PocketBase integration
│   │   └── useTheme.ts         # Theme management
│   ├── pages/                  # Page components
│   │   └── index.vue           # Homepage
│   ├── types/                  # TypeScript definitions
│   │   └── index.ts            # Type definitions
│   └── app.vue                 # Root component
├── database/                   # Database configuration
│   └── pocketbase.json         # PocketBase schema export
├── public/                     # Static assets
├── server/                     # Server-side code (if needed)
├── .env.example               # Environment variables template
├── nuxt.config.ts             # Nuxt configuration
└── package.json               # Dependencies
```

## 🚀 Deployment

### Deploy to Cloudflare Pages (Recommended)

Cloudflare Pages offers excellent performance, global CDN, and seamless integration with Nuxt.

1. **Setup Wrangler Configuration**:

   ```bash
   # Copy the example wrangler config
   cp wrangler.jsonc.example wrangler.jsonc
   ```

2. **Update wrangler.jsonc** with your project details:

   ```jsonc
   {
     "name": "your-portfolio-name",
     "compatibility_date": "2024-03-01",
     "pages_build_output_dir": "./dist",
     "env": {
       "production": {
         "vars": {
           "POCKETBASE_URL": "https://your-pocketbase-url.com/",
           "SUPERUSER_PASSWORD": "your_password",
           "SUPERUSER_EMAIL": "your_email@example.com",
           "DEMO": "false"
         }
       }
     }
   }
   ```

3. **Deploy via Wrangler CLI** :

   ```bash
   # Install Wrangler CLI
   npm install -g wrangler

   # Login to Cloudflare
   wrangler login

   # Deploy
   npm run build
   npm run deploy
   ```

### Other Platforms

This Nuxt application can be deployed to any platform that supports Node.js or static hosting. Check the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more options.

## 🎨 Customization

### Styling

- **Colors**: Modify Tailwind classes in components
- **Fonts**: Update `nuxt.config.ts` to add custom fonts
- **Layout**: Adjust component structure and spacing

### Content

- **Sections**: Add/remove sections by editing `pages/index.vue`
- **Components**: Customize individual section components
- **Data**: Update content through PocketBase admin panel

### Features

- **Analytics**: Add tracking codes to `nuxt.config.ts`
- **SEO**: Customize meta tags in page components
- **Performance**: Optimize images and add lazy loading

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[HostedPocket.com](https://hostedpocket.com/)** for sponsoring this project
- **[NuxtMint.com](https://nuxtmint.com/)** for premium Nuxt templates
- **[Nuxt Team](https://nuxt.com/)** for the amazing framework
- **[PocketBase](https://pocketbase.io/)** for the simple yet powerful backend

---

**✨ [Get more premium Nuxt templates at NuxtMint.com](https://nuxtmint.com/)**
