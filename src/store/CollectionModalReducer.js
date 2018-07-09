import axios from 'axios/index';

const initialState = {
  collections: [],
  selectedReview: null,
  itemToAdd: null,
  isLoading: false,
  selectedItem: null,
  isActive: false,
  goToNextState: false,
};

const LOAD_COLLECTIONS_MODAL = 'loadCollectionsModal';
const LOAD_COLLECTIONS_MODAL_SUCCESSFUL = 'loadCollectionsModalSuccessful';
const LOAD_COLLECTIONS_MODAL_FAIL = 'loadCollectionsModalFail';
const ADD_REVIEW_TO_COLLECTION = 'addReviewToCollection';
const ADD_REVIEW_TO_COLLECTION_SUCCESSFUL = 'addReviewToCollectionSuccessful';
const ADD_REVIEW_TO_COLLECTION_FAIL = 'addReviewToCollectionFail';
const UPDATE_SELECTED_ITEM = 'updateSelectedItem';
const OPEN_MODAL = 'openModal';
const CLOSE_MODAL = 'closeModal';
const UPDATE_ITEM_TO_ADD = 'updateItemToAdd';

export default function CollectionsModalReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COLLECTIONS_MODAL: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_COLLECTIONS_MODAL_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        collections: action.data,
      };
    }
    case LOAD_COLLECTIONS_MODAL_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ADD_REVIEW_TO_COLLECTION: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_REVIEW_TO_COLLECTION_SUCCESSFUL: {
      return {
        ...state,
        goToNextState: true,
        isLoading: false,
      };
    }
    case ADD_REVIEW_TO_COLLECTION_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case UPDATE_SELECTED_ITEM: {
      return {
        ...state,
        selectedItem: action.data,
      };
    }
    case OPEN_MODAL: {
      return {
        ...state,
        isActive: true,
        selectedReview: action.data,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        collections: [],
        selectedReview: null,
        itemToAdd: null,
        isLoading: false,
        selectedItem: null,
        isActive: false,
        goToNextState: false,
      };
    }
    case UPDATE_ITEM_TO_ADD: {
      return {
        ...state,
        itemToAdd: action.data,
      };
    }
    default: return state;
  }
}

export const collectionModalActions = {

  addToCollections(collection) {
    return async (dispatch, getState) => {
      const { selectedReview } = getState().collectionsModal;
      dispatch({
        type: ADD_REVIEW_TO_COLLECTION,
      });
      try {
        const result = await axios.post('/api/reviews/update', {
          collection,
          review: selectedReview,
        });
        dispatch({
          type: ADD_REVIEW_TO_COLLECTION_SUCCESSFUL,
          data: result.data,
        });
      } catch (e) {
        dispatch({
          type: ADD_REVIEW_TO_COLLECTION_FAIL,
        });
      }
    };
  },

  updateSelectedItem(item) {
    return {
      type: UPDATE_SELECTED_ITEM,
      data: item,
    };
  },

  updateItemToAdd(item) {
    return {
      type: UPDATE_ITEM_TO_ADD,
      data: item,
    };
  },

  openModal(review) {
    return async (dispatch) => {
      dispatch({
        type: OPEN_MODAL,
        data: review,
      });

      dispatch({
        type: LOAD_COLLECTIONS_MODAL,
      });

      try {
        const response = await axios.get('/api/collections');
        dispatch({
          type: LOAD_COLLECTIONS_MODAL_SUCCESSFUL,
          data: response.data,
        });
      } catch (e) {
        dispatch({
          type: LOAD_COLLECTIONS_MODAL_FAIL,
        });
      }
    };
  },

  closeModal() {
    document.body.style.overflow = 'initial';
    return {
      type: CLOSE_MODAL,
    };
  },
};
