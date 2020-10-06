import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RentalFormEditController extends Controller {

    @action updateRental(rental) {
        this.store.findRecord('rental', rental.id).then(record => {
            record.save();
            this.transitionToRoute(`rental`, record);
        });
    }
}
