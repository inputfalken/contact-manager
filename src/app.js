export class App {
  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      {
        route: '',
        moduleId: 'no-selection',
        title: 'select'
      },
      {
        route: 'contacts/:id',
        moduleId: 'contact-detail',
        name: 'contacts'
      }
    ]);
    this.router = router;
  }
}

