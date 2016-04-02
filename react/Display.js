var Display = ({entry, setRating}) =>
  <div className="display">
    <img src={entry.url} className="display"/>
    <p>Title: {entry.title}</p>
    <p>Rating: {entry.rating} out of 5</p>
    <p>Rate this image: 
    <select className="rating" value="" onChange={(event) => setRating(event)} > 
      <option value=""></option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    </p>
  </div>

window.Display = Display;
