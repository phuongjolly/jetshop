import axios from 'axios/index';

const initialState = {
  collection: null,
  isLoading: false,
};

const LOAD_SINGLE_COLLECTION = 'loadSingleCollection';
const LOAD_SINGLE_COLLECTION_SUCCESSFUL = 'loadSingleCollectionSuccessful';
const LOAD_SINGLE_COLLECTION_FAIL = 'loadSingleCollectionFail';

export default function CollectionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SINGLE_COLLECTION: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_SINGLE_COLLECTION_SUCCESSFUL: {
      return {
        ...state,
        collection: action.data,
        isLoading: false,
      };
    }
    case LOAD_SINGLE_COLLECTION_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: return state;
  }
}

export const collectionActions = {
  loadCollectionById(id) {
    return async (dispatch) => {
      dispatch({
        type: LOAD_SINGLE_COLLECTION,
      });
      try {
        const response = await axios.get(`/api/collections/${id}`);
        const collection = response.data[0];
        collection.reviews = collection.reviews.map(
          review => ({
            ...review,
            collection,
          }),
        );

        dispatch({
          type: LOAD_SINGLE_COLLECTION_SUCCESSFUL,
          data: collection,
        });
      } catch (e) {
        dispatch({
          type: LOAD_SINGLE_COLLECTION_FAIL,
        });
      }
    };
  },
};
