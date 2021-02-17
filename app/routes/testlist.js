import Route from '@ember/routing/route';
import contacts from '../classes/contacts';

export default class TestlistRoute extends Route {
  model() {
    return new contacts(this.store.findAll('contact'));
  }
}
