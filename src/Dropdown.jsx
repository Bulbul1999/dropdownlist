import { useState } from "react";

// functional component
function Dropdown ({selected,setSelected}) {
    const [isActive,setIsActive] = useState(false);

    // list items
    const options = ['Yes','Probably Not']


    return (
        <div className="dropdown">
            <h2>Should you use a dropdown?</h2>

            {/* on clicking button select */}
            <div className="dropdown-btn" onClick={e =>
            setIsActive(!isActive)}>Select
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {/* map the list */}
                    {options.map((option) => (
                        <div onClick={(e)=>{
                        setSelected(option)
                        setIsActive(false)}}
                        className="dropdown-item">
                        {option}
                    </div>
                    ))}
                
            </div>
            )}
            
        </div>
    )
}
export default Dropdown;