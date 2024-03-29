import Particles from 'react-tsparticles';  
import '../Css/Pbg.css'

function Pbg() {
  return (
    <Particles id="tsparticles" params={{
      background: {
        color: {
          value: "#053D57"
        }
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
            speed: 0.5
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: "#B0FAFF"
        },
        links: {
          color: "#B0FAFF",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 4,
          straight: false
        },
        number: {
          density: {
            enable: true,
            value_area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.7
        },
        shape: {
          type: "circle"
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true,
      fullScreen: false,
  
    }} />
  );
}

export default Pbg;
