import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RentalFormNewController extends Controller {

    @action createRental(rental) {
        let newRental = this.store.createRecord('rental', rental);

    }
}
