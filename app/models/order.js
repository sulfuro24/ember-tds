import Model from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('date') dateCreation;
  @hasMany('orderdetail') orderdetail;

  getCount(){
    return this.orderdetail.length;
  }

}
