import fs from "fs";
import { getResult } from "./result.js";

export const getFiles = (folder) => {
  fs.readdir(folder, (err, files) => {
    files.forEach((file) => {
      fs.readFile(`${folder}/${file}`, "utf8", function (err, data) {
        if (err) throw err;
        getData(data, file);
      });
    });
  });
};

export const getData = (data, file) => {
  const dataArr = [];

  data
    .trim()
    .split("\n")
    .forEach((el) => {
      const elArr = el.trim().split(" ");
      dataArr.push(elArr);
    });

  setResult(dataArr, file);
};

export const setResult = (data, file) => {
  fs.writeFile(`./result/${file}`, getResult(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("done!");
  });
};
