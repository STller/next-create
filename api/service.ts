import { get, post } from "../utils/request";

const VersionNo = "v1";

const baseUrl = `https://sanlec-api-prd.shinho.net.cn/${VersionNo}`;

export const REQUEST = {
  /**
   * 首页轮播图*/
  bannerList: (parameter) => get(baseUrl + "/banner/img_show", parameter),
  /**
   * 表单提交*/
  formPost: (parameter) => post(baseUrl + "/journalism/point", parameter),
  /**
   * /journalism/background_set*/
  backgroundSet: (parameter) =>
    get(baseUrl + "/journalism/background_set", parameter),
  /**
   *门店信息 */
  storeAddress: (parameter) => get(baseUrl + "/salesroom/room_show", parameter),
  /**
   * 产品信息*/
  productList: (parameter) => get(baseUrl + "/journalism/product", parameter),
};

export default REQUEST;
