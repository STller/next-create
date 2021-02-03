import Input from './components/index';
export default function PostForm() {
  return (
    <div style={{ padding: "0 15.5px" }}>
      <div className="title">
        <p className="mt-6 mb-5 font-bold text-lg">加盟咨询</p>
      </div>
      <div className="form">
        <Input title="姓名"/>
        <Input title="电话" type="tel"/>
        <Input title="邮箱" type="email"/>
      </div>
    </div>
  );
}
