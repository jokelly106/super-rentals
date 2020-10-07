import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalFormNewRoute extends Route {
    @service store;

    async model() {
        let newRental = this.store.createRecord('rental');
        newRental.image = 'https://www.easylinedrawing.com/wp-content/uploads/2019/07/house_drawing.png';
        newRental.location = {
            lat: 0,
            lng: 0
        }
        return newRental;
    }
}