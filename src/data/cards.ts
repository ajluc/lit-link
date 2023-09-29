export interface TempCard {
  title: string;
  subtitle: string;
  content: string;
  src: string;
  alt: string;
  id: number;
}

const tempCards: TempCard[] = [
  {
    title: 'Matt Chorsey',
    subtitle: 'New event: Trip to Vegas',
    content: `Here's a small text description for the card content. Nothing more, nothing less.`,
    src: 'https://ionicframework.com/docs/img/demos/card-media.png',
    alt: '9:32 AM',
    id: 0
  },
  {
    title: 'Lauren Ruthford',
    subtitle: 'Long time no chat',
    content: `Here's a small text description for the card content. Nothing more, nothing less.`,
    src: 'https://ionicframework.com/docs/img/demos/card-media.png',
    alt: '6:12 AM',
    id: 1
  },
  {
    title: 'Jordan Firth',
    subtitle: 'Report Results',
    content: `Here's a small text description for the card content. Nothing more, nothing less.`,
    src: 'https://ionicframework.com/docs/img/demos/card-media.png',
    alt: '4:55 AM',
    id: 2

  },
  {
    title: 'Bill Thomas',
    subtitle: 'The situation',
    content: `Here's a small text description for the card content. Nothing more, nothing less.`,
    src: 'https://ionicframework.com/docs/img/demos/card-media.png',
    alt: 'Yesterday',
    id: 3
  },
  {
    title: 'Joanne Pollan',
    subtitle: 'Updated invitation: Swim lessons',
    content: `Here's a small text description for the card content. Nothing more, nothing less.`,
    src: 'https://ionicframework.com/docs/img/demos/card-media.png',
    alt: 'Yesterday',
    id: 4
  },
  {
    title: 'Andrea Cornerston',
    subtitle: 'Last minute ask',
    content: `Here's a small text description for the card content. Nothing more, nothing less.`,
    src: 'https://ionicframework.com/docs/img/demos/card-media.png',
    alt: 'Yesterday',
    id: 5
  },
  {
    title: 'Moe Chamont',
    subtitle: 'Family Calendar - Version 1',
    content: `Here's a small text description for the card content. Nothing more, nothing less.`,
    src: 'https://ionicframework.com/docs/img/demos/card-media.png',
    alt: 'Last Week',
    id: 6
  },
  {
    title: 'Kelly Richardson',
    subtitle: 'Placeholder Headhots',
    content: `Here's a small text description for the card content. Nothing more, nothing less.`,
    src: 'https://ionicframework.com/docs/img/demos/card-media.png',
    alt: 'Last Week',
    id: 7
  }
];

export const getCards = () => tempCards;

export const getCard = (id: number) => tempCards.find(c => c.id === id);
