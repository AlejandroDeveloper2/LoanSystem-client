import { PDFViewer, BlobProvider } from "@react-pdf/renderer";
import { Download } from "iconoir-react";

import { PDFViewerProps } from "@modules/core/interfaces/components-interfaces/PDFVisualizerProps";

import { downloadPDFDoc } from "@modules/core/utils/helpers";

import { IconButton } from "..";

const PDFVisualizer = ({
  renderDocument,
  buttonLabel,
  buttonTitle,
  fileName,
}: PDFViewerProps): JSX.Element => {
  return (
    <>
      <PDFViewer width="80%" height={600}>
        {renderDocument()}
      </PDFViewer>
      <BlobProvider document={renderDocument()}>
        {({ blob, loading }) => (
          <IconButton
            Icon={Download}
            label={buttonLabel}
            id={"btn-download"}
            type="button"
            title={buttonTitle}
            variant={"primary"}
            loading={loading}
            onClick={() => downloadPDFDoc(blob, fileName)}
          />
        )}
      </BlobProvider>
    </>
  );
};

export default PDFVisualizer;
