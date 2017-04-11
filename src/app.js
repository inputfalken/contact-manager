export default class {
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
        moduleId: 'concats-details',
        name: 'contacts'
      }
    ]);
    this.router = router;
  }
}

