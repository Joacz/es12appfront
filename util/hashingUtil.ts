const bcrypt = require("bcrypt");

export function hashPassword(unHashed: string) {

  return bcrypt.hash(unHashed, 10).then(function (hash: String) {
    return hash;
  });

};

export function isSamePass(unHashed: string, hashed: String) {

  return bcrypt.compare(unHashed, hashed).then(function (result: boolean) {
    return result;
  });

};
