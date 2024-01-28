import React, { useState } from 'react';

const RevealedHash = ({ shouldRender, hashName, hashText })  => {
    
  
    return shouldRender ?
      <div>
          <p>The hash type is {hashName}.</p>
          <p>The plain text of the hash is {hashText}.</p>
      </div> : null;
};

export default RevealedHash;