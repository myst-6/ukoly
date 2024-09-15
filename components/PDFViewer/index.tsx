import { Box } from 'components';
import React from 'react';

export interface PDFViewerProps {
  url: string;
}

export const PDFViewer = ({ url }: PDFViewerProps) => {
  return (
    <Box height="100%" width="100%">
      <embed
        height="100%"
        width="100%"
        src={url}
        type="application/pdf"
      />
    </Box>
  );
};