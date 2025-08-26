import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import { Main, NotFiles, Colab, Product } from './pages';
import Ksports from './pages/ksports';

const App = () => {
    return (
        <>
            <BrowserRouter>
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
            </BrowserRouter>
        </>
    );
};

export default App;
