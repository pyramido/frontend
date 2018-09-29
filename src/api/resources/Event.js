import Resource from 'axios-resource';

export default class EventResource extends Resource {
    static URL = 'events/{id}';
}
