import { useRecoilValue } from "recoil";
import activeTab from "../recoil";
import Home from './home/index';
import Brand from './brand/index';
import Join from './join/index';
import Product from './product/index';

export default function Content() {
  const selected = useRecoilValue(activeTab);
  return (
    <div className="content">
      {selected === 'home' && <Home />}
      {selected === 'brand' && <Brand />}
      {selected === 'join' && <Join />}
      {selected === 'product' && <Product />}
    </div>
  )
}