import React from "react";
import Select from "react-select";
import "../css/navbar.css";
const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
    container: () => ({
        position: 'absolute',
        top: '2%',
        right: '20%',
        width: '500px',

    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        backgroundColor: "white",
        width: 500,
        display: "flex",
        borderRadius: "6px",
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
    },
};

const Search = () => {
    return (
        <Select
            styles={customStyles}
            options={options}
        />
    );
};

export default Search;
