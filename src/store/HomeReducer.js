const initState = {
  reviews: [
    {
      id: 0,
      name: 'abcz',
      title: 'Fantasic food',
      images: [
        { url: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087318/Pickles_yoyqut.jpg' },
      ],
      content: 'Our ancient ancestors found fermentation an effective way to preserve food, as the lactic acid or alcohol produced becomes natural preservatives that ',
      rate: 5,
      user: {
        id: 0,
        name: 'Matt',
        avatar: 'https://semantic-ui.com/images/avatar/small/matt.jpg',
      },
    },
    {
      id: 1,
      name: 'abcz',
      title: 'Pretty food',
      images: [
        { url: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087319/Wine_f6fppn.jpg' },
      ],
      content: 'Fermentation is the result of bacteria and yeast breaking down carbohydrates to produce carbon dioxide, lactic acid, and alcohol as ',
      rate: 3,
      user: {
        id: 2,
        name: 'La la',
        avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
      },
    },
    {
      id: 2,
      name: 'abcz',
      title: 'Fantasic food',
      images: [
        { url: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087318/kimchi_ttn85h.jpg' },
      ],
      content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
      rate: 5,
      user: {
        id: 3,
        name: 'John',
        avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
      },
    },
  ],
  isLoading: false,
};

const LOAD_REVIEWS = 'loadReviews';
const LOAD_REVIEWS_SUCCESSFUL = 'loadReviewSuccessful';
const LOAD_REVIEWS_FAIL = 'loadReviewFail';

export default function HomeReducer(state = initState, action) {
  switch (action.type) {
    case LOAD_REVIEWS: {
      return {
        isLoading: true,
      };
    }
    case LOAD_REVIEWS_SUCCESSFUL: {
      return {
        reviews: action.data,
        isLoading: false,
      };
    }
    case LOAD_REVIEWS_FAIL: {
      return {
        isLoading: false,
      };
    }
    default: return state;
  }
}
