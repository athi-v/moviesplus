import React, {useState, useEffect} from 'react';
// import {SiHotjar} from 'react-icons/si'
import {GrNext, GrPrevious} from 'react-icons/gr'
import axios from 'axios'

import './Popular.css'
const Popular = () => {
  const [data, setData] = useState([])
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=fe0e635bd60cf4e677e3bbb4451689f0&language=en-US&page=1'

  const IMG_API = "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
        setData(response.data)
    }).catch((error) => {
        console.log(error)
    })
}, [])


  return ( 
<div className='popular'>
<div className="container-fluid">
<div className="row">
<div className="content">
<h1>Popular Movies</h1>

</div>
 {/* {data.results !== undefined &&
<div className='contenttwo'>

<div id="sacarousel" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active container-fluid">    
    <div className="card">
    <img className="card-img-top"  src={IMG_API + data.results[0].poster_path} alt="Card image" />
    <div className="card-body">
      <h4 className="card-title">{data.results ? data.results[0].original_title : null}</h4>
      <p className="card-text">{data.results ? data.results[0].vote_average : null}</p>
    </div>
</div>

</div>
    <div className="carousel-item container-fluid">
 
    <div className="card">
    <img className="card-img-top"  src={IMG_API + data.results[1].poster_path} alt="Card image" />
    <div className="card-body">
      <h4 className="card-title">{data.results ? data.results[1].original_title : null}</h4>
      <p className="card-text">{data.results ? data.results[1].vote_average : null}</p>
    </div>
    
</div>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#sacarousel" data-bs-slide="prev">
    <GrPrevious />
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#sacarousel" data-bs-slide="next">
 <GrNext />
    </button>
</div>



</div>
 } */}
</div>
</div>
</div>

  )
}

export default Popular;
