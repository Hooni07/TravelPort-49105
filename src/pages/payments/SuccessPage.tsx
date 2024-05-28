import { useNavigate } from 'react-router-dom';
import './Payments.css';

const SuccessPage = () => {
  const navigate = useNavigate();

  function confirm() {
    navigate('/');
  }

  return (
    <div className="w-full">
      <div className="flex flex-col items-center w-full max-w-xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-center">
            결제 요청까지 성공했어요.
          </h2>
          <br />
          <h4 className="text-lg text-center">
            <div>상품이름 : 7팀의 개멋찐 여행 상품</div>
            <br />
            <div>금액: 10,000원</div>
          </h4>
          <br />
          <button
            type="button"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer btn"
            onClick={confirm}
          >
            결제 승인 버튼 클릭
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
