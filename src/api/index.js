import http from './http';
import EventResource from './resources/Event';

export const Events = new EventResource({ http });
