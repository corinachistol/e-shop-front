import { getFilters } from "./api";
import { Filter } from "./ui";

export function FilterPanel() {
    const filterList = getFilters()
    console.log(filterList)

    // return (
    //     <ul>
    //         { filterList.map( item => {
    //             return <li key={item.id} >
    //                 <Filter  label={item.label} value={item.value} />
    //             </li>
    //         } ) }
    //     </ul>
        
    // )
    return (
        <ul>
            { filterList.map( item => {
                return <li key={item.id} >
                    <Filter  children={item} />
                </li>
            } ) }
        </ul>
        
    )

}