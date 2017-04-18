import {EventAggregator} from 'aurelia-event-aggregator';
import {ContactAdded} from './message';
import {WebAPI} from './web-api';

export class AddContact {
  static inject() { return [WebAPI, EventAggregator]; }

  constructor(api, eventAggregator) {
    this.api = api;
    this.eventAggregator = eventAggregator;
  }

  get canSave() {
    if (this.contact) {
      return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
    }
    return false;
  }

  save() {
    this.api.addContact(this.contact).then(contact => {
      this.eventAggregator.publish(new ContactAdded(contact));
    });
  }
}
