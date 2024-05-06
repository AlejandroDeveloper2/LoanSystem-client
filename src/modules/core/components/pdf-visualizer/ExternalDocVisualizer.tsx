import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Download } from "iconoir-react";

import { PDFExternalViewerProps } from "@modules/core/interfaces/components-interfaces/PDFVisualizerProps";

import { IconButton, Spinner } from "..";

import styles from "./PDFVisualizer.module.css";

const ExternalDocVisualizer = ({
  docUrl,
  loading,
  labelButton,
  titleButton,
  downloadFunction,
}: PDFExternalViewerProps): JSX.Element => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <>
      <section className={styles.pdfVisualizerContainer}>
        <Document
          file={docUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className={styles.pdfVizualizer}
          loading={
            <Spinner
              className="spinnerBarPrimary"
              message="Cargando documento..."
            />
          }
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </section>
      <p className={styles.pdfLabel + " " + "buttonText"}>
        Pagina {pageNumber} de {numPages}
      </p>
      <IconButton
        Icon={Download}
        label={labelButton}
        id="btn-download"
        type="button"
        title={titleButton}
        variant="primary"
        loading={loading}
        onClick={downloadFunction}
      />
    </>
  );
};

export default ExternalDocVisualizer;
