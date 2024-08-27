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

    // TODO: Write logic to call the editBucketItem prop with the supplied values
     // Call editBucketItem with the ID and updated values
    props.editBucketItem(edit.id, { text: edit.value, eagerness: edit.eagerness });
    // TODO: Set the key:value pairs in the `edit` object back to empty strings
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
    // TODO: Add a className of `bucket-row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div 
      className={`bucket-row ${item.completed ? 'complete' : ''} ${item.eagerness}`} 
      key={index} // Fallback key (item.id is not part of the ask)
    >
      {/* TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
      <div 
      onClick={() => props.completeBucketItem(item.id)}>
          {/* TODO: Add the item text here */}
          {item.value}
      </div>
      <div className="icons">
        {/* TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
        <p 
        className="edit-icon"
        onClick={() => setEdit({
                id: item.id,
                value: item.value,
                eagerness: item.eagerness,
              })}
        > 
          ✏️
        </p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
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
