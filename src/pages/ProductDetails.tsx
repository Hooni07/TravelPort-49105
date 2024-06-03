/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import useFetchDetails from '@/hooks/useFetchDetails';
import useModal from '@/hooks/useModal';
import useFetchReview from '@/hooks/useFetchReview';
import KakaoMap from '@/components/common/map/KakaoMap';
import Modal from '@/components/common/Modal';

const ProductDetails = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { product, option } = useFetchDetails(1, 1);

  const { review } = useFetchReview(5);

  return (
    <>
      <img src={product?.productImages[0]} alt="상품이미지" />
      <div>{product?.name}</div>
      <div>{product?.productDesc}</div>
      <div>{option?.userCount}표 남음</div>
      <button onClick={openModal}>위치: {product?.buildingName}</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <KakaoMap
          x={product?.productSiteLat}
          y={product?.productSiteLng}
          name={product?.buildingName || ''}
        />
      </Modal>
      <div>
        <h2>
          리뷰 <span>총 27개</span>
        </h2>
        <div>{review?.score}</div>
      </div>
    </>
  );
};

export default ProductDetails;
