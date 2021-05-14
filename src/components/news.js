import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

function News(){

    const [news_data,setNewsdata] = useState([{
        "id":"4",
        "hearder":"Nagpur Vanity",
        "title":"Nagpur city",
        "para":"नागपूर | रणरणत्या उन्हामुळे पोलिसांसाठी 3 व्हॅनिटी व्हॅन्स",
        "link":"https://zeenews.india.com/marathi/video/nagpur-vanity-van-for-police/563679",
        "img":"http://stm.india.com/marathi/sites/default/files/inline/live-tv_0.jpg"
     },{
        "id":"3",
        "hearder":"Nagpur Vanity",
        "title":"Nagpur city",
        "para":"Many people across the country are coming forward to help India in a fight against COVID-19. in this series Cops on corona duty get vanity vans in Nagpur to beat the heat",
        "link":"https://www.indiatvnews.com/video/news/cops-on-corona-duty-get-vanity-vans-in-nagpur-to-beat-the-heat-701388",
        "img":"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/05/rajat-1525325977.jpg"
     },{id:'1',hearder:'Nagpur Vanity',title:'Nagpur city',para:'Karishma Yadav, a woman police constable, was thrilled on stepping into one of the three fully air-conditioned vanity vans stationed at nakabandi points.',link:'https://timesofindia.indiatimes.com/city/nagpur/police-women-take-a-breather-in-vanity-vans-at-nakabandis/articleshow/82280680.cms',img:'https://static.toiimg.com/thumb/msid-82280679,imgsize-32344,width-400,resizemode-4/82280679.jpg'},{id:'2',hearder:'Nagpur city',title:'To beat the heat Nagpur Police gets 3 Vanity Van',para:'A sigh of relief for the cops who have been vigilantly serving their bit since the pandemic began in keeping the city safe from the man-manipulated virus by constantly being vigilant in making bandobasts across the city as police get three fully Air-conditioned Vanity Van at various Nakabandi points',link:'https://thelivenagpur.com/2021/04/30/to-beat-the-heat-nagpur-police-gets-3-vanity-van/',img:'https://thelivenagpur.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-30-at-3.35.09-PM-1170x780.jpeg'}])


return (news_data.map((news)=><ul key={news.id}>
        <Card>
         <div className="row">
             <div className="col-5 col-lg-2 col-md-2">
            <img src={news.img} width="150" height="150" alt="vanity van news"></img>
            </div>
            <div className="col-7 col-lg-9 col-md-9">
  <Card.Body>
    <Card.Title>{news.title}</Card.Title>
    <Card.Text>
      {news.para}
    </Card.Text>
    <a href={news.link} target="__blank">View news</a>
  </Card.Body>
  </div>
  </div>   
</Card>
</ul>)
);
}
export default News;