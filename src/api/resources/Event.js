import Resource from 'axios-resource';

export default class EventResource extends Resource {
  url({ id } = {}) {
    return `events${id ? `/${id}` : ''}`;
  }

  parse = ({ data }) => data;

  fetch() {
    return Promise.resolve({
      title: "Spectable d'humour au Cavo",
      description: "En tête d'affiche, Steeve le gars drôle.",
      media: { first: '/img/event-1.jpg' },
      rewards: [
        {
          title: '50% de rabais',
          description: 'Invite 3 amis pour profiter de la réduction.',
          bonus: 'Reçois un coupon de réduction de 50% sur ton billet.',
        },
      ],
      needs: [
        {
          title: 'Deviens bénévole',
          description: 'Obtiens un billet gratuit en devenant bénévole.',
        },
        {
          title: 'Commanditaire bronze',
          description: 'Achète 10 billets au nom de votre entreprise et votre logo sera dans l\'événement.',
        },
      ],
    });
  }
}
