import Route from '@ember/routing/route';

export default class SectionsRoute extends Route {
  model(){
    let store = this.getStore('store');
    return store.findAll('section');
  }

}
