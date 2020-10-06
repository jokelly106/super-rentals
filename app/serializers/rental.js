import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class RentalSerializer extends JSONAPISerializer {
  serialize(snapshot, options) {
    let json = super.serialize(...arguments);

    json.data.attributes.lat =  json.data.attributes.location.lat;
    json.data.attributes.lng =  json.data.attributes.location.lng;

    delete json.data.attributes.location;

    return json;
  }
}