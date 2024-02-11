import { PRODUCTREJ, PRODUCTREQ, PRODUCTSUC } from "../../const";

const initialState = {

    products: [],
    product: null,
    isLoading: false,
    err: false,
    cartproducts : []
}

export const ProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case PRODUCTREQ:
            return {
                ...state,
                isLoading: true
            };

            case 'ADD_CART':
            // const find = state.products.findIndex((item) => item.id === action.payload.id)
            console.log(action.payload.data,"reducer");
            
                return (
                    {
                        ...state,
                        cartproducts: [...state.cartproducts, action.payload.data]
                    }

                )
            

                case 'REMOVE_CART':

                let removedata = state.cartproducts
    
                let allproducts = removedata.filter((delet, id) => {
                    return delet.id != action.payload
                })
    
                return (
                    {
                        ...state,
                        cartproducts: allproducts
                    }
    
                )
    
            case 'INC':
    
                // const id = action.payload
    
                // const inccartitem = state.cartproducts.map((item) => {
                //     return item.id == id ? { ...item, Quantity: (item.Quantity || 1) + 1 } : item
                // })
    
                // return (
                //     {
                //         ...state,
                //         cartproducts: inccartitem
                //     }
    
                // )
    
    
            case 'DEC':
    
                // const decid = action.payload
                
                // const deccartitem = state.cartproducts.map((item) => {
    
                //     if(item.id === decid && item.Quantity > 1)
                //     {
                //         return { ...item, Quantity: (item.Quantity || 1 ) - 1 }
                //     }
                //     return item
    
                // })
                // .filter((item) => item.Quantity > 0)
    
                // return (
                //     {
                //         ...state,
                //         cartproducts: deccartitem
                //     }
    
                // )

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