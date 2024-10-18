import React, { Component, useState } from "react";

const ConfigurationContext = React.createContext({
  savedList: [],
  mode: false,
  pagein: "Home",
  like: [],
  disLike: [],
  handleSavedList: () => {},
  handleMode: () => {},
  handlePage: () => {},
  handleLike: () => {},
  handleDislike: () => {},
});
export default ConfigurationContext;
