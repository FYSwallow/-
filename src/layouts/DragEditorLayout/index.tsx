import React, { FC } from 'react';

const DragEditorLayout: FC = ({ children }) => {
    console.log(123);
    return <div className="drag-editor-container">{children}</div>;
};

export default DragEditorLayout;
