import React from "react";

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void; // Make sure this is correctly typed
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="my-6">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products..."
                className="w-full p-3 border rounded-md shadow-sm"
            />
        </div>
    );
};

export default SearchBar;
