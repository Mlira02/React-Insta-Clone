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
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1920px-Instagram_logo.svg.png" alt="insta name" className="igName" />
                <input type="text" placeholder='Search'></input>
                <a href="#"> <FaRegCompass /> </a>
                <a href="#"><FaRegHeart /></a>
                <a href="#"><IoMdPerson /></a>
            </header>
        </div>
    )
}

export default Search;