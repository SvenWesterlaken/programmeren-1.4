var voornaam = "Sven",
    achternaam = "Westerlaken",
    woonplaats = "Rijswijk";

function i18l(language) {
  switch(language) {
    case 'nl':
      return({
        voornaam: voornaam,
        achternaam: achternaam,
        woonplaats: woonplaats
      });
    break;

    default:
    case 'uk':
      return({
        firstname: voornaam,
        lastname: achternaam,
        town: woonplaats
      });
    break;
  }
}

module.exports = { i18l };
