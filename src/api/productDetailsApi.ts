import { request } from "@/utils/axios/axiosInstances";

export const getProductDetails = (): Promise<any> => {
  return request.post(
    "/coral-api/get_product_variants/ck-beauty-sheer-for-women-eau-de-toilette-100ml/"
  );
};
