const SUBSITES = {
    home: {
        url: `https://ffyish.dev`
    },
    blog: {
        url: `https://blog.ffyish.dev`
    },
    study: {
        url: `https://study.ffyish.dev`
    }
};

const DEFAULT_SUBSITE = `home`;

const SUBSITE = Object.keys(SUBSITES).find((s) => s === process.env.SUBSITE) || DEFAULT_SUBSITE;

const getPathSubsite = (path) =>
  Object.keys(SUBSITES).find((s) => path.startsWith(`/${s}/`));


module.exports = {
    SUBSITE,
    SUBSITE_URL: SUBSITES[SUBSITE].url,
    getPathSubsite
};
