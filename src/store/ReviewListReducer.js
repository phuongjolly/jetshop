import axios from 'axios/index';

const initState = {
  reviews: [],
  isLoading: false,
  showAsGrid: false,
  shortText: true,
};

const TOGGLE_GRID = 'toggleGrid';
const TOGGLE_LIST = 'toggleList';
const LOAD_REVIEWS = 'loadReviews';
const LOAD_REVIEWS_SUCCESSFUL = 'loadReviewSuccessful';
const LOAD_REVIEWS_FAIL = 'loadReviewFail';
const SHOW_MORE = 'showMore';

export default function ReviewListReducer(state = initState, action) {
  switch (action.type) {
    case LOAD_REVIEWS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_REVIEWS_SUCCESSFUL: {
      return {
        ...state,
        reviews: action.data,
        isLoading: false,
      };
    }
    case LOAD_REVIEWS_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case TOGGLE_GRID: {
      return {
        ...state,
        showAsGrid: true,
      };
    }
    case TOGGLE_LIST: {
      return {
        ...state,
        showAsGrid: false,
      };
    }
    case SHOW_MORE: {
      return {
        ...state,
        shortText: !state.shortText,
      };
    }
    default: return state;
  }
}

export const reviewListActions = {
  loadReviews() {
    return async (dispatch) => {
      try {
        dispatch({
          type: LOAD_REVIEWS,
        });
        const response = await axios.get('/api/reviews');
        console.log(response);
        dispatch({
          type: LOAD_REVIEWS_SUCCESSFUL,
          data: response.data,
        });
      } catch (e) {
        dispatch({
          type: LOAD_REVIEWS_FAIL,
        });
      }
    };
  },

  toggleGrid() {
    return {
      type: TOGGLE_GRID,
    };
  },

  toggleList() {
    console.log('toogle list');
    return {
      type: TOGGLE_LIST,
    };
  },

  showMore() {
    return {
      type: SHOW_MORE,
    };
  },

};
