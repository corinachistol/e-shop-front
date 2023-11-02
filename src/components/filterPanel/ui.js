
export function Filter( {children} ) {
    console.log(children)
    
    return (
        <div>
            <p>{children.label} ({children.value})</p>
        </div>
    )
}