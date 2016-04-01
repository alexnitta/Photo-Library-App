class List extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <table className="list">
      <tbody>
        <tr>
        <th className="entry entry-title">Images</th>
        </tr>
        <ListEntry />
      </tbody>  
      </table>
   );
  }
}

window.List = List;
