import PocketBase from 'pocketbase';
import { config } from 'dotenv';

// Load environment variables
config();

const POCKETBASE_URL = process.env.POCKETBASE_URL;
const SUPERUSER_EMAIL = process.env.SUPERUSER_EMAIL;
const SUPERUSER_PASSWORD = process.env.SUPERUSER_PASSWORD;

const pb = new PocketBase(POCKETBASE_URL);

async function seedDatabase() {
  try {
    console.log('🔐 Authenticating with PocketBase...');

    // Authenticate as superuser
    const authData = await pb
      .collection('_superusers')
      .authWithPassword(SUPERUSER_EMAIL, SUPERUSER_PASSWORD);

    console.log('✅ Authentication successful!');
    console.log('🔑 Token:', pb.authStore.token ? 'Valid' : 'Invalid');
    console.log('👤 User ID:', pb.authStore.record?.id || 'Unknown');

    // Seed Profile Data
    console.log('\n📝 Seeding Profile data...');
    try {
      const profileData = {
        name: 'Your Name',
        title: 'Senior Full Stack Developer',
        description:
          'Passionate developer with 5+ years of experience creating scalable web applications and leading development teams. Specialized in modern JavaScript frameworks and cloud technologies.',
        email: 'your.email@example.com',
        phone: '+1 (234) 567-890',
        location: 'New York, NY',
        linkedin: 'https://linkedin.com/in/yourprofile',
        github: 'https://github.com/yourusername',
        twitter: 'https://twitter.com/yourusername',
        available: true,
      };

      const profile = await pb.collection('profile').create(profileData);
      console.log('✅ Profile created:', profile.id);
    } catch (error) {
      console.log('⚠️ Profile already exists or error:', error.message);
    }

    // Seed Experience Data
    console.log('\n💼 Seeding Experience data...');
    const experienceData = [
      {
        title: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        period: '2022 - Present',
        description:
          'Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
        technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
        order: 1,
      },
      {
        title: 'Full Stack Developer',
        company: 'Digital Agency Co.',
        period: '2020 - 2022',
        description:
          'Built responsive web applications for diverse clients. Collaborated with design teams to implement pixel-perfect interfaces.',
        technologies: ['Vue.js', 'Express', 'MongoDB', 'Tailwind CSS'],
        order: 2,
      },
      {
        title: 'Frontend Developer',
        company: 'StartupXYZ',
        period: '2019 - 2020',
        description:
          'Developed user interfaces for SaaS platform. Improved application performance by 40% through code optimization.',
        technologies: ['React', 'TypeScript', 'Redux', 'Sass'],
        order: 3,
      },
    ];

    for (const exp of experienceData) {
      try {
        const experience = await pb.collection('experience').create(exp);
        console.log('✅ Experience created:', experience.title);
      } catch (error) {
        console.log('⚠️ Experience error:', error.message);
      }
    }

    // Seed Education Data
    console.log('\n🎓 Seeding Education data...');
    const educationData = [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology • Boston, MA',
        period: '2014 - 2018',
        description:
          'Graduated Magna Cum Laude. Focused on software engineering, algorithms, and data structures.',
        achievements: ['GPA: 3.8/4.0', "Dean's List"],
        order: 1,
      },
      {
        degree: 'Web Development Bootcamp',
        school: 'CodeAcademy Pro • Online',
        period: '2018',
        description:
          'Intensive 12-week program covering full-stack web development and modern JavaScript frameworks.',
        achievements: ['Certificate', 'Full Stack'],
        order: 2,
      },
    ];

    for (const edu of educationData) {
      try {
        const education = await pb.collection('education').create(edu);
        console.log('✅ Education created:', education.degree);
      } catch (error) {
        console.log('⚠️ Education error:', error.message);
      }
    }

    // Seed Skills Data
    console.log('\n🛠️ Seeding Skills data...');
    const skillsData = [
      {
        category: 'Frontend',
        skills: [
          'React',
          'Vue.js',
          'TypeScript',
          'Next.js',
          'Nuxt.js',
          'Tailwind CSS',
        ],
        order: 1,
      },
      {
        category: 'Backend',
        skills: [
          'Node.js',
          'Express',
          'Python',
          'Django',
          'PostgreSQL',
          'MongoDB',
        ],
        order: 2,
      },
      {
        category: 'Tools & DevOps',
        skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'GraphQL', 'Redis'],
        order: 3,
      },
    ];

    for (const skill of skillsData) {
      try {
        const skillRecord = await pb.collection('skills').create(skill);
        console.log('✅ Skills created:', skillRecord.category);
      } catch (error) {
        console.log('⚠️ Skills error:', error.message);
      }
    }

    // Seed Projects Data
    console.log('\n🚀 Seeding Projects data...');
    const projectsData = [
      {
        title: 'E-Commerce Platform',
        role: 'Lead Developer',
        year: '2023',
        description:
          'Built a comprehensive e-commerce platform handling 10K+ daily transactions with real-time inventory management, payment processing, and order tracking.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
        github: 'https://github.com/yourusername/ecommerce-platform',
        live: 'https://your-ecommerce-demo.com',
        featured: true,
        order: 1,
      },
      {
        title: 'Task Management SaaS',
        role: 'Full Stack Developer',
        year: '2023',
        description:
          'Developed a collaborative task management application with real-time updates, team workspaces, and advanced reporting features.',
        technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
        github: 'https://github.com/yourusername/task-manager',
        live: 'https://your-task-manager.com',
        featured: true,
        order: 2,
      },
      {
        title: 'Analytics Dashboard',
        role: 'Frontend Developer',
        year: '2022',
        description:
          'Created an interactive analytics dashboard for business intelligence with customizable widgets, data visualization, and export capabilities.',
        technologies: [
          'React',
          'TypeScript',
          'D3.js',
          'Material-UI',
          'GraphQL',
        ],
        github: 'https://github.com/yourusername/analytics-dashboard',
        live: null,
        featured: false,
        order: 3,
      },
      {
        title: 'Mobile Banking App',
        role: 'React Native Developer',
        year: '2022',
        description:
          'Developed a secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
        technologies: ['React Native', 'Firebase', 'Stripe', 'Jest', 'Detox'],
        github: null,
        live: null,
        featured: false,
        order: 4,
      },
    ];

    for (const project of projectsData) {
      try {
        const projectRecord = await pb.collection('projects').create(project);
        console.log('✅ Project created:', projectRecord.title);
      } catch (error) {
        console.log('⚠️ Project error:', error.message);
      }
    }

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log('- Profile: 1 record');
    console.log('- Experience: 3 records');
    console.log('- Education: 2 records');
    console.log('- Skills: 3 categories');
    console.log('- Projects: 4 records');
  } catch (error) {
    console.error('❌ Error seeding database:', error);

    if (error.status === 400) {
      console.error('🔍 Authentication failed. Please check your credentials.');
    } else if (error.status === 404) {
      console.error(
        '🔍 Collection not found. Make sure the collections exist in PocketBase.'
      );
    }
  } finally {
    // Clear auth store
    pb.authStore.clear();
    console.log('\n🔓 Logged out successfully');
  }
}

// Run the seeding function
seedDatabase();
