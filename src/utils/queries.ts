
export const getProductsQuery = `
  *[_type == "product"] {
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url,
    inventory,
    category,
    status,
    colors
  }
`;
