import Head from "next/head";
import { REQUEST } from "../api/service";
import Image from "next/image";
import { Carousel } from "antd-mobile";
import { useEffect, useState } from "react";

export const siteTitle = "三两首页";

export async function getStaticProps() {
  let bannerList = [];
  await REQUEST.bannerList({ type: "banner" })
    .then((res: { results: Array<any> }) => {
      bannerList = res.results[0].banner_app;
    })
    .catch((e) => {
      console.log(e);
    });
  return {
    props: {
      // passed to the page component as props
      bannerList,
    },
  };
}

export default function Home({ bannerList }) {
  const [imgHeight, setImgHeight] = useState("237px");
  useEffect(() => {
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
      if (window.orientation === 180 || window.orientation === 0) { 
        setImgHeight("237px");
      } 
      if (window.orientation === 90 || window.orientation === -90 ){ 
        setImgHeight("454px");
      } 
    }, false); 
    return () => {
      window.removeEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) { 
          setImgHeight("237px");
        } 
        if (window.orientation === 90 || window.orientation === -90 ){ 
          setImgHeight("454px");
        } 
        }, false); 
    }
  }, []);
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="home">
        <div
          style={{ borderBottom: "7.5px solid #ECECEC" }}
          className="carousel"
        >
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) =>
              console.log(`slide from ${from} to ${to}`)
            }
            afterChange={(index) => console.log("slide to", index)}
          >
            {bannerList.map((val) => (
              <div key={val.url} style={{ width: "100%", height: imgHeight }}>
                <Image src={val.url} alt="BannerImg" layout="fill" />
              </div>
            ))}
          </Carousel>
        </div>
        <div style={{ padding: "0 15.5px" }} className="background">
          <div
            style={{ marginTop: "22.5px", marginBottom: "17.0px" }}
            className="title flex justify-between items-center"
          >
            <span style={{ color: "#333" }} className="text-lg font-bold">
              品牌背景
            </span>
            <span className="text-red text-sm">了解更多</span>
          </div>
          <div className="video">Video</div>
          <div className="content">
            <span>
              {" "}
              包子是中国的传统特色小吃，具有特殊的传承意义，在快节奏的今天，三两更愿意慢下来专心做好食。{" "}
            </span>
            <br />
            <span>
              {" "}
              传统手作、热乎现蒸，数以百次访店，1000次的反复测试，只为找到黄金配比、最佳口感。{" "}
            </span>
            <br />
            <span> 三两将每份包子做到极致，为您传递包子的本真味道。 </span>
            <br />
          </div>
          <ul className="extensive flex flex-wrap justify-evenly">
            {[
              { title: "5+", label: "直营门店" },
              { title: "30人", label: "餐饮研发团队" },
              { title: "360°", label: "全方位经营指导" },
              { title: "2年", label: "公司成立时间" },
            ].map((item: { title: string; label: string }) => {
              return (
                <li
                  key={item.title}
                  className="item flex flex-col justify-center items-center"
                >
                  <span className="text-gold text-2rem">{item.title}</span>
                  <span
                    className="block text-center bg-grey"
                    style={{
                      width: "142.5px",
                      marginTop: "7.5px",
                      borderRadius: "3px",
                    }}
                  >
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
