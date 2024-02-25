import Loader from './loader';

interface LoaderConfig {
    apiKey: string;
}

class AppLoader extends Loader {

    constructor() {

        const apiUrl: string = process.env.API_URL!;
        const config: LoaderConfig = {
            apiKey: process.env.API_KEY!,
        };


        if (!apiUrl || !config.apiKey) {
            console.error('API URL or API Key is not defined');
            throw new Error('API URL or API Key is not defined');
        }

        super(apiUrl, config);
    }
}

export default AppLoader;
