import Image from "next/image";
import PostForm from "../../components/postForm/index";
import Carousel from "antd-mobile/lib/carousel/index";
import "antd-mobile/lib/carousel/style/index.css";
import { REQUEST } from "../../api/service";

export async function getStaticProps() {
  let storesList = [];
  await REQUEST.storeAddress().then((res: { results: Array<any> }) => {
    res.results.map((item) => {
      if (item.salesname.indexOf("（") !== -1) {
        //包含
        item.NEWsalesname =
          item.area + item.salesname.split("（")[1].split("）")[0];
      } else {
        item.NEWsalesname = item.salesname;
      }
    });
    storesList = res.results;
  });
  return {
    props: {
      // passed to the page component as props
      storesList,
    },
  };
}

export default function Brand({ storesList }) {
  return (
    <div className="relative">
      <div
        style={{ top: "42px" }}
        className="header sticky z-10 w-full bg-white"
      >
        <ul
          style={{ height: "40px" }}
          className="flex justify-evenly items-center"
        >
          <li className="block text-sm">品牌背景</li>
          <li className="block text-sm">品牌理念</li>
        </ul>
      </div>

      <div
        style={{
          borderTop: "6px solid #ECECEC",
          borderBottom: "5px solid #ECECEC",
        }}
        className="brandBg px-4"
      >
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
        <div style={{ paddingTop: "27px", paddingBottom: "27px" }}>
          <Carousel autoplay slideWidth={0.4} cellSpacing={14}>
            {storesList.map((item) => (
              <Image
                key={item}
                src={item.img_url}
                alt="img"
                width="100"
                height="70"
                layout="responsive"
              />
            ))}
          </Carousel>
        </div>
      </div>

      <div
        style={{
          borderBottom: "6px solid #ECECEC",
          paddingBottom: "25px",
        }}
        className="view px-4"
      >
        <p
          style={{ marginTop: "25px", marginBottom: "17px" }}
          className=" font-bold"
        >
          品牌理念
        </p>
        <p className="text-sm text-text leading-7">
          “三两”代表了我们对于食物和生活的态度，我们希望创造的不仅仅是美食，还有美好的生活。三两时间，一餐好食，“三两”希望每个人都能和时间做朋友，即使生活再忙碌，也要好好吃饭，无论是奔波的早晨，或是忙碌的工作间隙，亦或加班宵夜时，都能静下来享受这一餐一食的美好。{" "}
        </p>
        <div className="itemList">
          <div className="item flex justify-evenly mt-4">
            <div className="img w-28">
              <Image
                src="/images/Idea_1.jpg"
                width="100"
                height="100"
                layout="responsive"
              />
            </div>
            <div className="w-40 text-sm flex flex-col justify-center">
              <p className="text-base">对原料死磕</p>
              <p style={{ marginTop: "17px" }} className="text-text">
                所有原料全程可准朔，让你吃的每一口都安心。
              </p>
            </div>
          </div>
          <div className="item flex justify-evenly mt-4">
            <div className="w-40 text-sm flex flex-col justify-center">
              <p className="text-base">手工现做现蒸</p>
              <p style={{ marginTop: "17px" }} className="text-text">
                我们更愿意用手作得温度，传递真实的保证味道。
              </p>
            </div>
            <div className="img w-28">
              <Image
                src="/images/Idea_2.jpg"
                width="100"
                height="100"
                layout="responsive"
              />
            </div>
          </div>
          <div className="item flex justify-evenly mt-4">
            <div className="img w-28">
              <Image
                src="/images/Idea_3.jpg"
                width="100"
                height="100"
                layout="responsive"
              />
            </div>
            <div className="w-40 text-sm flex flex-col justify-center">
              <p className="text-base">三小时报废原则</p>
              <p style={{ marginTop: "17px" }} className="text-text">
                追求包子得【最佳赏味期】，是对食材和食客得尊重。
              </p>
            </div>
          </div>
          <div className="item flex justify-evenly mt-4">
            <div className="w-40 text-sm flex flex-col justify-center">
              <p className="text-base">严格的手艺要求</p>
              <p style={{ marginTop: "17px" }} className="text-text">
                散发着手作气息得包子让你真正感受到平凡生活得本真。
              </p>
            </div>
            <div className="img w-28">
              <Image
                src="/images/Idea_4.jpg"
                width="100"
                height="100"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      <PostForm />
    </div>
  );
}
