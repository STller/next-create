import { useRecoilState } from "recoil";
import activeTab from "../recoil";

export default function Content() {
  const [selected, setSelected] = useRecoilState(activeTab);
  return (
    <div>
      {selected}
    </div>
  )
}