import React, {useState} from 'react'

function ProductArray() {
     const [products, setProduct] = useState([
         {pCode: 1, pName:'Apple'},
         {pCode: 2, pName:'Banana'},
         {pCode: 3, pName:'Grapes'},
         {pCode: 4, pName:'Orange'}

     ])
         
      const addItemHanler = () => {
        let nObj = {pCode: 5, pName: 'PineApple'};
        let array = products.concat(nObj);
        setProduct(array)
      }

    return (
        <div>
            <h1>Product</h1>
            <ul>
            {

                products.map( pObj => (
                    <li key={pObj.pCode}>{pObj.pName}</li>
                )) 
            }

            </ul>
            <button onClick={addItemHanler}>Add Item</button>
        </div>
    )
}

export default ProductArray
