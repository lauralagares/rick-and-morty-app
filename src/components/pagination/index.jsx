import './style.css';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';

function Pagination({ handlePrevious, handleNext }) {

    return (
        <>
            <button className="pagination-button" onClick={handlePrevious}>
                <GrPrevious />
            </button>

            <button className="pagination-button" onClick={handleNext}>
                <GrNext />
            </button>
        </>
    )
}

export default Pagination
