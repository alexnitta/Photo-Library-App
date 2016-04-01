class LibrarySave extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  
  render() {
    return (
      <form className="save">
      Image Link: <input type="text" name="image-link" placeholder="URL Link for Image" /> 
      Image Title: <input type="text" name="image-title" placeholder="Image Title" />
      <input type="submit" value="Save Photo" />
      </form>
    );
  }
}

window.LibrarySave = LibrarySave;
