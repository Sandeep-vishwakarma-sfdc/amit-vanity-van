
import Button from "@material-ui/core/Button";
const Card = ({ id, img, description,parentId}) => {
  let pCode = parentId?parentId:id;
  let whatsappLink = 'https://api.whatsapp.com/send?phone=919769061832&text=Hi%21%20i%20have%20visited%20your%20website%20I%20am%20interested%20in%20Product%20Code%20'+pCode;
    return (
      <div className="card">
        <a href={`\\vanityvan\\${id}`}>
        <div className="card-upper">
          <img src={img} alt={`Image ${id}`} />
        </div>
        
        <div className="card-lower">
          <p>{description}</p>
          <Button href={whatsappLink} variant="outlined" color="primary" target="_blank" style={{marginLeft: '0.8rem',marginTop:'0.8rem' }}>Get Quote Now</Button>

          {parentId?(<div></div>):(<Button href={`\\vanityvan\\${id}`} variant="outlined" style={{marginLeft: '0.8rem',marginTop:'0.8rem' }} color="primary">View Detail</Button>)}
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