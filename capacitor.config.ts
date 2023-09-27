import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'LitLink',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
