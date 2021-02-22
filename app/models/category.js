import Model, { attr, HasMany } from '@ember-data/model';

export default class CategoryModel extends Model {
  @attr('string') name;
  @HasMany('contacts') contacts;
}
