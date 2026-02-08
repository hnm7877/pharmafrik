import { build } from 'vite';

async function buildProject() {
  try {
    await build({
      // Use default configuration
      configFile: './vite.config.ts'
    });
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildProject();
