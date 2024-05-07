import { Document, Page, Text, View } from "@react-pdf/renderer";

import { SimplePromissoryProps } from "@modules/loan/interfaces/component-interfaces/PromissoryNoteProps";

import { formatDate, formatMoney } from "@modules/core/utils/helpers";

import { styles } from "./SimplePromissory.style";

const SimplePromissoryNote = ({ loan, client }: SimplePromissoryProps) => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.title}>Pagaré No.</Text>
              <Text style={styles.textSubline}>___</Text>
            </View>
            <View style={{ ...styles.row }}>
              <Text style={styles.title}>Ciudad:</Text>
              <Text style={styles.textSubline}>{client?.city}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.title}>Teléfono:</Text>
              <Text style={styles.textSubline}>{client?.phone}</Text>
            </View>
            <View style={{ ...styles.row }}>
              <Text style={styles.title}>Fecha:</Text>
              <Text style={styles.textSubline}>
                {formatDate(`${loan?.createdAt}`, "numeric")}
              </Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={{ ...styles.row, marginTop: 16 }}>
              <Text style={styles.title}>Debo y pagaré a:</Text>
              <Text style={styles.textSubline}>Lic.Ronald Rodriguez U</Text>
            </View>
          </View>

          <View style={{ ...styles.row, marginTop: 16, width: "100%" }}>
            <Text style={{ ...styles.text, textTransform: "uppercase" }}>
              LA CANTIDAD DE{" "}
              <Text style={styles.textSubline}>
                {formatMoney(loan?.amountInterest)} pesos Dominicanos
              </Text>{" "}
              VALOR RECIBIDO A MI ENTERA SATISFACCION Y ME COMPROMETO A PAGAR EN
              LA FECHA INDICADA. POR INCUMPLIMIENTO DE PAGO DE ESTA OBLIGACION,
              QUEDAN AFECTADOS TODOS MIS BIENES HABIDOS Y POR HABER, CON
              RENUNCIA DEL FUERO DE DOMICILIO Y DE CUALQUIER OTRA LEY QUE{" "}
              PUDIERA FAVORECERME.
            </Text>
          </View>

          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.title}>Por RD</Text>
              <Text style={styles.textSubline}>
                {formatMoney(loan?.amountInterest)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Fecha de vencimiento pagaré:</Text>
              <Text style={styles.textSubline}>
                {formatDate(
                  loan?.paymentSchedules[loan?.paymentSchedules?.length - 1]
                    ?.paymentDate,
                  "numeric"
                )}
              </Text>
            </View>
          </View>

          <View style={{ ...styles.column, marginTop: 16 }}>
            <View style={styles.rowVertical}>
              <Text style={styles.textSubline}>
                (Escriba aquí bueno y valido)
              </Text>
              <View style={styles.lines}>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
              </View>
            </View>
            <View style={styles.rowVertical}>
              <View style={{ ...styles.row, width: "60%" }}>
                <Text style={styles.title}>Dirección:</Text>
                <Text style={{ ...styles.textDirection, width: "60%" }}>
                  {client?.address}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Cedula:</Text>
                <Text style={styles.textSubline}>{client?.identification}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Empresa donde labora:</Text>
                <Text style={styles.textSubline}>
                  {client?.workingInformation?.companyName}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              ...styles.rowVertical,
              margin: "48px auto",
              alignItems: "center",
            }}
          >
            <View style={{ ...styles.line, width: 400 }}></View>
            <Text
              style={{
                ...styles.text,
                textTransform: "uppercase",
                fontFamily: "Outfit Bold",
              }}
            >
              {loan?.client?.fullName}
            </Text>
            <Text style={{ ...styles.text, textAlign: "center" }}>Firma</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default SimplePromissoryNote;
