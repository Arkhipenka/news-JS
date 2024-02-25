import AppLoader from './appLoader';

interface AppLoaderRespConfig {
  endpoint: string;
  options?: Record<string, unknown>;
}

type CallbackFunction = (data: any) => void; 

class AppController extends AppLoader {
  
  getSources(callback: CallbackFunction): void {
    const config: AppLoaderRespConfig = {
      endpoint: 'sources',
    };
    super.getResp(config, callback);
  }

  getNews(e: Event, callback: CallbackFunction): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target && target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          const config: AppLoaderRespConfig = {
            endpoint: 'everything',
            options: { sources: sourceId },
          };
          super.getResp(config, callback);
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
