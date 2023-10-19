
export function Product( {productObject} ) {
    return (
        <div>
            <h2>{productObject.name}</h2>
            <p>{productObject.price}</p>
        </div>
    )
}