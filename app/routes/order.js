import Route from '@ember/routing/route';

export default class OrderRoute extends Route {
  model(params : Object){
    return  this.store.query('order',{filter:{idEmploye:1},include: 'orderdetails'})
  }
}
