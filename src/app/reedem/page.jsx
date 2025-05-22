import { Reedem } from "../../components/reedem/Reedem";
import React, { Suspense } from 'react';

const page = () => {
  return (
    <>
      

      <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
<Reedem/>
    </Suspense>

    </>
  )
}

export default page;
