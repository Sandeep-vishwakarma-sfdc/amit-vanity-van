const Card = ({ id, img, description }) => {
    return (
      <div className="card">
        <a href={`\\vanityvan\\${id}`}>
        <div className="card-upper">
          <img src={img} alt={`Image ${id}`} />
        </div>
        <div className="card-lower">
          <p>{description}</p>
        </div>
        </a>
      </div>
    );
  };
  
  const CardList = ({ data }) => {
    return (
      <div className="card-list">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  };
  
  export default CardList;