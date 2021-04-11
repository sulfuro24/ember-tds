import ApplicationSerializer from './application';
import JSONSerializer from '@ember-data/serializer/json';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class ProductSerializer extends ApplicationSerializer {
  EmbeddedRecordsMixin
) {
  attrs = {
    packs: { embedded: 'always' },
  };

}
