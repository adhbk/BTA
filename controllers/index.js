// index.js - controlleur

// On référence les actions de réponse et d'envoi globaux côté serveur.
// Ce code sera exécuté pour toute entrée WebSocket entrante.

/**
 * Recoit les messages websockets du client.
 * 
 * Connecte les boutons de l'interface avec leur fonction
 */
exports.setSockets = function () {
    var NA = this,
        io = NA.io;


    console.log("exports.setSockets");

    // Attendre un lien valide entre client et serveur
    io.sockets.on("connection", function (socket) {
      console.log("nouvel onglet")
    });

}
