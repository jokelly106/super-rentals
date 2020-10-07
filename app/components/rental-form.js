import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RentalFormComponent extends Component {
    
    @action save(){
        this.args.save(this.args.rental);
    }
}
