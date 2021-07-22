import React, { useState } from "react";
import { Icon } from 'semantic-ui-react'

const Counter = ({ count = 1 }) => {
  const [like, setLike] = useState(0);
  const addLike = () => setLike(like + count);

  return (
    <div>
        <Icon fitted name='thumbs up' onClick={addLike} />
      <p>{like}</p>
    </div>
  );
};

export default Counter;