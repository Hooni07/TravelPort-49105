import { ReservStatusType } from './Types';

interface ReservStatus {
  PENDING: ReservStatusType;
  FINISHED: ReservStatusType;
  REJECTED: ReservStatusType;
  CANCELED: ReservStatusType;
  DELETED: ReservStatusType;
  REVIEWED: ReservStatusType;
}

const RESERV_STATUS: ReservStatus = {
  PENDING: 1 || null,
  FINISHED: 2,
  REJECTED: 3,
  DELETED: 4,
  REVIEWED: 5,
  CANCELED: 6,
};

export default RESERV_STATUS;
