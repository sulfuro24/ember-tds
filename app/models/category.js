import Model, { HasMany } from '@ember-data/model';

export default class CategoryModel extends Model {
  @HasMany('string') name;
}
