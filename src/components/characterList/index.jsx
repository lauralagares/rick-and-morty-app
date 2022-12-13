import './style.css';
import { useState, useEffect } from 'react';
import CharacterCard from '../characterCard';
import Pagination from '../pagination';

function CharacterList() {

    let [charactersOriginal, updateCharactersOriginal] = useState([]);
    let [charactersFiltered, updateCharactersFiltered] = useState([]);
    let [lastName, updateLastName] = useState('');
    let [lastStatus, updateLastStatus] = useState('all');
    let [page, updatePage] = useState(1);


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(res => res.json())
            .then(data => {
                updateCharactersOriginal(data.results);
                updateCharactersFiltered(data.results);
            })
    }, [page]);

    const filterByName = e => {
        let inputNameValue = e.target.value.toLowerCase();
        filterCharacters(inputNameValue, lastStatus);
        updateLastName(inputNameValue);
    }

    const filterByStatus = e => {
        let inputStatusValue = e.target.value;
        filterCharacters(lastName, inputStatusValue);
        updateLastStatus(inputStatusValue);
    }

    const filterCharacters = (name, status) => {

        let filteredArray = charactersOriginal.filter(c => c.name.toLowerCase().includes(name))
        filteredArray =
            status === "all"
                ? filteredArray
                : filteredArray.filter(c => (c.status.toLowerCase() === status))

        updateCharactersFiltered(filteredArray);

    }

    const handlePrevious = () => {
        updatePage(page <= 1 ? 1 : page - 1);
    }

    const handleNext = () => {
        updatePage(page === 42 ? 42 : page + 1);
    }

    return (

        <div className="container-fluid mt-5 mb-5" id="characters-container">

            <div className="d-flex justify-content-center mt-3">
                <input type="text"
                    id='pru'
                    className="form-control"
                    style={{ width: "33rem" }}
                    placeholder='Search Character' onChange={filterByName} />
            </div>

            <section onChange={filterByStatus}
                className="d-flex justify-content-center gap-1 m-2 filter-buttons">

                <label htmlFor="alive"><p>ALIVE</p></label>
                <input type="radio" id="alive" name="status" value="alive" />

                <label htmlFor="dead"><p>DEAD</p></label>
                <input type="radio" id="dead" name="status" value="dead" />

                <label htmlFor="unknown"><p>UNKNOWN</p></label>
                <input type="radio" id="unknown" name="status" value="unknown" />

                <label htmlFor="all"><p>ALL</p></label>
                <input type="radio" id="all" name="status" value="all" defaultChecked />
            </section>

            <section className='d-flex flex-wrap justify-content-center m-4'
                style={{ minHeight: "50vh" }}>

                {charactersFiltered.map((c) => <CharacterCard character={c} key={c.id}></CharacterCard>)}

            </section>

            <Pagination handlePrevious={handlePrevious} handleNext={handleNext}></Pagination>

        </div>
    )
}

export default CharacterList