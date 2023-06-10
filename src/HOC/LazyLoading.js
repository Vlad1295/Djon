import React, { Suspense } from "react";
import DialogContainer from "../components/Dialogs/DialogsContainer";

const LazyLoading = (props) => {
  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <DialogContainer {...props} />
      </Suspense>
    </div>
  );
};
export default LazyLoading
