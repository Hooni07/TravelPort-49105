import instance from '@/utils/Axios';
import { ReviewData, ReviewInfoType } from '@/constants/Types';

const getReviewAll = () => {
  return instance({
    url: `/review/all`,
    method: 'GET',
  });
};

const getReviewInfo = async (reviewId: number) => {
  return instance({
    url: `/review/${reviewId}`,
    method: 'GET',
  });
};

const putReview = async (
  userId: number,
  productOptionId: number,
  reviewId: number,
  reviewInfo: ReviewInfoType,
) => {
  return instance({
    url: `/review/${reviewId}`,
    method: 'POST',
    data: {
      userId,
      productOptionId,
      ...reviewInfo,
    },
  });
};

const deleteReview = async (reviewId: number) => {
  return instance({
    url: `/review/${reviewId}`,
    method: 'DELETE',
  });
};

const getProductReview = async (
  productId: number,
): Promise<ReviewData[] | any> => {
  return instance({
    url: `/review/product/${productId}`,
    method: 'GET',
  });
};

const postReview = async (
  userId: number,
  productOptionId: number,
  productId: number,
  reviewInfo: ReviewInfoType,
) => {
  return instance({
    url: '/review',
    method: 'POST',
    data: {
      userId,
      productOptionId,
      productId,
      ...reviewInfo,
    },
  });
};

export default {
  getReviewAll,
  getReviewInfo,
  putReview,
  deleteReview,
  getProductReview,
  postReview,
};
