import Loader from './loader';


interface LoaderConfig {
    apiKey: string;
}

class AppLoader extends Loader {
    constructor() {
        const apiUrl: string = process.env.API_URL || 'your-default-api-url';
        const config: LoaderConfig = {
            apiKey: process.env.API_KEY || 'your-default-api-key',
        };

        super(apiUrl, config);
    }
}

export default AppLoader;
