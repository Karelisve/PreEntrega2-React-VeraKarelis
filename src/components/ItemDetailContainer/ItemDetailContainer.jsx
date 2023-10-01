import { useState, useEffect } from 'react';
import { getProductById} from '../Products/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])

    return(
        <div>
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer;