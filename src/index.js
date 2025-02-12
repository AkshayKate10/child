import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

import App2 from "./PracticeApps/App2";
// import App3 from "./App3";
// import App4 from "./App4";
// import App5 from "./App5";
// import App6 from "./App6";
// import App7 from "./App7";
// import SearchArrayByInput from "./SearchArrayByInput";
// import ApiArray from "./ApiArray";
// import ApiTable from "./ApiTable";
// import LifecycleMethods from "./LifeCycle/Lifecycle_methods";
// import TypesOfComponents from "./TypesOfComponents";
// import ExportTypes from "./ExportTypes";
// import App from "./redux_in_action/app";
// import MomentPractice from "./MomentPractice";
// import App from "./PracticeApps/ApiReduxPractice/App";
// import App from "./PracticeApps/Redux/App";
// import App from "./PracticeApps/Redux/WorkingRedux/App";
import App from "./redux_in_action-with-react-redux/app";

ReactDOM.render(<App2 />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
