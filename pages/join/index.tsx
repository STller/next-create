import Image from "next/image";
import PostForm from "../../components/postForm/index";
import joinCss from "./join.module.css";

export default function Brand() {
  const advantageList = [
    { title: "选址支持", src: "/images/JoinIn/Idea_1.png" },
    { title: "设计支持", src: "/images/JoinIn/Idea_2.png" },
    { title: "培训支持", src: "/images/JoinIn/Idea_3.png" },
    { title: "供应链支持", src: "/images/JoinIn/Idea_4.png" },
    { title: "产品支持", src: "/images/JoinIn/Idea_5.png" },
    { title: "督导支持", src: "/images/JoinIn/Idea_6.png" },
    { title: "营销支持", src: "/images/JoinIn/Idea_7.png" },
    { title: "区域保护支持", src: "/images/JoinIn/Idea_8.png" },
  ];
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
          <li className="block text-base text-text">加盟优势</li>
          <li className="block text-base text-text">加盟条件</li>
          <li className="block text-base text-text">加盟流程</li>
        </ul>
      </div>

      <div
        style={{
          borderTop: "6px solid #ECECEC",
          borderBottom: "6px solid #F0F0F0",
        }}
        className="joinAdvantage px-4 pb-8"
      >
        <p className="mt-6 mb-5 text-lg font-extrabold">加盟优势</p>
        <div className="joinAdvantageImg">
          <Image
            src="/images/JoinIn/advantage.jpg"
            width="100"
            height="60"
            layout="responsive"
          />
        </div>
        <p className="mt-4 mb-4 font-extrabold text-lg">时尚得品牌形象</p>
        <div>
          <p className="text-sm leading-7 text-text">
            赋予传统包子一个时尚的形象：热气腾腾，活力四射。简单不凡最能撩拨人心，传统有趣彰显品牌实力。
          </p>
        </div>
        <div className="flex flex-wrap">
          {advantageList.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-25% flex-col justify-center mt-6"
              >
                <div
                  style={{ width: "50px", height: "50px", marginBottom: "7px" }}
                  className="flex-auto self-center"
                >
                  <Image
                    key={item.title}
                    alt="img"
                    src={`${item.src}`}
                    width="50"
                    height="50"
                    layout="responsive"
                  />
                </div>
                <div className="flex-auto flex justify-center">
                  <span className="text-sm text-center">{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{borderBottom: '6px solid #F0F0F0'}} className="px-4">
        <p className="mt-6 mb-4 text-lg font-extrabold">加盟条件</p>
        <div className="joinCondition">
          <Image
            src="/images/JoinIn/conditionImg.jpg"
            width="100"
            height="60"
            layout="responsive"
          />
        </div>
        <p className="font-extrabold text-lg mt-6 mb-4">投资条件</p>
        <div>
          <ul className="flex flex-nowrap justify-between">
            {["渴望成功", "流动资金", "管理能力", "守法经营"].map((item) => {
              return (
                <li
                  style={{ width: "74px" }}
                  className="rounded-lg bg-white shadow-md flex justify-center items-center"
                >
                  <span className="text-sm">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div style={{ backgroundColor: "#DB392B" }} className="px-4 py-5 mt-6">
          <p className="text-white mb-4">档口快捷单</p>
          {[
            { title: "店铺面积", content: "16平以上，20平以上最佳" },
            { title: "店铺门幅", content: "2.5米以上" },
            { title: "店铺高度", content: "2.6米以上" },
            { title: "电", content: "220V" },
            { title: "水", content: "上、下水" },
            { title: "房产证", content: "需要房产证，便于办理执照" },
            { title: "签订期限", content: "至少需要一签，最好4年一签，可转让" },
            { title: "特别要求", content: "房东允许从事餐饮类" },
          ].map((item) => {
            return (
              <div
                style={{ display: "flex", color: "white", fontSize: "14px" }}
                className={joinCss.condition}
              >
                <p style={{ flex: 2 }}>{item.title}</p>
                <p style={{ flex: 6 }}>{item.content}</p>
              </div>
            );
          })}
          <div></div>
        </div>
        <div style={{ backgroundColor: "#F1F1F1" }} className="px-4 py-5 mb-4">
          <p style={{color: '#4C4948'}} className="mb-4">堂食快捷单</p>
          {[
            { title: "店铺面积", content: "16平以上，20平以上最佳" },
            { title: "店铺门幅", content: "2.5米以上" },
            { title: "店铺高度", content: "2.6米以上" },
            { title: "电", content: "220V" },
            { title: "水", content: "上、下水" },
            { title: "房产证", content: "需要房产证，便于办理执照" },
            { title: "签订期限", content: "至少需要一签，最好4年一签，可转让" },
            { title: "特别要求", content: "房东允许从事餐饮类" },
          ].map((item) => {
            return (
              <div
                style={{ display: "flex", color: "#4C4948", fontSize: "14px" }}
                className={joinCss.condition}
              >
                <p style={{ flex: 2 }}>{item.title}</p>
                <p style={{ flex: 6 }}>{item.content}</p>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>

      <div style={{borderBottom: '6px solid #ECECEC'}} className="px-4">
        <p className="mb-4 mt-6 font-extrabold text-lg">加盟流程</p>
        <div className="flex flex-wrap justify-between">
          {
            [
              {title: '公司工厂标准化生产', src: '/images/JoinIn/process1.jpg'},
              {title: '统一配送馅料到各门店', src: '/images/JoinIn/process2.jpg'},
              {title: '由门店现制面皮成型', src: '/images/JoinIn/process3.jpg'},
              {title: '蒸制后出售', src: '/images/JoinIn/process4.jpg'},
            ].map((item) => {
              return (
                <div className="flex flex-45%-initial flex-col justify-center items-center">
                  <div style={{width: '100%'}}>
                    <Image
                      src={`${item.src}`}
                      width="100"
                      height="70"
                      layout="responsive"
                    />
                  </div>
                  <div className="mt-3 mb-3 self-start">
                    <span className="text-sm">{item.title}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-wrap">
          {
            [
              {title: '加盟咨询', content: '了解相关合作事项', src: '/images/JoinIn/zixun.jpg'},
              {title: '考核签约', content: '总部考察参观', src: '/images/JoinIn/kaohe.jpg'},
              {title: '选址评估', content: '配套选址方案', src: '/images/JoinIn/pinggu.jpg'},
              {title: '加盟签约', content: '签订特许合同', src: '/images/JoinIn/qianyue.jpg'},
              {title: '人员培训', content: '人员全程培训', src: '/images/JoinIn/peixun.jpg'},
              {title: '开业筹备', content: '制定开业计划', src: '/images/JoinIn/kaiye.jpg'},
            ].map((item) => {
              return (
                <div className="flex-33% flex flex-col justify-center items-center text-sm mb-6">
                  <div style={{width: '27px'}}>
                    <Image
                      src={`${item.src}`}
                      width="50"
                      height="50"
                      layout="responsive"
                    />
                  </div>
                  <p className="font-bold text-text mt-1">{item.title}</p>
                  <p className="text-text mt-1">{item.content}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <PostForm />
    </div>
  );
}
