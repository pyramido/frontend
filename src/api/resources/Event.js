import axios from 'axios';
import Resource from 'axios-resource';

export default class EventResource extends Resource {
  url({ id } = {}) {
    return `events${id ? `/${id}` : ''}`;
  }

  parse = ({ data }) => data;
}
