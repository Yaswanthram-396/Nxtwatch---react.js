import React, { Component, useState } from "react";

const ConfigurationContext = React.createContext({
  savedList: [],
  mode: false,
  handleSavedList: () => {},
  handleMode: () => {},
});
export default ConfigurationContext;
