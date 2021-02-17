import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params /*, hash*/) {
  const [items, value, prop] = params; //on récupère les paramètres dans des constantes
  let id = prop || 'id'; //id aura pour form '022id'
  return items.filterBy(id, value).length > 0; //on récupère les éléments de la liste par id et par value qui ont une longueur sup à 0
});
