import React from "react";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Api from '../servicios/api'


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            empleados: []
        }
    }

    borrarRegistros = (id) => {

        fetch(Api+"?borrar="+id)
            .then(r => r.json())
            .then((datosRespuesta) => {

                console.log(datosRespuesta);
                this.cargarDatos();
            })

            .catch(console.log)
    }


    cargarDatos() {
        fetch(Api)
            .then(r => r.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.setState({datosCargados: true, empleados: datosRespuesta})
            })

            .catch(console.log)
    }

    componentDidMount() {
        this.cargarDatos();
    }

    render() {
        const {datosCargados, empleados} = this.state

        if (!datosCargados) {
            return (<div>Cargando...</div>);
        } else {
            return (

                <div className="card">
                    <div className="card-header">
                        <Link className="btn btn-success" to={"/create"}>Agregar nuevo empleado</Link>
                    </div>
                    <div className="card-body">
                        <h4> Lista de empleados </h4>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                empleados.map(empleado => (
                                        <tr key={empleado.id}>
                                            <td>{empleado.id}</td>
                                            <td>{empleado.nombre}</td>
                                            <td>{empleado.correo}</td>
                                            <div>
                                                <Link className="btn btn-warning"
                                                      to={"/edit/"+empleado.id}

                                                >Edit</Link>
                                                <button type="button" className="btn btn-danger"
                                                        onClick={() => this.borrarRegistros(empleado.id)}>
                                                    Delete
                                                </button>
                                            </div>

                                        </tr>

                                    )
                                )
                            }
                            </tbody>
                        </Table>

                    </div>

                    <div className="card-footer text-muted">

                    </div>
                </div>

            );
        }
    }
}

export default List;