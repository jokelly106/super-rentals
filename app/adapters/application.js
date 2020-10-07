import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { pluralize } from 'ember-inflector';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = "http://localhost:3000";

  pathForType = function (t) {
    var underscored = Ember.String.underscore(t);
    return pluralize(underscored);
  }
}