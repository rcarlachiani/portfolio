import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { theme } from "../../theme/theme";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    
    return (
        <>
            <Particles 
            id="tsparticles"
            init={particlesInit}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 5,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: theme.colors.purpleParticles,
                    },
                    // links: {
                    //     color: theme.colors.purpleParticles,
                    //     distance: 180,
                    //     enable: true,
                    //     opacity: 0.4,
                    //     width: 1.5,
                    // },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 0.6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.6,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.5, max: 3 },
                    },
                },
                detectRetina: true,
            }}
            />
        </>
    )
}

export default ParticlesBackground