import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = []; //elements est tracked pour lui permettre d'être update en fonction de ce qui est modifié sur la page
  selected = []; //création du tableau selected
  id = 'id'; //création d'une variable id

  constructor() {
    super(...arguments); //utilisation du constructeur du super
    this.elements = this.args.elements; //on associe les anciennes variables du super avec les nouvelles
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  @action //nouvelle action
  change(event) {
    let select = event.target;
    var selectedIds = [...select.selectedOptions].map((option) => option.value); //on récupère les ids des objets séléctionnés
    if (this.args.onChange) {
      this.args.onChange(
        this.elements.filter(
          (elm) => selectedIds.filter((e) => e == elm[this.id]).length > 0 //on récupère les éléments non nul qui ont un id correspondant aux selectedids
        )
      );
    }
  }
}
