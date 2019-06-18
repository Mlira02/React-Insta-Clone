import React from 'react';
import './search.css';
import { FaInstagram } from 'react-icons/fa';
import { FaRegCompass } from 'react-icons/fa';
import { FaRegHeart} from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
function Search () {
    return(
        <div className='search'>
            <header>
                <a href='#'><FaInstagram /></a>
                <h2>Instagram</h2>
                <input type="text" placeholder='Search'></input>
                <a href="#"> <FaRegCompass /> </a>
                <a><FaRegHeart /></a>
                <a><IoMdPerson /></a>
            </header>
        </div>
    )
}

export default Search;