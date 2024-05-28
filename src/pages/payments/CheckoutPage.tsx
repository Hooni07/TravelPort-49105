import './Payments.css';
import usePaymentWidget from '@/hooks/usePaymentWidget';

const CheckoutPage = () => {
  const paymentAmount = 10000; // 결제 금액
  const productName = '7팀의 짱멋찐 여행 상품'; // 상품 이름
  const customerName = '박지윤'; // 고객 이름
  const customerEmail = 'parkjiyun3706@gmail.com'; // 고객 이메일

  const { requestPayment } = usePaymentWidget(
    paymentAmount,
    productName,
    customerName,
    customerEmail,
  );

  return (
    <div className="flex flex-col items-center w-full p-6 overflow-auto">
      <div className="w-[54rem] text-2xl text-white bg-pink-600 p-10 rounded-2xl">
        상품이름: {productName}
      </div>
      <br />
      <div className="w-[54rem] text-2xl text-white bg-pink-600 p-10 rounded-2xl">
        가격: {paymentAmount}원
      </div>
      <br />
      <div className="max-w-[54rem] w-full">
        <div id="payment-method" className="w-full" />
        <div id="agreement" className="w-full" />
        <div className="w-full px-6">
          <button
            type="button"
            className="w-full py-10 text-lg font-semibold text-white border-none rounded-lg cursor-pointer btn-primary"
            onClick={requestPayment}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
