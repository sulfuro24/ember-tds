import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class CategoryContactsController extends Controller {
  @tracked datas;
  get contacts() {
    return this.datas.filterBy('isDeleted', false);
  }
  get deleteteds() {
    return this.datas.filterBy('isDeleted', true);
  }
  get deletetedsCount() {
    return this.deleteds.length;
  }
}
