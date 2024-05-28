import React, { useState } from 'react';
import LoginUserHeaderBar from './LoginUserHeaderBar';
import UnLoginUserHeaderBar from './UnLoginUserHeaderBar';

interface HeaderBarProps {
  userType: 'user' | 'partner'; // 유저 타입: 'user' 혹은 'partner'
}

const HeaderBar: React.FC<HeaderBarProps> = ({ userType }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <div className="py-[4.5rem] px-[3.6rem] text-2xl font-bold">
      <div className="flex items-center">
        <div className="flex-1 ">
          <div className="bg-pink-200 w-170 py-[1.5rem] px-[3.2rem]">LOGO</div>
        </div>
        <div className="flex-1 bg-[#F5F5F5]">
          <div className="py-[1.5rem] px-[3.2rem]">서치바</div>
        </div>
        <div className="flex-1" />
        <div className="flex justify-end flex-1 space-x-2">
          {isLoggedIn ? (
            <LoginUserHeaderBar
              setIsLoggedIn={setIsLoggedIn}
              userType={userType}
            />
          ) : (
            <UnLoginUserHeaderBar />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
