var List = ({entries, setImage}) => {
  var imageListEntries = entries.map((entry) => {
    return(
    <ListEntry entry={entry} setImage={setImage} />  
    );
  }
  ); 
  return (
    <table className="list">
    <tbody>
      <tr>
      <th className="entry entry-title">Images</th>
      </tr>
      {imageListEntries}
    </tbody>  
    </table>
  );
};

window.List = List;
