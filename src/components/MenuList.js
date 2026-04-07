import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuList = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/menus')
            .then(response => {
                setMenus(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h3>SureThings Menu</h3>
            <ul>
                {menus.length > 0 ? (
                    menus.map(menu => (
                        <li key={menu.id}>
                            {menu.nama_menu} - Rp{menu.harga.toLocaleString()} - {menu.kategori}
                        </li>
                    ))
                ) : (
                    <p>Data tidak tersedia</p>
                )}
            </ul>
        </div>
    );
};

export default MenuList;