import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {ContactUpdated, ContactViewed, ContactAdded} from './message';
import {Router} from 'aurelia-router';


export class ContactList {
  static inject = [WebAPI, EventAggregator, Router];

  constructor(api, ea, router) {
    this.api = api;
    this.contacts = [];
    this.router = router;

    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.find(x => x.id === id);
      Object.assign(found, msg.contact);
    });
    ea.subscribe(ContactAdded, msg => {
      this.contacts.push(msg.contact);
    });
  }

  created() {
    this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }

  newContactView() {
    this.selectedId = null;
    this.router.navigate('contacts/new');
  }

}
