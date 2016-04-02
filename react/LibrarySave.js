var LibrarySave = ({saveImage, handleUrl, handleTitle}) => (
  <form className="save" onSubmit={(event) => saveImage(event)}>
  Image Link: <input type="text" name="image-link" placeholder="URL Link for Image" 
  onChange={(event) => handleUrl(event)}/> 
  Image Title: <input type="text" name="image-title" placeholder="Image Title"
  onChange={(event) => handleTitle(event)}/>
  <input type="submit" value="Save Photo"/>
  </form>
);
window.LibrarySave = LibrarySave;
