import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Opiniones de los alumnos sobre freeCodeCamp: </h1>
        <Testimonio
        nombre='Noel Jimenez'
        pais='Mexico'
        imagen='noel'
        cargo='Ingeniera en Sistemas Computacionales'
        testimonio='Siempre he tenido problemas para aprender JavaScript. 
        He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. 
        Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp
        me dio las habilidades y la confianza que necesitaba. ' />

<Testimonio
        nombre='Tacho Jimenez'
        pais='Mexico'
        imagen='tacho'
        cargo='Ingeniera en Sistemas Computacionales'
        testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador web. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.. ' />

      </div>
    </div>
  );
}

export default App;
