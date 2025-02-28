import React, { Fragment, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SingUpWithGoogle = () => {
    const [searchParams] = useSearchParams();
    // const name = searchParams.get("name") || "Guest";
    // const age = searchParams.get("age") || "Unknown";
    return (
        <Fragment>
          {searchParams}
        </Fragment>
    )
}

export default App;