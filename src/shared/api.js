// import axios from 'axios';

export function getAllItems() {
  return {
    data: {
      menu: [
        {
            categoryName:'Burgers',
          items: [
            {
              id: 1,
              name: "mc donalds",
              price: 100,
              discount: 20,
              rating: '1',
              ingredients: ["ha", "ye"],
            },
            {
              id: 1,
              name: "mc donalds",
              price: 100,
              discount: 20,
              rating: '1',
              ingredients: ["ha", "ye"],
            },
            {
              id: 1,
              name: "mc donalds",
              price: 100,
              discount: 20,
              rating: '1',
              ingredients: ["ha", "ye"],
            },
            {
              id: 2,
              name: "KFC",
              price: 200,
              discount: 20,
              rating: '5',
              ingredients: ["ha", "ye"],
            },
          ],
        },
        {
            categoryName:'Pizzas',
          items: [
            {
              id: 3,
              name: "Onion",
              price: 150,
              discount: 20,
              rating: '4',
              ingredients: ["ha", "ye"],
            },
            {
              id: 4,
              name: "paneer",
              price: 175,
              discount: 20,
              rating: '3',
              ingredients: ["ha", "ye"],
            },
          ],
        },
        {
            categoryName:'Drinks',
          items: [
            {
              id: 3,
              name: "mazza",
              price: 300,
              discount: 20,
              rating: '2',
              ingredients: ["ha", "ye"],
            },
            {
              id: 4,
              name: "coca cola",
              price: 100,
              discount: 20,
              rating: '1',
              ingredients: ["ha", "ye"],
            },
            {
              id: 4,
              name: "pepsi",
              price: 100,
              discount: 20,
              rating: '1',
              ingredients: ["ha", "ye"],
            },
            {
              id: 4,
              name: "sprite",
              price: 100,
              discount: 20,
              rating: '1',
              ingredients: ["ha", "ye"],
            },
            {
              id: 4,
              name: "fanta",
              price: 100,
              discount: 20,
              rating: '1',
              ingredients: ["ha", "ye"],
            },
          ],
        },
        {
            categoryName:'Sandwitches',
          items: [
            {
              id: 3,
              name: "sand spl",
              price: 100,
              discount: 20,
              rating: '4',
              ingredients: ["ha", "ye"],
            },
            {
              id: 4,
              name: "sand non veg",
              price: 100,
              discount: 20,
              rating: '3',
              ingredients: ["ha", "ye"],
            },
            {
              id: 4,
              name: "sand non veg spl",
              price: 100,
              discount: 20,
              rating: '2',
              ingredients: ["ha", "ye"],
            },
          ],
        },
      ],
    },
  };
  // return axios.get('https://demo0810307.mockable.io/getItems');
}
