const initalState = {
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