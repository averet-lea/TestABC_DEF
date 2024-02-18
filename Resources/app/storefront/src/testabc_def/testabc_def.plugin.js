// <plugin root>/src/Resources/app/storefront/src/example.plugin.js
import Plugin from 'src/plugin-system/plugin.class';


// The plugin skeleton
export default class TestABC_DEFPlugin extends Plugin {
    init() {
        console.log('init');
    }
}