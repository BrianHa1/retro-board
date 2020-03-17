import React from "react";

function Categories(){
    // This will display all the categories for the retro board.
    return (
        <div>
            <h2 style={{display: "inline", float: "left"}}>Went Well</h2>
            <h2 style={{display: "inline", float: "center" }}>To Improve</h2>
            <h2 style={{display: "inline", float: "right"}}>Action Items</h2>
        </div>
    );
}

export default Categories;