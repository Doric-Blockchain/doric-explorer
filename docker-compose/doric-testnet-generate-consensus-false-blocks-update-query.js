function generateUpdateQueries(blockNumbers) {
  if (!Array.isArray(blockNumbers)) {
    throw new Error("Input must be an array of block numbers.");
  }

  return blockNumbers.map((number) => {
    const blockNumber = String(number);
    return `UPDATE blocks SET consensus = false WHERE number = '${blockNumber}';`;
  });
}

const blockNumbers = [
  20978, 21142, 21786, 20352, 18205, 17722, 94617, 23718, 21381, 23439, 92984,
  28369, 23451, 12345, 23758, 12347, 14483, 326717, 19035, 93202, 35276, 16604,
  21760, 23695, 24241, 23467, 13109, 347648, 13649, 18543, 16492, 27641, 21223,
  18489, 94377, 20602, 21129, 239616, 23596, 326736, 27477, 17220, 17927, 23893,
  16278, 35265, 13835, 35386, 16649, 20630, 326721, 16499, 24301, 14869, 14254,
  23272, 13296, 27688, 22068, 15216, 23130, 12044, 20342, 15158, 11596, 28420,
  12306, 18639, 22251, 92912, 12112, 11652, 93276, 23687, 14261, 27945, 22715,
  24239, 24370, 16831, 20175, 21709, 16945, 12928, 11626, 28131, 16186, 18674,
  22570, 16442, 15035, 27961, 12301, 22339, 22673, 27745, 21829, 22189, 19776,
  313635, 40543, 23566, 304085, 304117, 304129, 16621, 14966, 23280, 18587,
  18376, 14321, 93306, 16746, 23191, 12796, 20147, 14096,
];

const queries = generateUpdateQueries(blockNumbers);

// Output the generated queries
queries.forEach((query) => console.log(query));
