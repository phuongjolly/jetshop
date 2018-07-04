const initialState = {
  collections: [
    {
      id: 0,
      name: 'Salad',
    },
    {
      id: 1,
      name: 'Noddle',
    },
    {
      id: 2,
      name: 'Fried rice',
    },
    {
      id: 3,
      name: 'Mushroom',
    },
    {
      id: 4,
      name: 'Salad',
    },
    {
      id: 5,
      name: 'Noddle',
    },
    {
      id: 6,
      name: 'Fried rice',
    },
    {
      id: 7,
      name: 'Mushroom',
    },
  ],
  isLoading: false,
  selectedItem: null,
};

const LOAD_COLLECTIONS = 'loadCollections';
const ADD_COLLECTION = 'addCollection';
const ADD_COLLECTION_SUCCESSFUL = 'addCollectionSuccessful';
const ADD_COLLECTION_FAIL = 'addCollectionFail';
const UPDATE_SELECTED_ITEM = 'updateSelectedItem';

export default function CollectionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COLLECTIONS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_COLLECTION: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_COLLECTION_SUCCESSFUL: {
      return {
        ...state,
        collections: state.collections.concat(action.data),
        isLoading: false,
      };
    }
    case ADD_COLLECTION_FAIL: {
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
    default: return state;
  }
}

export const collectionActions = {
  updateSelectedItem(item) {
    console.log('you have just update item');
    console.log(item.name);
    return {
      type: UPDATE_SELECTED_ITEM,
      data: item,
    };
  },
}
