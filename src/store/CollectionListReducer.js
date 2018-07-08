import axios from 'axios/index';

const initialState = {
  collections: [],
  isLoading: false,
};

const LOAD_COLLECTIONS = 'loadCollections';
const LOAD_COLLECTIONS_SUCCESSFUL = 'loadCollectionsSuccessful';
const LOAD_COLLECTIONS_FAIL = 'loadCollectionsFail';

export default function CollectionListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COLLECTIONS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_COLLECTIONS_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        collections: action.data,
      };
    }
    case LOAD_COLLECTIONS_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: return state;
  }
}

export const collectionsActions = {
  loadCollections() {
    return async (dispatch) => {
      dispatch({
        type: LOAD_COLLECTIONS,
      });

      try {
        const response = await axios.get('/api/collections');
        dispatch({
          type: LOAD_COLLECTIONS_SUCCESSFUL,
          data: response.data,
        });
      } catch (e) {
        dispatch({
          type: LOAD_COLLECTIONS_FAIL,
        });
      }
    };
  },
};
