import React, { useEffect } from "react";
import Button from "./button";
import { Container, Row, Col } from "react-bootstrap";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./css/timeComponent.css";
import Loader from "react-loader-spinner";

const ArticleComponent = ({
  admin,
  setValues,
  values,
  array,
  funcaoGet,
  funcaoDelete,
}) => {
  const abrirPdf = (link) => {
    console.log("caiu", link);
    window.open(link, "_blank");
  };
  const deletar = (title, id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div id="react-confirm-alert">
            <div class="react-confirm-alert-overlay">
              <div class="react-confirm-alert">
                <div class="react-confirm-alert-body">
                  <h1>Confirmação de exclusão</h1>
                  Você deseja excluir o artigo {title}?
                  <div
                    class="react-confirm-alert-button-group"
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
        <h1>Artigos</h1>
      </div>
      <p style={{ marginBottom: 24 }}>
        {" "}
        <br />{" "}
      </p>
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
        array.map((artigo, i) => {
          const { title, resume, link, _id } = artigo;
          return (
            <div style={{ padding: 50 }} key={i}>
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
                        title,
                        resume,
                        link,
                        _id,
                        checkedB: true,
                        edit: true,
                      })
                    }
                  />
                  <DeleteIcon
                    onClick={() => {
                      deletar(title, _id);
                    }}
                    className="icones"
                  />
                </div>
              ) : null}
              <h4>{artigo.title}</h4>
              <p>{artigo.resume}</p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  text="Leia o artigo completo"
                  funcao={() => abrirPdf(artigo.url)}
                  values={artigo.link}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ArticleComponent;
