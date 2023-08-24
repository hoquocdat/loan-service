import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LoanWhereInput = {
  id?: StringFilter;
  valuationAmount?: IntNullableFilter;
};
