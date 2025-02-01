export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: "tags",
        type: "array",
        title: "Tags",
        of: [{ type: "string" }],
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'inventory',
        type: 'number',
        title: 'Inventory',
      },
      {
        name: 'colors',
        type: 'array',
        title: 'Colors',
        of: [{ type: 'string' }],
      },
      {
        name: 'status',
        type: 'string',
        title: 'Status',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
    ],
  };
  