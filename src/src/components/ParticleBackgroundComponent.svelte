<script>
    import Particles from "astro-particles";
    import { tsParticles, Engine } from "@tsparticles/engine";
    import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone"

    export let particleOptions = {
        fpsLimit: 120,
        particles: {
            color: {
                value: "#FF0000",
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "destroy",
                },
                path: {
                    clamp: false,
                    enable: true,
                    delay: {
                        value: 0,
                    },
                    generator: curvesPathName,
                },
                random: false,
                speed: 2,
                straight: false,
                trail: {
                    fill: {
                        color: "#000",
                    },
                    length: 30,
                    enable: true,
                },
            },
            number: {
                value: 0,
                limit: { value: 300 },
            },
            opacity: {
                value: 1,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 10 },
                animation: {
                    count: 1,
                    startValue: "min",
                    enable: true,
                    speed: 10,
                    sync: true,
                },
            },
        },
        background: {
            color: "#000",
        },
        detectRetina: true,
        emitters: {
            direction: "none",
            rate: {
                quantity: 10,
                delay: 0.3,
            },
            size: {
                width: 0,
                height: 0,
                mode: "precise",
            },
            spawnColor: {
                value: "#ff0000",
                animation: {
                    h: {
                        enable: true,
                        offset: {
                            min: -1.4,
                            max: 1.4,
                        },
                        speed: 5,
                        sync: false,
                    },
                    l: {
                        enable: true,
                        offset: {
                            min: 20,
                            max: 80,
                        },
                        speed: 0,
                        sync: false,
                    },
                },
            },
            position: {
                x: 50,
                y: 50,
            },
        },
    };

    let particleInit = async (engine) => {
        await loadSeaAnemonePreset(engine);
    }
</script>

<Particles id="particles" options={particleOptions} particlesInit="particleInit"></Particles>

<style>
    #particles
    {
        width: 100%;
        height: 100%;
    }
</style>