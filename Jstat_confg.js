requirejs.config({
  paths: {
    jstat: "path/to/jstat/dist/jstat.min",
  },
  shim: {
    jstat: {
      exports: ["j$", "jStat"],
      init: function () {
        return {
          j$: j$,
          jStat: jStat,
        };
      },
    },
  },
});
