import { useEffect, useState } from "react";
import { getMeetups } from "../services/meetups.service";

export function useSearchMeetups() {
    const [isSearchOpen, setIsSearchOpen] = useState(false); // UI
    const [hasSearched, setHasSearched] = useState(false); // UI
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {

        const title = inputValue.trim();

        if (title === '') {
            setHasSearched(false);
            setSearchResults([]);
            return;
        }

        setHasSearched(true);

        const filters = { title };

        async function fetchMeetups() {
            try {
                const meetups = await getMeetups(filters);
                setSearchResults(meetups);  
            } catch (error) {
                console.error("Search meetups error: ", error);
            }
        }

        fetchMeetups();
    }, [inputValue]);

    return {isSearchOpen, inputValue, hasSearched, searchResults, setInputValue, setIsSearchOpen};

}