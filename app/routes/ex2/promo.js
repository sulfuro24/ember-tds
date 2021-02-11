import Route from '@ember/routing/route';
import { promos } from '../../data/data';

export default class Ex2PromoRoute extends Route {
  promo = false;
  model() {
    return this.modelFor('ex2');
  }
  afterModel(model) {
    model.promos = promos;
  }
}
