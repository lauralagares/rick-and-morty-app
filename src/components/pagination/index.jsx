import './style.css';
import { GrLinkPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';
import { Link } from 'react-scroll';

function Pagination({ handlePrevious, handleNext }) {

    return (
        <div className='pagination-container'>

            <Link className='pagination-link'
                to="characters-container"
                spy={true} smooth={true}
                offset={-20}
                duration={500}>
                <button className="pagination-button" onClick={handlePrevious}>
                    <GrLinkPrevious /><p>PREVIOUS PAGE</p>
                </button>
            </Link>

            <Link className='pagination-link'
                to="characters-container"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}>
                <button className="pagination-button" onClick={handleNext}>
                    <p>NEXT PAGE</p><GrLinkNext />
                </button>
            </Link>

        </div>
    )
}

export default Pagination
