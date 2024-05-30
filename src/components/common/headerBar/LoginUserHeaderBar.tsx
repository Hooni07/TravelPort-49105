import React, { useState, useRef } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import cart from '@/assets/icons/shoppingCart.svg';
import myInfo from '@/assets/icons/my-info.svg';
import reservationStatus from '@/assets/icons/reservation-status.svg';
import list from '@/assets/icons/list.svg';
// import business from '@/assets/icons/business.svg';

interface LoginUserHeaderBarProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userType: 'user' | 'partner';
}

interface User {
  name: string;
  image: string;
}

const LoginUserHeaderBar: React.FC<LoginUserHeaderBarProps> = ({
  setIsLoggedIn,
  userType,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  const user: User = {
    name: '김짱구',
    image:
      'https://i.pinimg.com/736x/53/7e/f5/537ef59499259ba707068742f91a10f8.jpg',
  };

  const menuItems = [
    { id: 'my-info', icon: myInfo, label: '내 정보', path: '/' },
    ...(userType === 'user'
      ? [
          {
            id: 'reservation-status',
            icon: list,
            label: '예약 내역',
            path: '/reservation-status',
          },
          {
            id: 'reservation-history',
            icon: reservationStatus,
            label: '예약 현황',
            path: '/reservation-history',
          },
        ]
      : []),
    { id: 'logout', label: '로그아웃', action: () => setIsLoggedIn(false) },
  ];

  return (
    <div className="relative flex items-center space-x-12">
      <button
        type="button"
        className="flex items-center"
        onClick={toggleDropdown}
      >
        <img
          src={user.image}
          alt="Profile"
          className="rounded-full cursor-pointer h-[3.2rem] w-[3.2rem]"
        />
      </button>
      <img
        className="h-[3.2rem] w-[3.2rem]"
        src={cart}
        alt="쇼핑 카트 아이콘"
      />
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-10 bg-white border border-gray-300 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] top-full rounded-[1.2rem] pt-[0.8rem] pb-[0.4rem]"
          style={{ marginLeft: '-1.5rem', width: 'auto' }}
        >
          <ul className="w-[106px] text-[1.5rem] font-normal">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className={`px-[1.2rem] flex justify-center items-center p-2 ${index === menuItems.length - 1 ? 'border-t border-solid border-gray-200' : ''} ${item.label === '로그아웃' ? 'hover:text-[#000] text-gray-400 font-semibold' : 'hover:bg-blue-50 hover:text-black'}`}
              >
                <button
                  type="button"
                  className={`flex items-center w-full py-1.5 cursor-pointer ${item.label === '로그아웃' && 'justify-center'}`}
                  onClick={() => {
                    if (item.action) {
                      item.action();
                    } else {
                      window.location.href = item.path;
                    }
                  }}
                  style={{ gap: item.label === '로그아웃' ? '0' : '0.8rem' }}
                >
                  {item.icon && item.label !== '로그아웃' && (
                    <img src={item.icon} alt="아이콘" className="mr-1 " />
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoginUserHeaderBar;
