import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Idea.css'
const Idea = () => {
    const [idea, setIdea] = useState([]);

    const fetchData = async () => {
        const res = await axios.get("https://delete-api-gdsc-wiki.herokuapp.com/");
        // console.log(res.data);
        setIdea(res?.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`https://delete-api-gdsc-wiki.herokuapp.com/api/${id}`)
        console.log("Deleted Successfully");
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (
        <div className='container'>
            {
                idea.map((e) => {
                    return (
                        <div className="ideas">
                            <div className="ideaCard">
                                <h3>Team Name: {e?.teamName}</h3>
                                <p><b>Des: </b>{e?.description}</p>
                                <p><b>Id: </b>{e?._id}</p>
                                <button onClick={() => handleDelete(e?._id)}>Delete Idea</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Idea