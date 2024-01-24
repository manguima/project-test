"use client";

import { useEffect, useState } from "react";

export default () => {
  var form = new FormData();
  const [formValues, setFormValues] = useState<any[]>([]);

  useEffect(() => {
    form.set("campoNome", "Matheus");
    form.set("campoCelular", "+5561999986666");
    form.set("campoEmail", "testeteste222@teste.com.br");
    form.set("campoOrigem", "Brasilia");
    form.set("campoDestino", "Belo Horizonte");
    form.set("campoDataInicial", "2024-01-20");
    form.set("campoDataFinal", "2024-01-25");
    form.set("campoPassageiroAdulto", "1");
    form.set("campoPassageiroCrianca", "0");
    form.set("campoPassageiroBebe", "0");
    form.set("campoMalaDespachada", "0");
    form.set("campoFlexibilidade", "S");
    form.set("campoServicos", "[H,T,P,S]");

    let formCurrent = new Array();
    for (var [key, val] of form.entries() as any) {
      formCurrent.push({ key, val });
    }

    setFormValues(formCurrent);
  }, []);

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <div
      style={{
        height: "100svh",
        width: "100svw",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <form
        id="frameForm"
        method="POST"
        action="https://agencia.iddas.com.br/orcamento/solicitacao/nova/N3RSSmtIbFFyNEl4cnBOY2cyS29TQT09"
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        {formValues.map((item, index) => (
          <div>
            <p>{item?.key}</p>
            <input
              style={{ color: "black" }}
              value={item.val}
              name={item.key}
            ></input>
          </div>
        ))}
        <button type="submit">Enviar Solicitacao</button>
      </form>
      <iframe
        name="iframe"
        width={"100%"}
        height={"100%"}
        src="https://agencia.iddas.com.br/orcamento/solicitacao/nova/N3RSSmtIbFFyNEl4cnBOY2cyS29TQT09"
      ></iframe>
    </div>
  );
};
