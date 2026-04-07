import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CafeInfo = () => {
    const [cafe, setCafe] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api')
            .then(response => {
                setCafe(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h3>Info Cafe</h3>
            {cafe ? (
                <div>
                    <p>Jam Buka: {cafe.jamBuka}</p>
                    <p>Alamat: {cafe.alamat}</p>
                </div>
            ) : (
                <p>Data tidak tersedia</p>
            )}
        </div>
    );
};

export default CafeInfo;