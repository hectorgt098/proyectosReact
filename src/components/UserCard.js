import React, { useState } from "react";

function UserCard() {
  const [userData, setUserData] = useState({
    name: "",
    edad: "",
    estatura: "",
    enlace: "",
    color: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [usuariosGuardados, setUsuariosGuardados] = useState([]) 

  const guardarUsuario = (e) =>{
    e.preventDefault()
    setUsuariosGuardados((prevUsuarios) => [...prevUsuarios, userData])
    setUserData({
        name : "",
        edad : "",
        estatura : "",
        enlace: "",
        color: ""
    })
  }

  const { name, edad, estatura, enlace, color } = userData;

  return (
    <>
    <section>
      <form onSubmit={guardarUsuario}>
        <input type="text" placeholder="Nombre" name="name" value={name} onChange={handleChange} />
        <input type="text" placeholder="Edad" name="edad" value={edad} onChange={handleChange} />
        <input type="text" placeholder="Estatura" name="estatura" value={estatura} onChange={handleChange} />
        <input type="text" placeholder="Enlace" name="enlace" value={enlace} onChange={handleChange} />
        <label>Color de fondo</label>
        <input type="color" name="color" value={color} onChange={handleChange}/>
        <button type="submit">Guardar</button>
      </form>
      <div className="Container">
        <div className="userCard" style={{background: color}}>
          <img src={enlace} alt="" id="imagenPerfil" />
          <div className="contentTxt">
            <h3 id="name">{name}</h3>
            <p id="edad">Edad: {edad}</p>
            <p id="estatura">Estatura: {estatura}m</p>
          </div>
        </div>
      </div>
      </section>
      <div className="usuariosGuardados">
        <h2>Usuarios Guardados:</h2>
        <div className="containerUserSave">
        {usuariosGuardados.map((usuario, index) => (
          <div className="userCard" key={index} style={{background: usuario.color}}>
            <img src={usuario.enlace} alt="" id="imagenPerfil" />
            <div className="contentTxt">
              <h3>{usuario.name}</h3>
              <p>Edad: {usuario.edad}</p>
              <p>Estatura: {usuario.estatura}m</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default UserCard;
