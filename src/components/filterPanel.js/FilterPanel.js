import { getFilters } from "./api";
import { Filter } from "./ui";

export function FilterPanel() {
    const filterList = getFilters()
    console.log(filterList)

    return (
        <ul>
            { filterList.map( item => {
                return <li>
                    <Filter  key={item.id} children={item}/>
                </li>
            } ) }
        </ul>
        
    )




}