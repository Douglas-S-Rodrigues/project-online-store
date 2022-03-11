export async function getCategories() {
  try {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const request = await fetch(endpoint);
    const data = await request.json();
    return data;
  } catch (error) {
    return new Error(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const request = await fetch(endpoint);
    const data = await request.json();
    return data;
  } catch (error) {
    return new Error(error);
  }
}
