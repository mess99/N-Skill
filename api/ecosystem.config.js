module.exports = [
  {
    script: "serveur.js",
    name: "api",
    exec_mode: "cluster",
    instances: "max",
  },
];
