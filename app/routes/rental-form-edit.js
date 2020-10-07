import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalFormEditRoute extends Route {
    @service store;
    
    async model(params) {
        if(params.rental_id){
            return this.store.find('rental', params.rental_id);
        }
    }
}