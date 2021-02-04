import PostForm from "../../components/postForm/index";
import Image from "next/image";
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
    <div>
      <div
        style={{ top: "42px", borderBottom: "6px solid #ECECEC" }}
        className="header sticky z-10 w-full bg-white"
      >
        <ul
          style={{ height: "40px" }}
          className="flex justify-evenly items-center"
        >
          <li className="block text-base text-text">爆款产品</li>
          <li className="block text-base text-text">精选好料</li>
          <li className="block text-base text-text">独特工艺</li>
        </ul>
      </div>

      <div style={{ borderBottom: "6px solid #ECECEC" }} className="px-4">
        <p className="mt-6 mb-4 font-extrabold text-lg">爆款推荐</p>
        <p className="text-sm leading-7 text-text">
          酱香包是三两得明星招牌，浓郁得酱香气息，是叫动人热爱得咸香味道。
        </p>
        <div className="mt-5">
          <Image
            src="https://s3-028-shinho-shinshop-uat-bjs.s3.cn-north-1.amazonaws.com.cn/img/1584433392爆款产品肉丁.jpg"
            width="100"
            height="47"
            layout="responsive"
          />
        </div>
        <div
          style={{ backgroundColor: "#DB392B" }}
          className="px-4 py-5 text-white"
        >
          <p className="mb-4">酱香肉丁包</p>
          <p className="text-sm leading-7">
            胶东风味
            浓郁酱香。只选用价格昂贵的猪前肘肉入馅，肉丁搭配新鲜洋葱、大葱，用秘制酱料调味，咬下的一瞬间真的超满足，面香、酱香、肉香，妈妈的味道，一口即达。
          </p>
        </div>
        <div className="mt-7">
          <div className="flex justify-between items-center">
            <p className="font-extrabold text-lg">三两产品</p>
            <div>
              <button
                style={{ width: "50px", height: "20px" }}
                className="shadow-md mr-2 rounded text-sm"
              >
                包子
              </button>
              <button
                style={{ width: "50px", height: "20px" }}
                className="shadow-md rounded text-sm"
              >
                其他
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* <div style={{ paddingTop: "27px", paddingBottom: "27px" }}>
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
          </div> */}
        </div>
      </div>

      <div style={{ borderBottom: "7px solid #ECECEC" }} className="px-4">
        <p className="mt-7 mb-4 font-extrabold text-lg">精选好料</p>
        <p className="leading-7 text-text text-sm">
          好食材才有好味道，三两对于每份原料坚持不妥协、不断颠覆、不断死磕的态度，这种近乎偏执的要求也是心怀对食物、食材的敬畏之意。
        </p>
        <div className="relative">
          <Image
            src="/images/product/materials1.png"
            width="100"
            height="50"
            layout="responsive"
          />
          <div
            style={{ backgroundColor: "#e53832" }}
            className="absolute right-5 top-0 opacity-90 text-white px-2 py-3 flex"
          >
            <span style={{ writingMode: "vertical-lr" }}>五得利面粉</span>
            <span style={{ writingMode: "vertical-lr" }}>营养健康</span>
          </div>
        </div>
        <div className="relative mt-5">
          <Image
            src="/images/product/materials2.png"
            width="100"
            height="50"
            layout="responsive"
          />
          <div
            style={{ backgroundColor: "#e53832" }}
            className="absolute left-5 top-0 opacity-90 text-white px-2 py-3 flex"
          >
            <span style={{ writingMode: "vertical-lr" }}>五得利面粉</span>
            <span style={{ writingMode: "vertical-lr" }}>营养健康</span>
          </div>
        </div>
        <div className="relative mt-5">
          <Image
            src="/images/product/materials3.png"
            width="100"
            height="50"
            layout="responsive"
          />
          <div
            style={{ backgroundColor: "#e53832" }}
            className="absolute right-5 top-0 opacity-90 text-white px-2 py-3 flex"
          >
            <span style={{ writingMode: "vertical-lr" }}>五得利面粉</span>
            <span style={{ writingMode: "vertical-lr" }}>营养健康</span>
          </div>
        </div>
        <div className="relative mt-5 mb-7">
          <Image
            src="/images/product/materials4.png"
            width="100"
            height="50"
            layout="responsive"
          />
          <div
            style={{ backgroundColor: "#e53832" }}
            className="absolute left-5 top-0 opacity-90 text-white px-2 py-3 flex"
          >
            <span style={{ writingMode: "vertical-lr" }}>五得利面粉</span>
            <span style={{ writingMode: "vertical-lr" }}>营养健康</span>
          </div>
        </div>
      </div>

      {/* <div style={{ borderBottom: "7px solid #ECECEC" }} className="px-4">
        <p className="mt-5 mb-4 font-extrabold text-lg">独特工艺</p>
        <p className="text-text text-sm leading-7">
          “三两”代表了我们对于食物和生活的态度，我们希望创造的不仅仅是美食，还有美好的生活。三两时间，一餐好食，“三两”希望
          每个人都能和时间做朋友，即使生活再忙碌，也要好好吃饭，无论是奔波的早晨，或是忙碌的工作间隙，亦或加班宵夜时，都能静下来享受这一餐一食的美好。{" "}
        </p>
        <div className="flex justify-between mt-5 mb-8">
          <div className="flex justify-between">
            <div style={{ width: "52px" }} className="mr-2">
              <Image
                src="/images/product/pro_ico1.png"
                width="100"
                height="100"
                layout="responsive"
              />
            </div>
            <div className="flex flex-col justify-around">
              <p className="font-extrabold text-sm">秘制酱料</p>
              <p className="text-12px text-text">历经数1000次调试</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div style={{ width: "52px" }} className="mr-2">
              <Image
                src="/images/product/pro_ico2.png"
                width="100"
                height="100"
                layout="responsive"
              />
            </div>
            <div className="flex flex-col justify-around">
              <p className="font-extrabold text-sm">自主研发</p>
              <p className="text-12px text-text">自主研发新产品</p>
            </div>
          </div>
        </div>
      </div> */}

      <PostForm />
    </div>
  );
}
