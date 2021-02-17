import Route from '@ember/routing/route';

export default class ContactsUpdateRoute extends Route {
  renderTemplate(controller, model) {
    this.render('contacts.add');
  }
}
