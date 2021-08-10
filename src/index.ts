 import $ from "jquery";


import '../node_modules/jquery-ui/ui/version.js';
import '../node_modules/jquery-ui/ui/plugin.js';
import '../node_modules/jquery-ui/ui/widget.js';

import "@progress/kendo-ui/js/kendo.all.js";

import 'lodash'

window['$'] = window['jQuery'] = $;

import * as HomePage from "./modules/home";

export {
    HomePage
};