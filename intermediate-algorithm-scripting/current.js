const onlyAlphanumeric = (str) => {
  const notAlphanumeric = /[^(\d|\w)]+/gi;
  return str.replace(notAlphanumeric, "-");
}

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

function spinalCase(str) {
  const firstStr = str.replaceAll("_", "-");
  const newStr = styleHyphenFormat(firstStr);
  return onlyAlphanumeric(newStr);
}

console.log(spinalCase("TheAndyGriffith_Show"))
