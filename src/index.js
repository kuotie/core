const s4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

module.exports = {
  normalize: (text) =>
    text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase(),
  tokenize: (text) => text.split(/[\s,.!?;:([\]'"¡¿)/]+/).filter((x) => x),
  stem: (x) => x,
  uuid: () => `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`,
};
