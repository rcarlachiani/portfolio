import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { theme } from "../../theme/theme";
import { GradientBackground } from "../../styles/globalStyles";

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
            <GradientBackground />
        </>
    )
}

export default ParticlesBackground