class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: {},
      allImages: this.props.imageData,
      addUrl: '',
      addTitle: ''
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
  
  saveImage(event) {
    event.preventDefault();
    var newImage = {};
    newImage.rating = 0;
    newImage.title = this.state.addTitle;
    newImage.url = this.state.addUrl;
    var newCollection = this.state.allImages;
    newCollection.push(newImage);
    this.setState({
      allImages: newCollection,
      addUrl: '',
      addTitle: ''
    });
  }
  
  handleUrl(event) {
    this.setState({addUrl: event.target.value});
  }
  
  handleTitle(event) {
    this.setState({addTitle: event.target.value});
  }
  
  render() {
    
    return (
      <div>
        <LibraryHeader />
        <LibrarySave saveImage={this.saveImage.bind(this)} 
        handleUrl={this.handleUrl.bind(this)} handleTitle={this.handleTitle.bind(this)} 
        addUrl={this.state.addUrl} addTitle={this.state.addTitle} />
        <List entries={this.state.allImages} setImage={this.setImage.bind(this)} />
        <Display entry={this.state.currentImage} setRating={this.setRating.bind(this)} />
      </div>    
    );
  }
};

window.Library = Library;
