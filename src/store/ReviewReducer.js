const initalState = {
  review: {
    id: 1,
    name: 'abcz',
    title: 'Pretty food',
    images: [
      { url: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087319/Wine_f6fppn.jpg' },
    ],
    content: 'Fermentation is the result of bacteria and yeast breaking down carbohydrates to produce carbon dioxide, lactic acid, and alcohol as '
    + 'Fermentation is the result of bacteria and yeast breaking down carbohydrates to produce carbon dioxide, lactic acid, and alcohol as'
    + 'This is an example of truncating the text in PHP. This method works fine in limiting the text, but requires messing with the'
    + 'server-side just to deal with presentation, which is supposed to the be the job of CSS',
    rate: 3,
    user: {
      id: 2,
      name: 'La la',
      avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
    },
  },
  isLoading: false,
};

const LOAD_REVIEW = 'loadReview';
const LOAD_REVIEW_SUCCESSFUL = 'loadReviewSuccessful';
const LOAD_REVIEW_FAIL = 'loadReviewFail';

export default function ReviewReducer(state = initalState, action) {
  switch (action.type) {
    case LOAD_REVIEW: {
      return {
        isLoading: true,
      };
    }
    case LOAD_REVIEW_SUCCESSFUL: {
      return {
        review: action.data,
        isLoading: false,
      };
    }
    case LOAD_REVIEW_FAIL: {
      return {
        isLoading: false,
      };
    }
    default: return state;
  }
}