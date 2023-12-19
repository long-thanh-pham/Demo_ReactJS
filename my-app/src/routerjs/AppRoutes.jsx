import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Catalog from '../lit/Catalog';
import Detail from '../lit/detail/Detail';
import LIT from '../lit/LIT';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/:category/search/:keyword' element={<Catalog />} />
            <Route path='/:category/:id' element={<Detail />} />
            <Route path='/:category' element={<Catalog />} />
            <Route path='/' element={<LIT />} />
        </Routes>
    );
}

export default AppRoutes;
