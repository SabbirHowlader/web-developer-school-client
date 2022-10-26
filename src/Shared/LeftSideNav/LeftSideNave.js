import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNave = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/card-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <h2>All category: {categories.length}</h2>
            <div>
                {
                    categories.map(category => <p kye={category.id}>
                        <Link to={`/course/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNave;