import React from 'react';

export interface PDFViewerProps {
  url: string;
}

export const PDFViewer = ({ url }: PDFViewerProps) => {
  return (
    <div style={{ height:"87vh", width: "45vw" }}>
      <embed
        height="100%"
        width="100%"
        src={url}
        type="application/pdf"
      />
    </div>
  );
};