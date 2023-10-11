import "./ListInfo.scss";

function ListInfo(props) {
  const { item } = props;
  const features = [
    { label: "Lines", value: item.lines + " Lines" },
    { label: "Display", value: item.display + '" Colour' },
    { label: "Bluetooth", value: item.bluetooth },
    { label: "Connection", value: item.connection },
    { label: "USB", value: item.usb },
    { label: "PoE", value: item.poe },
  ];

  return (
    <div
      className={`list-info list-info--${item.id % 4 === 0 ? "left" : "right"}`}
    >
      <div className="list-info__image-container">
        <img
          src={require(`../../assets/${item.image}`)}
          alt="Device"
          className="info-img"
        />
      </div>
      <div className="list-info__details">
        <p className="list-info__details__description-title info-title">
          Description
        </p>
        <p className="list-info__details__description-text info-text">
          {item.description}
        </p>
        <div className="list-info__details__key-features">
          <p className="list-info__details__key-features__title info-title">
            Key features
          </p>
          <div className="list-info__details__key-features__table">
            {features.map((feature) => (
              <div className="feature-item" key={feature.label}>
                <span className="feature-item__name info-text">
                  {feature.label}
                </span>
                <span className="feature-item__value info-text">
                  {feature.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListInfo;
