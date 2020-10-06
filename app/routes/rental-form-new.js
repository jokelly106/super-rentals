import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalFormNewRoute extends Route {
    @service store;

    async model() {
        
        return {
            title: '',
            owner: '',
            city: '',
            location: {
                lat: 0,
                lng: 0
            },
            category: '',
            image: 'https://www.easylinedrawing.com/wp-content/uploads/2019/07/house_drawing.png',
            bedrooms: 0,
            description: ''
        }
        // Should create from store?
        // Creates caching issue when cancelling creation...
        // Unsure how to handle this case gracefully.
        let newRental = this.store.createRecord('rental');
        newRental.location = {
            lat: 0,
            lng: 0
        }
        return newRental;
    }
}