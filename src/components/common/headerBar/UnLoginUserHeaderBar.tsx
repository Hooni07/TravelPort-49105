import React from 'react';
import { useNavigate } from 'react-router-dom';

const UnLoginUserHeaderBar = () => {
  const navigate = useNavigate();
  return (
    <div className="space-x-2">
      <button
        type="button"
        className="bg-slate-300 py-[1.5rem] px-[3.2rem] rounded-[1.2rem]"
      >
        파트너 페이지
      </button>
      <button
        type="button"
        className="bg-[#3F57D6] text-white py-[1.5rem] px-[3.2rem] rounded-[1.2rem]"
        onClick={() => navigate('./login')}
      >
        로그인 및 회원가입
      </button>
    </div>
  );
};

export default UnLoginUserHeaderBar;
