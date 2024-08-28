import { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {

    // Take the new bucket item and add it to the bucket state variable
    setBucket((prevBucket) => [...prevBucket, item]);
    console.log(`Item Added: `, item);
  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedBucket = bucket.map((item) => {
      
      // If the ID of the item id matches the ID of the item that was clicked, mark it as complete
      if (item.id === id) {
        return { ...item, completed: !item.completed }; 
      } else {
        return item;
      }
    });
    // Update the bucket state with the modified list
    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    // Filter method creates a new array with all elements that do not have the ID passed to this function
    let updatedBucket = bucket.filter((item) => item.id !== id);

    setBucket(updatedBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      ></Bucket>
    </div>
  );
}

export default BucketList;
