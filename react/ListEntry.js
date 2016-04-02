var ListEntry = ({entry, setImage}) => (
    <tr>
    <td className='entry' onClick={(event) => setImage(entry)}>{entry.title}</td> 
    </tr>
);

window.ListEntry = ListEntry;
