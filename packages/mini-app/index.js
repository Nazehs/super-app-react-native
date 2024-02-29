// import {AppRegistry} from 'react-native';
// import App from './src/App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


/**
 * @format
 */

import { ScriptManager, Script } from '@callstack/repack/client';
import { AppRegistry, Platform } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

const BASE_URL = 'http://localhost:9000/';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
    const urlTemplate = `${BASE_URL}[name][ext]`;
    const actualURL = urlTemplate.replace('[name]', scriptId).replace('[ext]', '.js');

    let url;
    if (caller === 'main') {
        url = Script.getDevServerURL(scriptId);
    } else {
        url = actualURL;
    }

    if (!url) {
        return undefined;
    }

    return {
        url,
        cache: false,
        query: { platform: Platform.OS },
    };
});

AppRegistry.registerComponent(appName, () => App);
