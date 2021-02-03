import Image from "next/image";
import PostForm from "../../components/postForm/index";
import Carousel from "antd-mobile/lib/carousel/index";
import "antd-mobile/lib/carousel/style/index.css";
export default function Brand() {
  return (
    <div className="relative">
      <div style={{ top: "42px" }} className="header sticky w-full bg-white">
        <ul
          style={{ height: "40px" }}
          className="flex justify-evenly items-center"
        >
          <li className="block text-sm">品牌背景</li>
          <li className="block text-sm">品牌理念</li>
        </ul>
      </div>
      <div style={{ borderTop: "6px solid #ECECEC" }} className="brandBg px-4">
        <p className="mt-6 mb-5  font-bold">品牌背景</p>
        <div className="w-full">
          <Image
            src="https://s3-028-shinho-shinshop-uat-bjs.s3.cn-north-1.amazonaws.com.cn/img/1585299143关于-品牌背景-最大的图.jpg"
            width="100"
            height="50"
            layout="responsive"
          />
        </div>
        <p
          style={{ marginTop: "24px", marginBottom: "16.5px" }}
          className=" font-bold"
        >
          公司背景介绍
        </p>
        <div className="content text-sm text-text leading-6">
          <p>
            三两胶东酱香包隶属于欣耕（烟台）餐饮管理有限公司，是欣和调味品旗下定位于中式便捷连锁快餐品牌。
          </p>
          <p>
            三两品牌创立于2019年4月，座落于美丽的滨海城市烟台，地处胶东半岛东部。目前，三两胶东酱香包相继开了十几家门店和加盟店，未来不仅在烟台，在胶东甚至全国将会有更多的三两胶东酱香包连锁店。
          </p>
        </div>
        <Carousel infinite slideWidth={0.4} cellSpacing={14}>
          {
            ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'].map(item => (
              <Image
                key={item}
                src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}
                alt="img"
                width="100"
                height="70"
                layout="responsive"
              />
            ))
          }
        </Carousel>
      </div>
      <PostForm />
    </div>
  );
}
