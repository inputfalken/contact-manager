import {EventAggregator} from 'aurelia-event-aggregator';
import {ContactAdded} from './message';
import {WebAPI} from './web-api';

export class AddContact {
  static inject() { return [WebAPI, EventAggregator]; }

  constructor(api, eventAggregator) {
    this.api = api;
    this.eventAggregator = eventAggregator;
  }

  save() {
    this.api.addContact(this.contact).then(contact => {
      this.eventAggregator.publish(new ContactAdded(contact));
    });
  }
}
