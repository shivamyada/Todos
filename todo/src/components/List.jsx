import "./List.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export const List = ({todolist , handleDelete}) => {
  return ( 
  <ul className="list">
    {todolist.map((listItem) =>(
      <li>
        <span>{listItem.item}</span>
        <span className="action">
        
        < DeleteForeverIcon onClick={()=>handleDelete(listItem.id)}/>
        </span>
      </li>
    ))}
  </ul>
  );
};

export default List;