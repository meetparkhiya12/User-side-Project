import { addDoc, collection, getDocs } from "firebase/firestore"
import { PRODUCTREJ, PRODUCTREQ, PRODUCTSUC } from "../../const"
import { db } from "../../firebaseConfig"

export const PRODUCTReq = () =>{
    return{
      type: PRODUCTREQ
    }
  }

  export const PRODUCTSuc = (data) =>{
    return{
      type: PRODUCTSUC,
      payload:data
    }
  }

  export const PRODUCTRej = () =>{
    return{
      type: PRODUCTREJ
    }
  }

  export const addcart = (id,data,index) => {

 console.log(data,"dataaction");
    return{
        type : 'ADD_CART',
        payload : {id,data,index}
    }
    
}

export const productremove = (id) => {
  return{
      type : 'REMOVE_CART',
      payload : id
  }
}

export const increment = (id) => {
  return{
      type : 'INC',
      payload : id
  }
}

export const decrement = (id) => {
  return{
      type : 'DEC',
      payload : id
  }
}


export const Productadmin = (productData) => {
    return async dispatch => {
      await dispatch(PRODUCTReq());
  
      addDoc(collection(db, "Product"), productData).then((res) => {
        dispatch(dataGet());
      }).catch((err) => {
        console.log("err", err);
        dispatch(PRODUCTRej(err));
      })
    }
  }

  export const dataGet = () =>{

      return async dispatch => {
        dispatch(PRODUCTReq());

      await getDocs(collection(db , "Product")).then((res) =>{
          let arr= [];
          res.forEach((doc) => {
            let obj = {id: doc.id, ...doc.data()}
            arr = [...arr , obj]
          });
          dispatch(PRODUCTSuc(arr));
          console.log("arr" , arr);
        }).catch((err) =>{
          dispatch(PRODUCTRej(err));
        });
      };
  };