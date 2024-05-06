import { Document, Page, Text, View } from "@react-pdf/renderer";

import { NotarialPromissoryNoteProps } from "@modules/loan/interfaces/component-interfaces/PromissoryNoteProps";

import { formatDate, formatMoney } from "@modules/core/utils/helpers";

import { styles } from "./NotarialPromissoryNote.style";

const NotarialPromissoryNote = ({
  loan,
  client,
}: NotarialPromissoryNoteProps): JSX.Element => {
  const quotaAmount: number = loan?.paymentSchedules[0]?.amount;
  const endPaymentDate: string =
    loan?.paymentSchedules[loan?.paymentSchedules.length - 1]?.paymentDate;

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ ...styles.title, margin: "0 auto" }}>
            PAGARE NOTARIAL
          </Text>
          <Text style={styles.text}>
            Acto Número: ___. - En el municipio de Santo Domingo Este, Provincia
            Santo Domingo, República Dominicana, el día{" "}
            {formatDate(`${loan?.createdAt}`, "mixted")}. Por ante mí, LIC. ,
            Abogado Notario Público, de los del Número del Distrito Nacional,
            matrícula No. 5467, titular de la cédula de identidad y electoral
            No. 074-0002130-4, con estudio profesional abierto en la casa No.
            34-B, de la calle Fausto Cejas Rodríguez, del sector San Bartolo,
            Los Frailes II, Santo Domingo Este, Provincia Santo Domingo,
            República Dominicana, asistido de los testigos instrumentales que al
            final serán nombrados, COMPARECIÓ libre y voluntariamente el{" "}
            <Text
              style={{
                ...styles.text,
                textTransform: "uppercase",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Sr(a). {client?.fullName},
            </Text>{" "}
            de nacionalidad dominicana, mayor de edad, {client?.civilStatus},
            Cédula de Identidad y Electoral No. {client?.identification},
            domiciliada y residente en{" "}
            <Text
              style={{
                ...styles.text,
                textDecoration: "underline",
              }}
            >
              {client?.city}, {client?.sector}, {client?.address}, Casa{" "}
              {client?.houseNumber}
            </Text>{" "}
            quién para los fines del presente Acto se constituye en{" "}
            <Text style={{ ...styles.text, fontWeight: "bold" }}>
              EL DEUDOR
            </Text>{" "}
            de{" "}
            <Text style={{ ...styles.text, fontWeight: "bold" }}>
              LIC. RONALD ALEXANDER RODRIGUEZ URENA,
            </Text>{" "}
            dominicano, mayor de edad, titular de la cédula de identidad y
            electoral No. 001-1374378-5, con domicilio en esta ciudad de Santo
            Domingo, DECLARÁNDOME QUE DEBE Y PAGARÁ la suma de{" "}
            <Text
              style={{
                ...styles.text,
                textTransform: "uppercase",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              RD{formatMoney(loan?.amountInterest)},
            </Text>{" "}
            por el recibo de la expresada cantidad de dinero, a su entera
            satisfacción, declarando formalmente que se compromete a pagar la
            indicada suma que en calidad de servicios financieros y préstamo
            personal que se la ha hecho y que la pagará de la manera siguiente:{" "}
            <Text
              style={{
                ...styles.text,
                textTransform: "uppercase",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              {loan?.numberOfQuotas} CUOTAS DE {formatMoney(quotaAmount)} PESOS
              DOMINICANOS (RD{formatMoney(quotaAmount)}) {loan?.paymentCycle}es
            </Text>{" "}
            que EL DEUDOR se compromete a pagar de la siguiente forma y fecha:
            La primera cuota de{" "}
            <Text
              style={{
                ...styles.text,
                textTransform: "uppercase",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              {formatMoney(quotaAmount)} PESOS DOMINICANOS (RD
              {formatMoney(quotaAmount)})
            </Text>{" "}
            En fecha
            <Text
              style={{
                ...styles.text,
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              {formatDate(loan?.firstPaymentDate, "mixted")}
            </Text>{" "}
            y finalizando
            <Text
              style={{
                ...styles.text,
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              {formatDate(endPaymentDate, "mixted")},
            </Text>{" "}
            estableciéndose en consecuencia la fecha antes señalada como el
            término del presente Pagaré Notarial; cosa que se comprobará con el
            recibo de descargo por haber hecho el pago correspondiente. En caso
            de la llegada al término y (el ó la){" "}
            <Text
              style={{
                ...styles.text,
                textTransform: "uppercase",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Sr(a). {client?.fullName}
            </Text>{" "}
            no haya satisfecha las cuotas indicadas a más tardar veinticuatro
            (24) horas del término o del incumplimiento de una de las cuotas, el
            acreedor podrá hacer exigible judicial y extrajudicialmente dichos
            valores; pudiendo el acreedor{" "}
            <Text
              style={{
                ...styles.text,
                fontWeight: "bold",
              }}
            >
              perseguir los montos totales adeudados
            </Text>{" "}
            y por cobrar tanto judicial como extrajudicialmente. En caso de no
            cumplir con lo anteriormente acordado, quedan afectados todos los{" "}
            <Text
              style={{
                ...styles.text,
                fontWeight: "bold",
              }}
            >
              bienes presentes y futuros de su patrimonio,
            </Text>{" "}
            y para el fiel cumplimiento de las obligaciones de pagar la
            expresada cantidad de dinero. Declaran también que, da a este Acto
            carácter de Cosa Juzgada y
            <Text
              style={{
                ...styles.text,
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {" "}
              eligen domicilio en su propia casa antes mencionada y visitada.
            </Text>{" "}
            Queda entendido que si EL DEUDOR,
            <Text
              style={{
                ...styles.text,
                textTransform: "uppercase",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              (el ó la) Sr(a). {client?.fullName}
            </Text>{" "}
            dejara de pagar al
            <Text
              style={{
                ...styles.text,
                textTransform: "uppercase",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              MENOS UNA (01) DE LAS CUOTAS{" "}
            </Text>
            consignadas en el presente acto; EL ACREEDOR,{" "}
            <Text
              style={{
                ...styles.text,
                fontWeight: "bold",
              }}
            >
              {" "}
              LIC. RONALD ALEXANDER RODRÍGUEZ UREÑA, podrá ejecutar el embargo
              sin necesidad de esperar para ello la llegada del término y/o del
              tiempo acordado en este Pagaré Notarial.
            </Text>{" "}
            De todo lo cual se ha redactado el presente acto que he leído en
            presencia de los señores MARIANNYS GOMERA Y DILEXY RODRIGUEZ, ambas
            dominicanas, mayores de edad, titulares de las cédulas de identidad
            Nos. 223-0027375-6 y 402-3062317-1, ambas domiciliadas y residente
            en la calle Fausto Ceijas Rodríguez No. 5, Los Frailes, Santo
            Domingo Este, Provincia Santo Domingo, República Dominicana, ambas
            testigos libres de tachas y excepciones que establecen las normas
            vigentes; los cuales lo encontraron conforme a su decir, y han
            procedido conjuntamente con los comparecientes y por ante mí a
            firmarlo. Notario Público que DOY FE Y CERTIFICO.
          </Text>

          {/*Firmas  */}
          <View style={{ ...styles.column, marginTop: 32 }}>
            <View style={{ ...styles.rowVertical, gap: 5 }}>
              <View style={{ ...styles.line, width: 250 }}></View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                  fontWeight: "bold",
                }}
              >
                LIC. RONALD A. RODRIGUEZ UREÑA
              </Text>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                Acreedor
              </Text>
            </View>

            <View style={{ ...styles.rowVertical, gap: 5 }}>
              <View style={{ ...styles.line, width: 250 }}></View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                  fontWeight: "bold",
                }}
              >
                Sr(a). {client?.fullName}
              </Text>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                Deudor
              </Text>
            </View>
          </View>

          <View style={{ ...styles.column, marginTop: 16 }}>
            <View style={{ ...styles.rowVertical, gap: 5 }}>
              <View style={{ ...styles.line, width: 250 }}></View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                  fontWeight: "bold",
                }}
              >
                MARIANNYS GOMERA
              </Text>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                Testigo
              </Text>
            </View>

            <View style={{ ...styles.rowVertical, gap: 5 }}>
              <View style={{ ...styles.line, width: 250 }}></View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                  fontWeight: "bold",
                }}
              >
                DILEXY RODRIGUEZ
              </Text>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                Testigo
              </Text>
            </View>
          </View>

          <View
            style={{
              ...styles.rowVertical,
              margin: "16px auto",
              alignItems: "center",
              gap: 5,
            }}
          >
            <View style={{ ...styles.line, width: 300 }}></View>
            <Text
              style={{
                ...styles.text,
                textAlign: "center",
                margin: "0 auto",
                fontWeight: "bold",
              }}
            >
              LIC. DIOQUE PORFIRIO JAVIER ALCANTARA
            </Text>
            <Text
              style={{
                ...styles.text,
                textAlign: "center",
                margin: "16px auto",
              }}
            >
              Abogado Notario Público
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default NotarialPromissoryNote;
