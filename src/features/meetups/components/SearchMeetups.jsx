import styles from './SearchMeetups.module.css';

function SearchMeetups({ui, actions}) {

    const {inputValue, hasSearched, searchResults} = ui;

    const {search, setInputValue, onCloseSearch, onSelectMeetup} = actions;
    
    function handleSearchSubmit(e) {
        e.preventDefault();
        search()
    }

    return (
        <div className={styles.search}>
            <form 
                className={styles.search__container}
                onSubmit={handleSearchSubmit}
            >
                <input
                    type="text"
                    placeholder="Search meetups..."
                    value={inputValue}
                    className={styles.search__input}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    type="button"
                    className={styles['search__close-btn']}
                    onClick={onCloseSearch}
                >
                    ✖️
                </button>
            </form>
        
            <div className={styles.search__results}>
                {
                    hasSearched && searchResults.length === 0 ? (
                        <p>No meetups found.</p>
                    ) : (
                        searchResults.map((meetup) => (
                            <div
                                key={meetup.id} 
                                className={styles['search__result-item']}
                                onClick={() => onSelectMeetup(meetup)}
                            >
                                <h3>{meetup.title}</h3>
                                <p>{meetup.description}</p>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default SearchMeetups;