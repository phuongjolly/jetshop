const initialState = {
  collections: [
    {
      id: 0,
      name: 'Salad',
      reviews: [
        {
          id: 0,
          name: 'abcz',
          dish: {
            id: 0,
            name: 'Salad',
            type: 'Vegan',
            restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
          },
          title: 'Fantasic SADAD',
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
      ],
    },
    {
      id: 1,
      name: 'Noddle',
      reviews: [
        {
          id: 1,
          name: 'abcz',
          dish: {
            id: 1,
            name: 'Salad',
            type: 'Vegan',
            restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
          },
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
      ],
    },
    {
      id: 2,
      name: 'Fried rice',
      reviews: [
        {
          id: 2,
          name: 'abcdasfdsaz',
          dish: {
            id: 2,
            name: 'Salad',
            type: 'Vegan',
            restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
          },
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
    },
    {
      id: 3,
      name: 'Mushroom',
      reviews: [
        {
          id: 3,
          name: 'abfdafdacz',
          title: 'Terrible food',
          dish: {
            id: 3,
            name: 'Salad',
            type: 'Vegan',
            restaurant: 'The Butcher’s Son, Downtown Berkeley, Berkeley, California, United States',
          },
          images: [],
          content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
          rate: 5,
          user: {
            id: 3,
            name: 'John',
            avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
          },
        },
      ],
    },
  ],
  itemToAdd: '',
  isLoading: false,
  selectedItem: null,
  isActive: false,
};

const LOAD_COLLECTIONS = 'loadCollections';
const ADD_ITEM = 'addItem';
const ADD_ITEM_SUCCESSFUL = 'addItemSuccessful';
const ADD_ITEM_FAIL = 'addItemFail';
const UPDATE_SELECTED_ITEM = 'updateSelectedItem';
const OPEN_MODAL = 'openModal';
const CLOSE_MODAL = 'closeModal';
const UPDATE_ITEM_TO_ADD = 'updateItemToAdd';

export default function CollectionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COLLECTIONS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_ITEM_SUCCESSFUL: {
      return {
        ...state,
        collections: action.data,
        isLoading: false,
      };
    }
    case ADD_ITEM_FAIL: {
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
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        itemToAdd: '',
        isLoading: false,
        selectedItem: null,
        isActive: false,
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

export const collectionActions = {
  addToCollection(review, collection) {
    return (dispatch, getState) => {
      dispatch({
        type: ADD_ITEM,
      });

      setTimeout(3000);

      /* create a fake scripting */
      let { collections } = getState().collectionsModal;
      const result = collections.filter(item => item.name.toLowerCase()
        .includes(collections.name.toLowerCase()));
      if(result.length === 0) {
        const newItem = {
          ...collection,
          reviews: [review],
        }
        collections.concat(newItem);
      } else {
        const newItem = {
          ...result,
          reviews: result.reviews.concat(review),
        };
        collections = {
          ...collections,
          newItem,
        };
      }

      dispatch({
        type: ADD_ITEM_SUCCESSFUL,
        data: collections,
      });
    };
  },

  updateSelectedItem(item) {
    console.log('you have just update item');
    console.log(item.name);
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

  openModal() {
    return {
      type: OPEN_MODAL,
    };
  },

  closeModal() {
    return {
      type: CLOSE_MODAL,
    };
  },
};
