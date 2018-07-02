const initialState  = {
  hotItemList: [
    {
      image: 'http://themes.rokaux.com/unishop/v3.0/template-1/img/hero-slider/01.png',
      branch: 'Converse',
      detail: 'Chuck Taylor All Star',
      price: 59.90,
    },
    {
      image: 'http://themes.rokaux.com/unishop/v3.0/template-1/img/hero-slider/02.png',
      branch: 'Puma',
      detail: 'Puma Backpack',
      price: 59.90,
    },
  ],
  isLoading: false,
};

const LOAD_HOT_ITEM_LIST = 'loadHotItemList';
const LOAD_HOT_ITEM_LIST_SUCCESSFUL = 'loadHotItemListSuccessful';
const LOAD_HOT_ITEM_LIST_FAIL = 'loadHotItemListFail';

export function BannerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HOT_ITEM_LIST: {
      return {
        isLoading: true,
      };
    }
    case LOAD_HOT_ITEM_LIST_SUCCESSFUL: {
      return {
        hotItemList: action.data,
        isLoading: false,
      };
    }
    case LOAD_HOT_ITEM_LIST_FAIL: {
      return {
        isLoading: false,
      };
    }
    default: return state;
  }
}

