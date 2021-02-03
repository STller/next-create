import "../styles/globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import Link from "next/link";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const [sectionHeight, setSectionHeight] = useState(0);
  const [selected, setSelected] = useState("home");
  const tabList = [
    { title: "home", label: "首页" },
    { title: "brand", label: "品牌" },
    { title: "join", label: "加盟" },
    { title: "product", label: "产品" },
  ];

  useEffect(() => {
    const { clientHeight } = document.documentElement;
    setSectionHeight(clientHeight - 92);
  }, []);

  useEffect(() => {
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
      if (window.orientation === 180 || window.orientation === 0) { 
        const { clientHeight } = document.documentElement;
        // setSectionHeight(clientHeight - 92);
    
        alert(clientHeight);
      } 
      if (window.orientation === 90 || window.orientation === -90 ){ 
        const { clientHeight } = document.documentElement;
        // setSectionHeight(clientHeight - 92);
    
        alert(clientHeight);
      } 
    }, false); 
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <RecoilRoot>
        <div className="flex flex-col h-full">
          <header
            style={{ height: "42px", backgroundColor: "#E42823" }}
            className="h-32 flex justify-between items-center"
          >
            <div
              style={{ paddingLeft: "17px" }}
              className="logo flex justify-between items-center"
            >
              <Image src="/images/logo.png" alt="Logo" width={62} height={33} />
            </div>
            <div
              style={{ paddingRight: "17px" }}
              className="telphone flex justify-between items-center"
            >
              <Image
                src="/images/icon_phone.png"
                alt="icon_phone"
                width={20}
                height={20}
              />
              <a href="tel:400-168-8810" className="text-white">
                400-168-8810
              </a>
            </div>
          </header>
          <section
            style={{ height: `${sectionHeight}px` }}
            className="overflow-auto"
          >
            {/* 子组件在这里插入 */}
            <Component {...pageProps} />
          </section>
          <footer
            style={{
              height: "50px",
              borderTop: "1px solid #d9d9d9",
            }}
          >
            <ul className="flex justify-between h-full">
              {tabList.map((item: { title: string; label: string }) => {
                return (
                  <li
                    onClick={() => setSelected(item.title)}
                    key={item.title}
                    className="flex flex-col flex-auto justify-center items-center"
                  >
                    <Link href={item.title === "home" ? "/" : `/${item.title}`}>
                      <a
                        style={{
                          color: selected === item.title ? "" : "#595757",
                        }}
                        className="text-12px text-red flex flex-col justify-center items-center w-full h-full"
                      >
                        {
                          <div style={{ width: "17.5px", height: "17.5px" }}>
                            <Image
                              src={
                                selected === item.title
                                  ? `/images/${item.title}_select.png`
                                  : `/images/${item.title}_none.png`
                              }
                              alt="首页"
                              width={17.5}
                              height={17.5}
                            />
                          </div>
                        }
                        <span>{item.label}</span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </footer>
        </div>
      </RecoilRoot>
    </>
  );
}
