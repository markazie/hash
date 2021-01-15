import { getFiles } from "./helper.js";
import express from "express";

express().listen(3000, () => getFiles('data'));
