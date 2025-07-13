import "./Button.css";

export default function Button({color, shape}) {
  return (
    <div className="container">
      <button className={`${shape} ${color}`}>Badge</button>
    </div>
  );
}
