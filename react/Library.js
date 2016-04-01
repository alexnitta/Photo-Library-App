var Library = ({imageData}) => {
  return (
    <div>
      <LibraryHeader />
      <LibrarySave />
      <List />
      <Display />
    </div>    
  );
};

window.Library = Library;
