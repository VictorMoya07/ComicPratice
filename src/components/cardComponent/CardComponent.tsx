import "./styles.scss";

const CardComponent = ({ item }) => {
  return (
    <div className="card">
      <img
        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        className="card__image"
        alt={item.name}
      />
      <div className="card__body">
        <h2 className="card__title">{item.name || item.title}</h2>
      </div>
    </div>
  );
};

export default CardComponent;
