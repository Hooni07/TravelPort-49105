import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '@/pages/auth/login/Login';
import Main from '@/pages/Main';
import CheckoutPage from '@/pages/payments/CheckoutPage';
import SuccessPage from '@/pages/payments/SuccessPage';
import FailPage from '@/pages/payments/FailPage';
import MyPage from '@/pages/MyPage';
import List from '@/pages/List';
import GoogleRedirect from '@/pages/auth/login/GoogleRedirect';
import KakaoRedirect from '@/pages/auth/login/KakaoRedirect';
import NaverRedirect from '@/pages/auth/login/NaverRedirect';
import PartnerSignup from '@/pages/auth/signup/PartnerSignup';
import UserSignup from '@/pages/auth/signup/UserSignup';
import ProductDetails from '@/pages/ProductDetails';
import ProductRegister from '@/pages/productRegister/ProductRegister';
import SearchResultPage from '@/pages/SearchResultPage';
import ReviewRegist from '@/pages/ReviewRegist';
import PartnerMain from '@/pages/PartnerMain';
import NoPage from '@/pages/NoPage';
import PreparingPage from '@/pages/PreparingPage';
import Cart from '@/pages/Cart';
import CheckoutCartPage from '@/pages/payments/CheckoutCartPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
        </Route>
        <Route path="login">
          <Route index element={<Login />} />
          <Route path="oauth">
            <Route path="google" element={<GoogleRedirect />} />
            <Route path="kakao" element={<KakaoRedirect />} />
            <Route path="naver" element={<NaverRedirect />} />
          </Route>
        </Route>
        <Route path="signup">
          <Route path="user" element={<UserSignup />} />
          <Route path="partner" element={<PartnerSignup />} />
        </Route>
        <Route path="list/:categoryId">
          <Route index element={<List />} />
        </Route>
        <Route path="details/:categoryId/:productId">
          <Route index element={<ProductDetails />} />
        </Route>
        <Route path="mypage/:status" element={<MyPage />} />
        <Route path="partner/">
          <Route index element={<PartnerMain />} />
          <Route path="mypage/:status" element={<MyPage isPartner />} />
          <Route path="product-register" element={<ProductRegister />} />
        </Route>
        <Route path="payments">
          <Route index element={<CheckoutPage />} />
          <Route path="cart" element={<CheckoutCartPage />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="fail" element={<FailPage />} />
        </Route>
        <Route path="review/:optionId">
          <Route index element={<ReviewRegist />} />
        </Route>
        <Route path="search">
          <Route index element={<SearchResultPage />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoPage />} />
        {/* 서비스 준비중 페이지  */}
        <Route path="preparing" element={<PreparingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
