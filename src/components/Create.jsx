import * as React from "react";
import {Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom'
import Api from '../servicios/api'

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: "",
            errores: []
        }
    }

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({state, errores: []});
    }

    verificarError(elemento) {
        return this.state.errores.indexOf(elemento) !== -1;
    }

    enviarDatos = (e) => {
        e.preventDefault();
        console.log("Formulario enviado...")
        const {nombre, correo} = this.state;

        let errores = [];
        if (!nombre) errores.push("error_nombre");
        if (!nombre) errores.push("error_correo");

        this.setState({errores: errores});
        if (errores.length > 0) return false;

        let datosEnviar = {nombre: nombre, correo: correo};

        fetch(Api + "?insertar=1", {
            method: "POST",
            body: JSON.stringify(datosEnviar)
        })
            .then(r => r.json())
            .then((datosRespuesta) => {

                console.log(datosRespuesta);
                this.props.history.push("/list");

            })

            .catch(console.log)
    }


    render() {

        const {nombre, correo} = this.state;

        return (
            <div className="card">
                <div className="card-header">
                    Empleados
                </div>
                <div className="card-body">

                    <Form onSubmit={this.enviarDatos}>
                        <Form.Group>
                            <label htmlFor="">Nombre:</label>
                            <input type="text" onChange={this.cambioValor} value={nombre} name="nombre" id="nombre"
                                   className={((this.verificarError("error_nombre")) ? "is-invalid" : "") + " form-control"}
                                   placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="invalid-feedback">Escribe el nombre del empleado </small>
                        </Form.Group>

                        <Form.Group>
                            <label htmlFor="">Correo:</label>
                            <input type="text" onChange={this.cambioValor} value={correo} name="correo" id="correo"
                                   className={((this.verificarError("error_correo")) ? "is-invalid" : "") + " form-control"}
                                   placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" className="invalid-feedback">Escribe el correo del empelado </small>

                        </Form.Group>
                        <div className="btn-group" role="group">

                            <button type="submit" className="btn btn-success"> Agregar nuevo empleado</button>
                            <Link to={"/list"} className="btn btn-primary"> Cancelar </Link>

                        </div>

                    </Form>


                </div>
                <div className="card-footer text-muted">

                </div>

            </div>

        )
    }
}

export default withRouter(Create);