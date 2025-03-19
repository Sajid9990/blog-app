import React, { Fragment, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const SingUpWithGoogle = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
  const searchParams1 = new URLSearchParams(location.search);
   const a = [...searchParams1.entries()];
    console.log(searchParams);
    
    // const name = searchParams.get("name") || "Guest";
    // const age = searchParams.get("age") || "Unknown";
    return (
        <Fragment>
          {searchParams.get("code")||"d"}
        </Fragment>
    )
}

export default SingUpWithGoogle;