(this["webpackJsonpcrud-react"]=this["webpackJsonpcrud-react"]||[]).push([[0],{34:function(e,t,r){},35:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),s=r(28),n=r.n(s),o=(r(34),r(35),r(14)),i=r(15),l=r(17),d=r(16),b=r(43),j=r(11),h=(r(21),"http://localhost/empleados/empleados/"),m=r(0),u=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).borrarRegistros=function(e){fetch(h+"?borrar="+e).then((function(e){return e.json()})).then((function(e){console.log(e),a.cargarDatos()})).catch(console.log)},a.state={datosCargados:!1,empleados:[]},a}return Object(i.a)(r,[{key:"cargarDatos",value:function(){var e=this;fetch(h).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({datosCargados:!0,empleados:t})})).catch(console.log)}},{key:"componentDidMount",value:function(){this.cargarDatos()}},{key:"render",value:function(){var e=this,t=this.state,r=t.datosCargados,a=t.empleados;return r?Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)(j.b,{className:"btn btn-success",to:"/create",children:"Agregar nuevo empleado"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h4",{children:" Lista de empleados "}),Object(m.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"ID"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Acciones"})]})}),Object(m.jsx)("tbody",{children:a.map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t.id}),Object(m.jsx)("td",{children:t.nombre}),Object(m.jsx)("td",{children:t.correo}),Object(m.jsxs)("div",{children:[Object(m.jsx)(j.b,{className:"btn btn-warning",to:"/edit/"+t.id,children:"Edit"}),Object(m.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.borrarRegistros(t.id)},children:"Delete"})]})]},t.id)}))})]})]}),Object(m.jsx)("div",{className:"card-footer text-muted"})]}):Object(m.jsx)("div",{children:"Cargando..."})}}]),r}(c.a.Component),O=r(6),p=r(44),x=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).cambioValor=function(e){var t=a.state;t[e.target.name]=e.target.value,a.setState({state:t,errores:[]})},a.enviarDatos=function(e){e.preventDefault(),console.log("Formulario enviado...");var t=a.state,r=t.nombre,c=t.correo,s=[];if(r||s.push("error_nombre"),r||s.push("error_correo"),a.setState({errores:s}),s.length>0)return!1;var n={nombre:r,correo:c};fetch(h+"?insertar=1",{method:"POST",body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log(e),a.props.history.push("/list")})).catch(console.log)},a.state={nombre:"",correo:"",errores:[]},a}return Object(i.a)(r,[{key:"verificarError",value:function(e){return-1!==this.state.errores.indexOf(e)}},{key:"render",value:function(){var e=this.state,t=e.nombre,r=e.correo;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:"Empleados"}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsxs)(p.a,{onSubmit:this.enviarDatos,children:[Object(m.jsxs)(p.a.Group,{children:[Object(m.jsx)("label",{htmlFor:"",children:"Nombre:"}),Object(m.jsx)("input",{type:"text",onChange:this.cambioValor,value:t,name:"nombre",id:"nombre",className:(this.verificarError("error_nombre")?"is-invalid":"")+" form-control",placeholder:"","aria-describedby":"helpId"}),Object(m.jsx)("small",{id:"helpId",className:"invalid-feedback",children:"Escribe el nombre del empleado "})]}),Object(m.jsxs)(p.a.Group,{children:[Object(m.jsx)("label",{htmlFor:"",children:"Correo:"}),Object(m.jsx)("input",{type:"text",onChange:this.cambioValor,value:r,name:"correo",id:"correo",className:(this.verificarError("error_correo")?"is-invalid":"")+" form-control",placeholder:"","aria-describedby":"helpId"}),Object(m.jsx)("small",{id:"helpId",className:"invalid-feedback",children:"Escribe el correo del empelado "})]}),Object(m.jsxs)("div",{className:"btn-group",role:"group",children:[Object(m.jsx)("button",{type:"submit",className:"btn btn-success",children:" Agregar nuevo empleado"}),Object(m.jsx)(j.b,{to:"/list",className:"btn btn-primary",children:" Cancelar "})]})]})}),Object(m.jsx)("div",{className:"card-footer text-muted"})]})}}]),r}(a.Component),v=Object(O.e)(x),f=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).cambioValor=function(e){var t=a.state.empleado;t[e.target.name]=e.target.value,a.setState({empleado:t})},a.enviarDatos=function(e){e.preventDefault(),console.log("Formulario enviado...");var t=a.state.empleado,r={id:t.id,nombre:t.nombre,correo:t.correo};fetch(h+"?actualizar=1",{method:"POST",body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){a.props.history.push("/list")})).catch(console.log)},a.state={datosCargados:!1,empleado:[]},a}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch(h+"?consultar="+this.props.match.params.id).then((function(e){return e.json()})).then((function(t){e.setState({datosCargados:!0,empleado:t[0]})})).catch(console.log)}},{key:"render",value:function(){var e=this.state,t=e.datosCargados,r=e.empleado;return t?Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:"Editar empleados"}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsxs)(p.a,{onSubmit:this.enviarDatos,children:[Object(m.jsxs)(p.a.Group,{children:[Object(m.jsx)("label",{htmlFor:"",children:" Clave: "}),Object(m.jsx)("input",{type:"text",readOnly:!0,className:"form-control",value:r.id,onChange:this.cambioValor,name:"id",id:"id","aria-describedby":"helpId",placeholder:""}),Object(m.jsx)("small",{id:"helpId",className:"form-text text-muted",children:" Clave"})]}),Object(m.jsxs)(p.a.Group,{children:[Object(m.jsx)("label",{htmlFor:"",children:"Nombre:"}),Object(m.jsx)("input",{required:!0,type:"text",onChange:this.cambioValor,value:r.nombre,name:"nombre",id:"nombre",className:"form-control",placeholder:"","aria-describedby":"helpId"}),Object(m.jsx)("small",{id:"helpId",className:"text-muted",children:"Escribe el nombre del empelado "})]}),Object(m.jsxs)(p.a.Group,{children:[Object(m.jsx)("label",{htmlFor:"",children:"Correo:"}),Object(m.jsx)("input",{required:!0,type:"text",onChange:this.cambioValor,value:r.correo,name:"correo",id:"correo",className:"form-control",placeholder:"","aria-describedby":"helpId"}),Object(m.jsx)("small",{id:"helpId",className:"text-muted",children:"Escribe el correo del empelado "})]}),Object(m.jsxs)("div",{className:"btn-group",role:"group",children:[Object(m.jsx)("button",{type:"submit",className:"btn btn-success",children:" Guardar nuevos cambios"}),Object(m.jsx)(j.b,{to:"/list",className:"btn btn-primary",children:" Cancelar "})]})]})}),Object(m.jsx)("div",{className:"card-footer text-muted"})]}):Object(m.jsx)("div",{children:"Cargando..."})}}]),r}(a.Component),g=Object(O.e)(f);var N=function(){return Object(m.jsxs)(j.a,{children:[Object(m.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:Object(m.jsxs)("div",{className:"nav navbar-nav",children:[Object(m.jsxs)(j.b,{className:"nav-item nav-link active",to:"/list",children:["Sistema ",Object(m.jsx)("span",{className:"sr-only",children:"(current) "})," "]}),Object(m.jsx)(j.b,{className:"nav-item nav-link",to:"/create",children:" Crear empleado  "})]})}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("br",{}),Object(m.jsxs)(O.a,{path:"/list",children:[" ",Object(m.jsx)(u,{})," "]}),Object(m.jsxs)(O.a,{path:"/create",children:[" ",Object(m.jsx)(v,{})," "]}),Object(m.jsxs)(O.a,{path:"/edit/:id",children:[" ",Object(m.jsx)(g,{})," "]})]})]})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,45)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;r(e),a(e),c(e),s(e),n(e)}))};n.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),y()}},[[42,1,2]]]);
//# sourceMappingURL=main.3c38acf3.chunk.js.map