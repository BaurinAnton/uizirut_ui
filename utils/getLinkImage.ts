import { ROUTE_BACKEND } from "@config";

export const getLinkImage = (url: string) => {
  const linkImage = `${ROUTE_BACKEND}${url}`;

  return linkImage;
};
