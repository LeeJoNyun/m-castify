import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import { Main, NotFiles, Colab, Product } from './pages';
import Ksports from './pages/ksports';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname, dispatch]);

    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="ksports" element={<Ksports />} />
                    <Route index element={<Main />} />
                    <Route path="colab" element={<Colab />} />
                    <Route path="product" element={<Product />} />
                    <Route path="*" element={<NotFiles />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
