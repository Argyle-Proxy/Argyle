<script>
    import Particles from "astro-particles";
    import { tsParticles, Engine } from "@tsparticles/engine";
    import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone"

    let particleOptions = {
        preset: "seaAnemone",
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