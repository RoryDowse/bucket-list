import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {

     // Call editBucketItem with the ID and updated values
    props.editBucketItem(edit.id, value);
    // Reset the edit state
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    <div 
      className={`bucket-row ${item.completed ? 'complete' : ''} ${item.eagerness}`} 
      key={index} // Fallback key (item.id is not part of the ask)
    >
      <div 
      onClick={() => props.completeBucketItem(item.id)}>
          {item.text}
      </div>
      <div className="icons">
        <p 
        className="edit-icon"
        onClick={() => setEdit({
                id: item.id,
                value: item.text,
                eagerness: item.eagerness,
              })}
        > 
          ✏️
        </p>
        <p 
        className="delete-icon"
        onClick={() => props.removeBucketItem(item.id)}
        > 
          🗑️
        </p>
      </div>
    </div>
  ));
}

export default Bucket;
