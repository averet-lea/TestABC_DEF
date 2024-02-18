// Import all necessary Storefront plugins
import TestABC_DEFPlugin from './testabc_def/testabc_def.plugin';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('TestABC_DEFPlugin', TestABC_DEFPlugin);
