import React from "react";

function Categories(){
    // This will display all the categories for the retro board.
    // Each category is put into as a header.
    // The respective headers are aligned to the far left, in the center, and to the far right.
    return (
        <div>
            <h2 style={{display: "inline", float: "left"}}>
                Went Well
                <button>+</button>
                <input type="text" placeholder="Enter text here" />
                <ul><button>Move left</button></ul>
                <ul><button>Remove</button></ul>
                <ul><button>Move right</button></ul>
                <ul><button>Like</button></ul>
                <ul><button>Dislike</button></ul>
            </h2>
            <h2 style={{display: "inline", float: "center" }}>
                To Improve
                <button>+</button>
                <input type="text" placeholder="Enter text here" />
                <ul><button>Move left</button></ul>
                <ul><button>Remove</button></ul>
                <ul><button>Move right</button></ul>
                <ul><button>Like</button></ul>
                <ul><button>Dislike</button></ul>
            </h2>
            <h2 style={{display: "inline", float: "right"}}>
                Action Items
                <button>+</button>
                <input type="text" placeholder="Enter text here" />
                <ul><button>Move left</button></ul>
                <ul><button>Remove</button></ul>
                <ul><button>Move right</button></ul>
                <ul><button>Like</button></ul>
                <ul><button>Dislike</button></ul>
            </h2>
        </div>
    );
}

export default Categories;