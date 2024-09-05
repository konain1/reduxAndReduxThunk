
import axios from 'axios'
import { productInfo } from './ProductSlice';

function getProducts(){
    return async function getProductThunk(dispatch) {
        
        let response = await axios.get('https://fakestoreapi.com/products?limit=6')

        let result = response.data;
        dispatch(productInfo(result))
    }
}

export default getProducts