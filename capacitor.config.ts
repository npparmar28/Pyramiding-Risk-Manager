import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.riskmanager',
	appName: 'Advanced Risk Manager',
	webDir: 'www',
	bundledWebRuntime: false,
	server: {
		androidScheme: 'https'
	}
};

export default config;