import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    @service store;
    async model() {
        //@TODO use hooks to unload any uncompleted rentals instead of unload all in future
        this.store.unloadAll();
        return this.store.findAll('rental');
    }
}