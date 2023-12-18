import { AppRegistry, Platform } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import { ScriptManager, Federated } from '@callstack/repack/client';

const resolveURL = Federated.createURLResolver({
    containers: {
        MiniApp: 'http://localhost:9000/[name][ext]',
        news: 'http://localhost:9001/[name][ext]',
    },
});
ScriptManager.shared.addResolver(async (scriptId, caller) => {
    let url;
    if (caller === "main") {
        url = Script.getDevServerURL(scriptId);
    } else {
        url = resolveURL(scriptId, caller);
    }
    if (!url) {
        return undefined;
    }
    return {
        url,
        cache: false,
        query: {
            platform: Platform.OS,
        },
    };
});

AppRegistry.registerComponent(appName, () => App);