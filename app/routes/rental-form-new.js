import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalFormNewRoute extends Route {
    @service store;

    async model() {
        let newRental = this.store.createRecord('rental');
        newRental.location = {
            lat: 0,
            lng: 0
        }
        return newRental;
    }
}