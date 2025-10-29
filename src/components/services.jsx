import React from "react";

export const Services = (props) => {
  // Determinar cuántos elementos hay y cómo distribuirlos
  const itemCount = props.data ? props.data.length : 0;
  const needsCentering = itemCount > 0 && itemCount < 4;

  // Calcular las clases de columnas según la cantidad
  const getColumnClass = () => {
    if (itemCount === 1) return "col-md-6 col-md-offset-3";
    if (itemCount === 2) return "col-md-6";
    if (itemCount === 3) return "col-md-4";
    return "col-md-4"; // 4 o más elementos (mantiene col-md-4 como original)
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.title}</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div 
                  key={`${d.name}-${i}`} 
                  className={getColumnClass()}
                  style={
                    needsCentering 
                      ? {
                          paddingBottom: '30px',
                          marginBottom: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                        }
                      : {
                          paddingBottom: '20px'
                        }
                  }
                >
                  {" "}
                  <i className={d.icon} style={needsCentering ? { marginBottom: '15px' } : {}}></i>
                  <div className="service-desc" style={needsCentering ? { textAlign: 'center' } : {}}>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <a href={d.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                      Ver documento
                    </a>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};