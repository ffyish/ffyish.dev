const SUBSITES = {
    home: {
        url: `https://ffyish.dev`
    },
    blog: {
        url: `https://blog.ffyish.dev`
    },
};

const DEFAULT_SUBSITE = `home`;

const SUBSITE = Object.keys(SUBSITES).find((s) => s === process.env.SUBSITE) || DEFAULT_SUBSITE;

module.exports = {
    SUBSITE,
    SUBSITE_URL: SUBSITES[SUBSITE].url
};
