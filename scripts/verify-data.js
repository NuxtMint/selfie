import PocketBase from 'pocketbase';
import { config } from 'dotenv';

// Load environment variables
config();

const POCKETBASE_URL = process.env.POCKETBASE_URL;

const pb = new PocketBase(POCKETBASE_URL);

async function verifyData() {
  try {
    console.log('🔍 Verifying seeded data...\n');

    // Check Profile
    const profiles = await pb.collection('profile').getFullList();
    console.log('👤 Profile Records:', profiles.length);
    if (profiles.length > 0) {
      console.log('   - Name:', profiles[0].name);
      console.log('   - Title:', profiles[0].title);
      console.log('   - Available:', profiles[0].available);
    }

    // Check Experience
    const experiences = await pb.collection('experience').getFullList({
      sort: 'order',
    });
    console.log('\n💼 Experience Records:', experiences.length);
    experiences.forEach((exp, index) => {
      console.log(
        `   ${index + 1}. ${exp.title} at ${exp.company} (${exp.period})`
      );
    });

    // Check Education
    const education = await pb.collection('education').getFullList({
      sort: 'order',
    });
    console.log('\n🎓 Education Records:', education.length);
    education.forEach((edu, index) => {
      console.log(
        `   ${index + 1}. ${edu.degree} - ${edu.school} (${edu.period})`
      );
    });

    // Check Skills
    const skills = await pb.collection('skills').getFullList({
      sort: 'order',
    });
    console.log('\n🛠️ Skills Categories:', skills.length);
    skills.forEach((skill, index) => {
      console.log(
        `   ${index + 1}. ${skill.category}: ${skill.skills.length} skills`
      );
    });

    // Check Projects
    const projects = await pb.collection('projects').getFullList({
      sort: 'order',
    });
    console.log('\n🚀 Project Records:', projects.length);
    projects.forEach((project, index) => {
      const links = [];
      if (project.github) links.push('GitHub');
      if (project.live) links.push('Live Demo');
      console.log(
        `   ${index + 1}. ${project.title} (${project.year}) - ${
          links.join(', ') || 'No links'
        }`
      );
    });

    console.log('\n✅ All data verified successfully!');
    console.log('\n🌐 You can now view your data at:');
    console.log(`   ${POCKETBASE_URL}_/`);
  } catch (error) {
    console.error('❌ Error verifying data:', error.message);
  }
}

// Run the verification
verifyData();
