import React from 'react';

const Details = () => {
  return (
    <pre>
      <code>{JSON.stringify(props, nill, 4)}</code>
    </pre>
  )
}

export default Details 