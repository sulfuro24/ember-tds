import { set } from '@ember/object';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { computed } from '@ember/object';
export default class Services {
  services = [];

  constructor(services) {
    set(this, 'services', services);
  }

  get countActive() {
    /*let r = 0;

    this.services.forEach((s) => {
      if (s.active) {
        r++;
      }
    });
    return r;*/
    return this.services.filterBy('active', true).length;
  }
  @computed('services.@each.active')
  get sumActive() {
    let r = 0;
    this.services.forEach((s) => {
      if (s.active) {
        r = r + s.price;
      }
    });
    return r;
  }
}
