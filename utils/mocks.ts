export const mockedProducts = {
  products: {
    items: [
      {
        __typename: "Product",
        id: "1",
        name: "Laptop",
        slug: "laptop",
        description:
          "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
        featuredAsset: {
          __typename: "Asset",
          id: "1",
          name: "derick-david-409858-unsplash.jpg",
          type: "IMAGE",
          source:
            "https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg",
          preview:
            "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg",
        },
        variants: [
          { __typename: "ProductVariant", price: 129900 },
          { __typename: "ProductVariant", price: 139900 },
          { __typename: "ProductVariant", price: 219900 },
          { __typename: "ProductVariant", price: 229900 },
        ],
      },
      {
        __typename: "Product",
        id: "2",
        name: "Tablet",
        slug: "tablet",
        description:
          'If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a "computer." It would be Tablet.',
        featuredAsset: {
          __typename: "Asset",
          id: "2",
          name: "kelly-sikkema-685291-unsplash.jpg",
          type: "IMAGE",
          source:
            "https://demo.vendure.io/assets/source/5a/kelly-sikkema-685291-unsplash.jpg",
          preview:
            "https://demo.vendure.io/assets/preview/b8/kelly-sikkema-685291-unsplash__preview.jpg",
        },
        variants: [
          { __typename: "ProductVariant", price: 32900 },
          { __typename: "ProductVariant", price: 44500 },
        ],
      },
    ],
  },
};

export const mockedEmptyProducts = { products: { items: [] } };

export const mockedProduct = {
  product: {
    __typename: "Product",
    id: "1",
    name: "Laptop",
    slug: "laptop",
    description:
      "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
    featuredAsset: {
      __typename: "Asset",
      id: "1",
      name: "derick-david-409858-unsplash.jpg",
      type: "IMAGE",
      source:
        "https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg",
      preview:
        "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg",
    },
    variants: [
      { __typename: "ProductVariant", price: 129900 },
      { __typename: "ProductVariant", price: 139900 },
      { __typename: "ProductVariant", price: 219900 },
      { __typename: "ProductVariant", price: 229900 },
    ],
  },
};

export const mockedStorageState = {
  showSnackbar: true,
  products: [
    {
      product: mockedProduct.product,
      quantity: 3,
    },
  ],
};
