import React, { useState, useEffect, useRef } from 'react';

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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const user: User = {
    name: '우리 이름~',
    image:
      'https://i.pinimg.com/736x/53/7e/f5/537ef59499259ba707068742f91a10f8.jpg',
  };

  const menuItems = [
    { id: 'my-info', label: '내 정보', path: '/' },
    ...(userType === 'user'
      ? [
          {
            id: 'reservation-status',
            label: '예약 내역',
            path: '/reservation-status',
          },
          {
            id: 'reservation-history',
            label: '예약 현황',
            path: '/reservation-history',
          },
        ]
      : [
          {
            id: 'business-management',
            label: '사업증 관리',
            path: '/business-management',
          },
        ]),
    { id: 'logout', label: '로그아웃', action: () => setIsLoggedIn(false) },
  ];

  return (
    <div className="relative flex items-center space-x-30">
      <button
        type="button"
        className="flex items-center space-x-10"
        onClick={toggleDropdown}
      >
        <img
          src={user.image}
          alt="Profile"
          className="rounded-full cursor-pointer h-50 w-50"
        />
        <span>{user.name}</span>
      </button>
      {userType === 'user' && (
        <button type="button" className="p-5 text-white bg-blue-500">
          장바구니
        </button>
      )}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute bg-white border border-gray-300 rounded shadow-lg left-[-1rem] top-50"
          style={{ marginLeft: 0 }}
        >
          <ul className="p-5">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="w-full px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    if (item.action) {
                      item.action();
                    } else {
                      window.location.href = item.path;
                    }
                  }}
                >
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
