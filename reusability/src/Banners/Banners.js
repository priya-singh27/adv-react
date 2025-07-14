import './Banners.css'

export default function SingleLineBanners({ message, icon }) {
  return (
    <div className="container">
      <div className="icon">{icon}</div>
      <p className="msg">{message}</p>
    </div>
  );
}
