import Controller from '@ember/controller';
import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class RentalFormNewController extends Controller {

    @action createRental(rental) {
        rental.save().then(savedRental =>{
            this.transitionToRoute(`rental`, savedRental.id);
        });
        
    }
}
