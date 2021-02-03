export default function Input({
  title = "Name",
  placeholder = "",
  type = "text",
}) {
  return (
    <div
      style={{ background: "#F0F0F0", borderBottom: "4px solid #FFF" }}
      className="box-border px-5 py-3 flex justify-between rounded"
    >
      <span
        style={{ flexBasis: "40px", lineHeight: "24px" }}
        className="text-sm text-center text-postTitle"
      >
        {title}
      </span>
      <input
        style={{ background: "transparent" }}
        className="flex-auto text-left focus:outline-none text-input"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
