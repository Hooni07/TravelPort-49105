import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '@/pages/Login';
import Main from '@/pages/Main';
import CheckoutPage from '@/pages/payments/CheckoutPage';
import SuccessPage from '@/pages/payments/SuccessPage';
import FailPage from '@/pages/payments/FailPage';
import MyPage from '@/pages/MyPage';
import Location from '@/pages/productRegist/location/Location';
import Reservation from '@/pages/Reservation';
import List from '@/pages/List';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
        </Route>
        <Route path="login">
          <Route index element={<Login />} />
        </Route>
        <Route path="reservation">
          <Route index element={<Reservation />} />
        </Route>
        <Route path="list">
          <Route index element={<List />} />
        </Route>
        <Route path="location">
          <Route index element={<Location />} />
        </Route>
        <Route path="mypage">
          <Route index element={<MyPage />} />
        </Route>
        <Route path="payments">
          <Route index element={<CheckoutPage />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="fail" element={<FailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
