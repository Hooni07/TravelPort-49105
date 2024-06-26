/* eslint-disable no-useless-catch */
// api/payments.ts
import instance from '@/utils/Axios';

const timeTableApi = {
  getTimeTableProductOption: async (optionId: number) => {
    try {
      const response = await instance.get(
        `/timeTable/productOption/${optionId}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTimeTable: async (timeTableId: number) => {
    try {
      const response = await instance.get(`/timeTable/${timeTableId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default timeTableApi;
