import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [sectionHeight, setSectionHeight] = useState(0);
  const [selected, setSelected] = useState("home");
  useEffect(() => {
    const { clientHeight } = document.documentElement;
    setSectionHeight(clientHeight - 92);
  }, []);
  return (
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
        {children}
      </section>
      <footer
        style={{
          height: "50px",
          borderTop: "1px solid #d9d9d9",
        }}
      >
        <ul className="flex justify-between h-full">
          {["home", "brand", "join", "product"].map((item: string) => {
            return (
              <li key={item} className="flex flex-col flex-auto justify-center items-center">
                <div style={{ width: "17.5px", height: "17.5px" }}>
                  {item === "home" && (
                    <Image
                      src={
                        selected === "home"
                          ? "/images/home_select.png"
                          : "/images/home_none.png"
                      }
                      alt="首页"
                      width={17.5}
                      height={17.5}
                    />
                  )}
                  {item === "brand" && (
                    <Image
                      src={
                        selected === "brand"
                          ? "/images/brand_select.png"
                          : "/images/brand_none.png"
                      }
                      alt="品牌"
                      width={17.5}
                      height={17.5}
                    />
                  )}
                  {item === "join" && (
                    <Image
                      src={
                        selected === "join"
                          ? "/images/JoinIn_select.png"
                          : "/images/JoinIn_none.png"
                      }
                      alt="加盟"
                      width={17.5}
                      height={17.5}
                    />
                  )}
                  {item === "product" && (
                    <Image
                      src={
                        selected === "product"
                          ? "/images/product_select.png"
                          : "/images/product_none.png"
                      }
                      alt="产品"
                      width={17.5}
                      height={17.5}
                    />
                  )}
                </div>
                {item === "home" && (
                  <Link href="/">
                    <a
                      style={{ color: selected === "home" ? "" : "#595757" }}
                      className="text-12px text-red"
                    >
                      首页
                    </a>
                  </Link>
                )}
                {item === "brand" && (
                  <Link href="/brand">
                  <a
                    style={{ color: selected === "brand" ? "" : "#595757" }}
                    className="text-12px text-red"
                  >
                    品牌
                  </a>
                </Link>
              )}
                {item === "join" && (
                  <Link href="/">
                  <a
                    style={{ color: selected === "join" ? "" : "#595757" }}
                    className="text-12px text-red"
                  >
                    加盟
                  </a>
                </Link>
              )}
                {item === "product" && (
                  <Link href="/">
                  <a
                    style={{ color: selected === "product" ? "" : "#595757" }}
                    className="text-12px text-red"
                  >
                    产品
                  </a>
                </Link>
              )}
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
}
