import { Document, Page, View, Text } from "@react-pdf/renderer";

import { SpecialPromissoryNoteProps } from "@modules/loan/interfaces/component-interfaces/PromissoryNoteProps";

import { formatDate } from "@modules/core/utils/helpers";

import { styles } from "./SpecialPromissoryNote.style";

const SpecialPromissoryNote = ({
  createdAt,
  client,
}: SpecialPromissoryNoteProps) => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ ...styles.title, margin: "0 auto" }}>
            PODER ESPECIAL DE AUTORIZACIÓN DE USO Y GARANTÍA
          </Text>
          <Text style={{ ...styles.title, marginTop: 24 }}>
            ENTRE LOS ABAJO FIRMANTES:
          </Text>
          <Text style={{ ...styles.text, marginTop: 24 }}>
            De una parte,{" "}
            <Text
              style={{
                ...styles.text,
                textTransform: "uppercase",
                textDecoration: "underline",
                color: "#2C654D",
              }}
            >
              Sr(a). {client?.fullName},
            </Text>{" "}
            dominicano(a), mayor de edad, portador de la cédula de identidad
            personal y electoral No. {client?.identification} domiciliado(a) y
            residente en la {client?.address}, {client?.sector}, {client?.city},
            República Dominicana, quien en lo adelante se denominará{" "}
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              EL PODERDANTE;
            </Text>{" "}
            Y de la otra parte el señor{" "}
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              LIC. RONALD ALEXANDER RODRIGUEZ UREÑA,
            </Text>{" "}
            dominicano, mayor de edad, titular de la cédula de identidad y
            electoral No. 001-1374378-5, domiciliado y residente en la calle 2W
            esq. 5W, No. 40, Urbanización Lucerna, Municipio Santo Domingo Este,
            Provincia Santo Domingo, quien en lo adelante se denominará{" "}
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              EL APODERADO;
            </Text>{" "}
          </Text>
          <Text style={styles.text}>
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              PRIMERO: EL PODERDANTE,
            </Text>{" "}
            cede y transfiere a{" "}
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              EL APODERADO
            </Text>{" "}
            la autorización de uso y revisión de mi historial crediticio y
            bancario, haciendo uso de mis claves y usuarios de acceso a mis
            cuentas personales de los bancos comerciales con los que tengo
            cuentas de ahorros, tarjetas de crédito y corriente, a los fines de
            verificar y comprobar mis ingresos y realizar descuentos
            correspondiente a las cuotas, y que dicho accesos y claves bancarias
            sirven de garantía para las transacciones comerciales que realizamos
            de préstamos personales.{" "}
          </Text>
          <Text style={styles.text}>
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              SEGUNDO:
            </Text>{" "}
            Que como un acto de buena fe y como garantía{" "}
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              EL PODERDANTE,
            </Text>{" "}
            no podrá cambiar sus claves de accesos hasta honrar en buena lid los
            compromisos comerciales adquiridos con{" "}
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              EL APODERADO,
            </Text>{" "}
            en caso de hacer se sobreentiende que liquidará el mismo día el
            total de la deuda contraída, o en su defecto la ejecución del Pagaré
            Notarial.
          </Text>
          <Text style={styles.text}>
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              TERCERO: EL PODERDANTE{" "}
            </Text>
            solo podrá cambiar sus accesos al momento de liquidar dicho préstamo
            personal, tener recibo y carta de saldo por parte de{" "}
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              EL APODERADO.
            </Text>
          </Text>
          <Text style={styles.text}>
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              CUARTO: En caso de EL PODERDANTE,
            </Text>{" "}
            hacer acto de mala fe y cambiar sus accesos, que son la garantía de
            dicho préstamo, se entenderá que quiere evitar cumplir sus
            responsabilidades frente a{" "}
            <Text
              style={{
                ...styles.text,
                color: "#2C654D",
              }}
            >
              EL APODERADO,
            </Text>{" "}
            por lo que daría inicio a los procesos legales pertinentes, apegados
            a la ley y al pagaré notarial (anexo) firmado para tales fines.
          </Text>
          <Text style={styles.text}>
            En la ciudad de Santo Domingo Este, provincia de Santo Domingo de
            Guzmán, {formatDate(createdAt, "mixted")}.
          </Text>

          {/* Firmas */}

          <View style={{ ...styles.column, marginTop: 48 }}>
            <View style={{ ...styles.rowVertical, gap: 5 }}>
              <View
                style={{ ...styles.line, width: 250, margin: "0 auto" }}
              ></View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                  fontFamily: "Outfit Bold",
                }}
              >
                {client?.fullName}
              </Text>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                  fontFamily: "Outfit Bold",
                }}
              >
                El ponderante
              </Text>
            </View>

            <View style={{ ...styles.rowVertical, gap: 5 }}>
              <View
                style={{ ...styles.line, width: 250, margin: "0 auto" }}
              ></View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                  fontFamily: "Outfit Bold",
                }}
              >
                LIC. RONALD ALEXANDER RODRÍGUEZ UREÑA
              </Text>
              <Text
                style={{
                  ...styles.text,
                  textAlign: "center",
                  margin: "0 auto",
                  fontFamily: "Outfit Bold",
                }}
              >
                El apoderado
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default SpecialPromissoryNote;
