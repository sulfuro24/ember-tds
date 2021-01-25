import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info = 'défaut';
  MAX = 100;

  get style() {
    return this.info;
  }

  get size() {
    return this.MAX - this.content.length;
  }

  @action
  save() {
    console.log('save');
    this.info = 'Sauvegardé';
  }

  @action
  efface() {
    this.content = '';
  }
  @action
  update() {
    console.log('update');
    this.info = 'Modifié';
  }
  get sup50() {
    return 50 < this.size;
  }
  get inf50sup20() {
    return 20 < this.size < 50;
  }
  get inf20() {
    return this.size < 20;
  }
}
