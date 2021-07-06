import React, {useState, useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Searchbar.css';


function Searchbar({Search}) {

    const [text, setText] = useState('');

    useEffect(() => {
        console.log(text);
    }, [text])

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Search(text);
        setText((text) => {return ''});
    };

    

    return (
        <div className="Searchbar">
            <form>
                <input type="text" onChange={handleChange} placeholder="Search" value={text || ''}></input>
                <button onClick={handleSubmit}>
                    <SearchIcon style={{ "height": "28px", "width": "28px" }}/>
                </button>
            </form>
        </div>
    );
}

export default Searchbar
