import { useState } from "react";
import { getMeetups } from "../services/meetups.service";

export function useSearchMeetups() {
    const [isSearchOpen, setIsSearchOpen] = useState(false); // UI
    const [hasSearched, setHasSearched] = useState(false); // UI
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    async function search() {
        const title = inputValue.trim();

        if (title === '') {
            return;
        }

        const filters = { title };

        try {
            const meetups = await getMeetups(filters);
            setSearchResults(meetups);  
            setHasSearched(true);
        } catch (error) {
            console.error("Search meetups error: ", error);
        }
    }

    return {isSearchOpen, inputValue, hasSearched, searchResults, search, setInputValue, setIsSearchOpen};

}