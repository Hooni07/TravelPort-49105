import React, { useEffect, useState } from 'react';
import minusPay from '@/assets/icons/minusPay.svg';
import plusPay from '@/assets/icons/plusPay.svg';
import useProductOptionQuery from '@/hooks/reactQuery/productOption/useProductOptionQuery';
import useTimeTableQuery from '@/hooks/reactQuery/timeTable/useTimeTableQuery';
import { useNavigate } from 'react-router-dom';
import useCartDeleteByCartIdMutation from '@/hooks/reactQuery/cart/useCartDeleteByCartIdMutation';
import Loading from '@/components/common/Loading';

interface CartInfo {
  cartId: number;
  name: string;
  option: string;
  day: any;
  count: number;
  price: string | number;
  maxCount: number;
  categoryId: number;
}

interface CartListProps {
  item: any;
  onSelect: (item: any, isSelected: boolean) => void;
  onDelete: (cartId: number) => void;
  onPriceChange: (totalPrice: any, count: number) => void;
}

const CartList = ({
  item,
  onSelect,
  onDelete,
  onPriceChange,
}: CartListProps) => {
  const navigate = useNavigate();
  const cartId = item?.id;
  const optionId = item?.productOption?.id;
  const timeTableId = item?.timeTable?.id;

  const {
    productOption,
    isLoading: productOptionLoading,
    refetch: refetchProductOption,
  } = useProductOptionQuery(optionId);
  const { data: timeTableData, isLoading: timeTableLoading } =
    useTimeTableQuery(timeTableId);
  const { mutate: cartDelete } = useCartDeleteByCartIdMutation();

  const [count, setCount] = useState(item?.ticketCount);
  const [isSelected, setIsSelected] = useState(false);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    // 상품 정보가 로딩된 후에 초기화
    if (!productOptionLoading && !timeTableLoading) {
      setCount(item?.ticketCount);
      setIsSelected(false);
    }
  }, [item, productOptionLoading, timeTableLoading]);

  useEffect(() => {
    if (
      productOption &&
      (productOption.optionName === undefined ||
        productOption.optionPrice === undefined)
    ) {
      setRefreshData(true);
    }
  }, [productOption]);

  useEffect(() => {
    if (refreshData) {
      refetchProductOption();
      setRefreshData(false);
    }
  }, [refreshData, refetchProductOption]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(2);
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    return `${year}.${month}.${day}`;
  };

  const formattedDate = formatDate(timeTableData?.targetDate);

  const image = item?.productOption?.product?.thumbnail;
  const name = item?.productOption?.product?.name;
  const options = productOption && productOption.optionName;
  const price = productOption && productOption.optionPrice;
  const maxCount = productOption && productOption.maxUserCount;
  const userCount = productOption && productOption.userCount;
  const categoryId = item?.productOption?.product?.categoryId;

  const option =
    categoryId === 1 ? `${options} ( ${maxCount} 인실 )` : `${options}`;

  const day =
    categoryId === 1
      ? `${formattedDate} ~ 1박`
      : `${formattedDate} ${timeTableData?.startTimeOnly} ~ ${timeTableData?.endTimeOnly}`;

  const handleSelect = () => {
    const newSelected = !isSelected;
    setIsSelected(newSelected);

    const selectedItem: CartInfo = {
      cartId,
      name,
      option,
      day,
      count,
      price,
      maxCount,
      categoryId,
    };

    onSelect(selectedItem, newSelected);
  };

  useEffect(() => {
    const totalPrice = (price ?? 0) * count;
    onPriceChange(totalPrice, count);
  }, [count, price]);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    onPriceChange((price ?? 0) * newCount, newCount);
  };

  const decreaseCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onPriceChange((price ?? 0) * newCount, newCount);
    }
  };

  const handleDetail = () => {
    const cId = item?.productOption?.product?.categoryId;
    const id = item?.productOption?.product?.id;
    navigate(`/details/${cId}/${id}`);
  };

  const deleteCartList = () => {
    const id = item?.id;
    cartDelete(id, {
      onSuccess: () => {
        onDelete(cartId);
      },
    });
  };

  if (
    !item ||
    productOptionLoading ||
    timeTableLoading ||
    !productOption ||
    options === undefined ||
    price === undefined
  )
    return <Loading />;

  return (
    <div className="flex items-center py-16 border-solid border-b-1 border-black_3">
      <div className="flex justify-between w-full mobile:flex-col">
        <div className="flex">
          <div className="flex items-center justify-center mr-12">
            <input
              type="checkbox"
              className="w-20 h-20"
              checked={isSelected}
              onChange={handleSelect}
            />
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex gap-12 mobile:flex-col">
              <div className="flex gap-12">
                <img
                  className="w-100 h-100"
                  src={image}
                  alt="예약 상품 이미지"
                />
                <div className="hidden mb-6 font-normal text-18 mobile:flex">
                  {name}
                </div>
              </div>
              <div>
                <div className="mb-12 font-normal text-18 mobile:hidden">
                  {name}
                </div>
                <div className="flex flex-row items-start gap-12 mobile:flex-col">
                  <div className="flex flex-col gap-16">
                    <div className="flex gap-12">
                      <div className="flex flex-row items-start gap-8">
                        <div className="font-normal text-16">옵션</div>
                        <div className="px-8 py-4 font-normal border-solid text-11 bg-black_3 border-1 border-black_5 rounded-4">
                          {option}
                        </div>
                      </div>
                      <div className="flex flex-row items-start gap-8">
                        <div className="font-normal text-16">날짜</div>
                        <div className="px-8 py-4 font-normal border-solid text-11 bg-black_3 border-1 border-black_5 rounded-4">
                          {day}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-12 font-semibold text-14 text-black-7">
                      <button
                        onClick={handleDetail}
                        className="underline"
                        type="button"
                      >
                        제품 상세보기
                      </button>
                      <button
                        onClick={deleteCartList}
                        className="underline"
                        type="button"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center ml-auto gap-60 mobile:justify-between mobile:w-full mobile:mt-40">
          <div
            className={`flex gap-16 px-6 py-4 border-solid border-1 border-black_4 rounded-4 ${isSelected && 'bg-black-3'}`}
          >
            <button
              type="button"
              onClick={decreaseCount}
              className="outline-none"
              disabled={isSelected || count <= 1}
            >
              <img src={minusPay} alt="마이너스 아이콘" />
            </button>
            <div
              className={`font-normal text-16 ${isSelected && 'text-blue-6'}`}
            >
              {count}
            </div>
            <button
              type="button"
              onClick={increaseCount}
              className="outline-none"
              disabled={isSelected || count >= userCount}
            >
              <img src={plusPay} alt="플러스 아이콘" />
            </button>
          </div>
          <div className="flex font-semibold text-18 ">
            {(price * count).toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
