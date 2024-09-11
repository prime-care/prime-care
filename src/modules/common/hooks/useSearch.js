import { useState } from 'react';

const useSearch = (arrayOfObjects) => {
    const init = [...arrayOfObjects]
    const [searchResults, setSearchResults] = useState(init);



    const handleSearch = (searchTerm) => {
        if (searchTerm === "") {
            setSearchResults(init);
        } else {

            const lowercasedTerm = searchTerm.toLowerCase();
            const filtered = arrayOfObjects.filter((obj) =>
                Object.values(obj).some((val) =>
                    val.toString().toLowerCase().includes(lowercasedTerm)
                )
            );
            setSearchResults(filtered);
        }
    };

    return { searchResults, handleSearch };
};

export default useSearch;
