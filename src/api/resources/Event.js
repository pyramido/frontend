import axios from 'axios';
import Resource from 'axios-resource';

export default class EventResource extends Resource {
  url({ id } = {}) {
    return `events${id ? `/${id}` : ''}`;
  }

  parse = ({ data }) => data;

  fetch() {
    return axios.get('https://api.pyramido.ca/v1/events');
  }
}
