let initialState = {
    products: [],  // 초기 상태를 빈 배열로 설정
    loading: false,
    error: null
};

function productReducer(state=initialState, action) {
    let {type, payload} = action;
    switch(type) {
        case "GET_PRODUCTS_SUCCESS":
            return {...state, productList: payload.data};
        default:
            return {...state}
    }
}

export default productReducer;