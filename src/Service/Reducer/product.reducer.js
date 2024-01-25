import { PRODUCTREJ, PRODUCTREQ, PRODUCTSUC } from "../../const";

const initialState = {

    products: [],
    product: null,
    isLoading: false,
    err: false,

}

export const ProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case PRODUCTREQ:
            return {
                ...state,
                isLoading: true
            };

        case PRODUCTSUC:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                err: null
            }

        case PRODUCTREJ:
            return {
                ...state,
                err: true,
                isloading: false
            }

        default:
            return state;
    }

}