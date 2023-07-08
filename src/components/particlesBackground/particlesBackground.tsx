import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { theme } from "../../theme/theme";
import { ParticlesBlur } from "./particlesStyles";

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
                            quantity: 2,
                        },
                        repulse: {
                            distance: 80,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: theme.colors.rose,
                    },
                    links: {
                        color: theme.colors.aquagreen,
                        distance: 180,
                        enable: true,
                        opacity: 0.4,
                        width: 1.5,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.4,
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
                        value: 0.3,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.8, max: 3 },
                    },
                },
                detectRetina: true,
            }}
            />
            <ParticlesBlur />
        </>
    )
}

export default ParticlesBackground