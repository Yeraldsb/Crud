import * as React from "react";
import {Link, withRouter} from 'react-router-dom'
import {Form} from "react-bootstrap";
import Api from '../servicios/api'

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            empleado: []
        }
    }

    cambioValor = (e) => {
        const state = this.state.empleado;
        state[e.target.name] = e.target.value;
        this.setState({empleado: state});
    }

    enviarDatos = (e) => {
        e.preventDefault();
        console.log("Formulario enviado...");
        const {id,nombre,correo}= this.state.empleado;

        let datosEnviar = {id:id, nombre: nombre, correo: correo};

        fetch(Api + "?actualizar=1", {
            method: "POST",
            body: JSON.stringify(datosEnviar)
        })
            .then(r => r.json())
            .then((datosRespuesta) => {

                this.props.history.push("/list");

            })

            .catch(console.log)
    }

    componentDidMount() {


        fetch(Api + "?consultar=" + this.props.match.params.id)
            .then(r => r.json())
            .then((datosRespuesta) => {
                this.setState({
                    datosCargados: true,
                    empleado: datosRespuesta[0]
                })
            })

            .catch(console.log)

    }

    render() {
        const {datosCargados, empleado} = this.state

        if (!datosCargados) {
            return (<div>Cargando...</div>);
        } else {
            return (
                <div className="card">
                    <div className="card-header">
                        Editar empleados
                    </div>
                    <div className="card-body">

                        <Form onSubmit={this.enviarDatos}>
                            <Form.Group>
                                <label htmlFor="" > Clave: </label>
                                <input  type="text" readOnly className="form-control" value={empleado.id} onChange={this.cambioValor} name="id" id="id" aria-describedby="helpId" placeholder=""/>
                                <small id="helpId" className="form-text text-muted"> Clave</small>
                            </Form.Group>

                            <Form.Group>
                                <label htmlFor="">Nombre:</label>
                                <input required type="text" onChange={this.cambioValor} value={empleado.nombre} name="nombre"
                                       id="nombre"
                                       className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Escribe el nombre del empelado </small>
                            </Form.Group>

                            <Form.Group>
                                <label htmlFor="">Correo:</label>
                                <input required type="text" onChange={this.cambioValor} value={empleado.correo} name="correo"
                                       id="correo"
                                       className="form-control" placeholder="" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Escribe el correo del empelado </small>
                            </Form.Group>
                            <div className="btn-group" role="group">
                                <button type="submit" className="btn btn-success"> Guardar nuevos cambios</button>
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
}

export default withRouter(Edit);