import data from "../Data/Wine-Data.json";
export const objectKeys = Object.keys(data[0]);

export const sameValueHandler = (data, attr) => {
  const groupedOfAttr = {};

  data.forEach((obj) => {
    const attrValue = obj[attr];
    if (!groupedOfAttr[attrValue]) {
      groupedOfAttr[attrValue] = [];
    }
    groupedOfAttr[attrValue].push(obj);
  });

  const repeatedGroups = Object.values(groupedOfAttr).filter(
    (group) => group.length > 1
  );

  return repeatedGroups.reduce((acc, curr) => acc.concat(curr), []);
};

export const searchAttrValue = (data, attr, searchValue) => {
  const fo = data.filter((obj) => obj[attr].toString() === searchValue);
  return fo;
};

export const onlySearchValue = (data, searchValue) => {
  const finalFo = [];
  objectKeys.forEach((attr) => {
    const fo = data.filter((obj) => obj[attr].toString() === searchValue);
    finalFo.push(...fo);
  });
  return finalFo;
};

export const accenHandler = (data, attr) => {
  const sortedData = [...data].sort((a, b) => a[attr] - b[attr]);
  return sortedData;
};

export const sortHandler = (data, attr, type) => {
  if (type === "acc") {
    const sortedData = [...data].sort((a, b) => a[attr] - b[attr]);
    return sortedData;
  } else {
    const sortedData = [...data].sort((a, b) => b[attr] - a[attr]);
    return sortedData;
  }
};

export const limitHandler = (data, attr, type , value) => {
  if (type === "up") {
    const filteredArray = data.filter((obj) => obj[attr] > value);
    return filteredArray;
  } else {
    const filteredArray = data.filter((obj) => obj[attr] < value);
    return filteredArray;
  }
};
