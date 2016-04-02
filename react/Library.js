class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: {},
      allImages: this.props.imageData
    } 
  }
  
  setImage(image) {
    this.setState({
      currentImage: image
    });
  }
  
  setRating(event) {
    var item = this.state.currentImage;
    item.rating = event.target.value;
    this.setState({currentImage: item});
  }
  
  render() {
    
    return (
      <div>
        <LibraryHeader />
        <LibrarySave />
        <List entries={this.state.allImages} setImage={this.setImage.bind(this)} />
        <Display entry={this.state.currentImage} setRating={this.setRating.bind(this)} />
      </div>    
    );
  }
};

window.Library = Library;
