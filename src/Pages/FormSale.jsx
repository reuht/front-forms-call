import React from "react";

const FormSale = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h1>Cliente</h1>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="container-fluid">
                <div class="row">
                  <div class="col-md-5">
                    <div class="mb-3">
                      <label for="nombres" className="form-label">
                        Nombres
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombres"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="col-md-5">
                    <div class="mb-3">
                      <label for="apellidos" className="form-label">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="apellidos"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="col-md-2">
                    <div class="mb-3">
                      <label for="documento" className="form-label">
                        Documento
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="documento"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label for="tel1" className="form-label">
                        Telefono 1
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="tel1"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="mb-3">
                      <label for="tel2" className="form-label">
                        Telefono 2
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="tel2"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Correo
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="barrio" className="form-label">
                        Barrio
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="barrio"
                        placeholder="barrio"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="barrio" className="form-label">
                        Ciudad
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>---</option>
                        <option value="1">Barranquilla</option>
                        <option value="2">Cartagena</option>
                        <option value="3">Soledad</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Dirección
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="name_local" className="form-label">
                        Nombre Edificio
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name_local"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h1>Servicio</h1>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {/* -------------- Servicio ---------------------- */}
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Operador
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>---</option>
                      <option value="1">Movistar</option>
                      <option value="2">Claro</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Plan Vendido
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>---</option>
                      <option value="1">Navégala L LITE Mx Tmk 23 </option>
                      <option value="2">Navégala L LITE Mx Tmk 23 </option>
                      <option value="3">Navégala L LITE Mx Tmk 23 </option>
                    </select>
                  </div>
                </div>
              </div>
              {/* -------------- Servicio ---------------------- */}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSale;
