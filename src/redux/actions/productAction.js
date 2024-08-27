function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/meeyoungchoi-front-dev/REACT-SHOPPING-MALL/products?q=${searchQuery}`;
        let response = await fetch(url)
        let data = await response.json();
        console.log(data);
        dispatch({type: "GET_PRODUCTS_SUCCESS", payload: {data}})
      
    }
}

export const productAction = {getProducts}