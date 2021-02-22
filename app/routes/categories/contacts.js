import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesContactsRoute extends Route {
  model(params){
    return this.store.findOne('category');
  }
  setupController(controller, model){

  }
  willTransition(){

  }
  @action delete(contact){

  }
  @action cancelDeletetion(contacts){}
  @action update(category, contact){}
  @action confirmDeletion(contacts){}
}
