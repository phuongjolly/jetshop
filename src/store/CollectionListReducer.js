
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
          image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087318/Pickles_yoyqut.jpg',
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
          image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087319/Wine_f6fppn.jpg',
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
          image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087318/kimchi_ttn85h.jpg',
          content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
          rate: 5,
          user: {
            id: 3,
            name: 'John',
            avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
          },
        },
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
          image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087319/Wine_f6fppn.jpg',
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
          image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087318/kimchi_ttn85h.jpg',
          content: 'Kimchi is the center of attention in many Korean foods. The kimchi mentioned at the beginning of this article is actually truer to the original ',
          rate: 5,
          user: {
            id: 3,
            name: 'John',
            avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
          },
        },
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
          image: 'https://res.cloudinary.com/abillionveg/image/upload/c_scale,w_700/v1530087319/Wine_f6fppn.jpg',
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
          image: '',
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
};

export default function CollectionListReducer(state = initialState, action) {
  return state;
}
