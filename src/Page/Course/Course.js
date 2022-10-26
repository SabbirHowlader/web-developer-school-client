import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const card = useLoaderData();
    return (
        <div>
            <h2>This is Course </h2>
        </div>
    );
};

export default Course;