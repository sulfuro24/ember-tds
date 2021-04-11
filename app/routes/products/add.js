import Route from '@ember/routing/route';
import {action} from '@ember/object';
import RSVP from 'rsvp';
import $ from 'jquery';
import {schedule} from '@ember/runloop';


export default class ProductsAddRoute extends Route {
  model(){
    return RSVP.hash({
      product: {},
      sections = this.store.findAll('section')
      products = this.store.findAll('product')
    });

  }




  @action save(data){
    let product = this.store.createRecord('products',data);
    product.save().then(()=>{
      this.transitionTo('products');
    })
  }
}
