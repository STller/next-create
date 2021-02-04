import Image from "next/image";
import PostForm from "../../components/postForm/index";

export default function Brand() {
  return (
    <div>
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
          {[
            { title: "选址支持", src: "/images/JoinIn/Idea_1.png" },
            { title: "设计支持", src: "/images/JoinIn/Idea_2.png" },
            { title: "培训支持", src: "/images/JoinIn/Idea_3.png" },
            { title: "供应链支持", src: "/images/JoinIn/Idea_4.png" },
            { title: "产品支持", src: "/images/JoinIn/Idea_5.png" },
            { title: "督导支持", src: "/images/JoinIn/Idea_6.png" },
            { title: "营销支持", src: "/images/JoinIn/Idea_7.png" },
            { title: "区域保护支持", src: "/images/JoinIn/Idea_8.png" },
          ].map((item) => {
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
      <PostForm />
    </div>
  );
}
