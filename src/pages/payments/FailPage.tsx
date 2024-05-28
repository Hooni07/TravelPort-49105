import './Payments.css';

const FailPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center w-full max-w-xs mx-auto">
        <h2 className="text-xl font-bold">결제를 실패했어요</h2>
        <div className="flex flex-col items-center w-full">
          <a
            className="px-4 py-2 my-2 font-bold text-black bg-gray-200 rounded cursor-pointer btn"
            href="https://developers.tosspayments.com/sandbox"
            target="_blank"
            rel="noreferrer noopener"
          >
            다시 테스트하기
          </a>
          <div className="flex gap-4">
            <a
              className="w-full px-4 py-2 font-bold text-black bg-gray-200 rounded cursor-pointer btn"
              href="https://docs.tosspayments.com/reference/error-codes"
              target="_blank"
              rel="noreferrer noopener"
            >
              에러코드 문서보기
            </a>
            <a
              className="w-full px-4 py-2 font-bold text-black bg-gray-200 rounded cursor-pointer btn"
              href="https://techchat.tosspayments.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              실시간 문의하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailPage;
