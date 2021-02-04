import Route from '@ember/routing/route';
import { datas } from 'tds/data/data';
import Services from 'tds/classes/services';
import { action, set } from '@ember/object';

export default class Ex2Route extends Route {
  model() {
    return new Services(datas);
  }
  @action
  toggleActive(service) {
    set(service, 'active', !service.active);
  }
}
