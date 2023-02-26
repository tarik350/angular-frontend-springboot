import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

///the starting point for the app
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
