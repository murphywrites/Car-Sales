import React from 'react';

const AddedFeature = props => {

  const handleRemoveFeature = (evt) => {
    evt.preventDefault();
    console.log("log from added feature: ",props.feature)
    props.removeFeature(props.feature)
    props.updateAdditional()
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoveFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
