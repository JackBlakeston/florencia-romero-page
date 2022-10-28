import { SECTIONS } from '../constants/enums';

export type ViewportStatusType = {
  [key in SECTIONS]: boolean;
};
