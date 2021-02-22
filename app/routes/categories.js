import Route from '@ember/routing/route';

export default class CategoriesRoute extends Route {
  model() {
    return this.store.findAll('category');
  }
  afterModel(model) {
    this.store.findAll('category');
    this.transitionTo('categories');
    model.get('firstObject');
  }
}
