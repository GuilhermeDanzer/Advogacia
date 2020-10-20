import React, { useEffect } from "react";
import Button from "./button";
import { Container, Row, Col } from "react-bootstrap";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./css/timeComponent.css";
import Loader from "react-loader-spinner";

const TimeComponent = ({
  admin,
  setValues,
  values,
  array,
  funcaoGet,
  funcaoDelete,
}) => {
  const deletar = (name, id, oab) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div id="react-confirm-alert">
            <div className="react-confirm-alert-overlay">
              <div className="react-confirm-alert">
                <div className="react-confirm-alert-body">
                  <h1>Confirmação de exclusão</h1>
                  Você deseja excluir o associado {name} {oab}?
                  <div
                    className="react-confirm-alert-button-group"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <Button funcao={funcaoDelete} values={id} text="Sim" />
                    <Button funcao={onClose} text="Não" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  console.log(array);
  useEffect(() => {
    funcaoGet();
  }, []);

  return (
    <div className="divContainer">
      <div className="firstDiv">
        <h1>Associados</h1>
      </div>
      <p style={{ marginBottom: 24 }}>
        {" "}
        <br />{" "}
      </p>
      <Container>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        {array.length < 1 ? (
          <div
            style={{
              height: 500,
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader
              type="Oval"
              color="#0b1f51"
              height={100}
              width={100}
              timeout={10000000000000} //3 secs
            />
          </div>
        ) : (
          array.map((pessoa, i) => {
            const {
              name,
              oab,
              cep,
              email,
              tel,
              city,
              state,
              number,
              address,
              complement,
              area,
              academicFormation,
              profissionalExperience,
              _id,
            } = pessoa;
            return (
              <div className="linhas" key={i}>
                {admin ? (
                  <div
                    style={{
                      justifyContent: "flex-end",
                      display: "flex",
                      marginBottom: 10,
                    }}
                  >
                    <EditIcon
                      className="icones"
                      onClick={() =>
                        setValues({
                          name,
                          oab,
                          email,
                          tel,
                          city,
                          state,
                          number,
                          address,
                          complement,
                          area,
                          academicFormation,
                          cep,
                          profissionalExperience,
                          _id,
                          checkedB: true,
                          edit: true,
                        })
                      }
                    />
                    <DeleteIcon
                      onClick={() => {
                        deletar(name, _id, oab);
                      }}
                      className="icones"
                    />
                  </div>
                ) : null}
                <Row>
                  <Col md={2}></Col>
                  <Col xs={12} md={4}>
                    <div className="colunas">
                      <div>
                        <p>{pessoa.name}</p>
                        <p>{pessoa.oab}</p>
                      </div>

                      <br />
                      <p className="strongP">Contato</p>
                      <p>{pessoa.email}</p>
                      <p>
                        {pessoa.city} | {pessoa.state} | {pessoa.tel}
                      </p>
                      <p>
                        {pessoa.address}, {pessoa.number}{" "}
                        {pessoa.complement ? `| ${pessoa.complement}` : null}
                      </p>
                      <p>
                        {pessoa.area}| {pessoa.cep}
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} md={3}>
                    <div className="colunas">
                      <p className="strongP">Prática Profissional</p>
                      <p>{pessoa.profissionalExperience}</p>
                    </div>
                  </Col>
                  <Col xs={12} md={3}>
                    <div className="colunas">
                      <p className="strongP">Formação Academica</p>
                      <p>{pessoa.academicFormation}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })
        )}
      </Container>
    </div>
  );
};

export default TimeComponent;
