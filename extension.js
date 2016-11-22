const Lang = imports.lang;
const Main = imports.ui.main;
const Meta = imports.gi.Meta;
const Shell = imports.gi.Shell;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;

function _centerWindow() {

    let win = global.display.focus_window;

    if(!win) {
        return;
    }

    let monitor = Main.layoutManager.primaryMonitor;

    win.move_frame(false,
        monitor.x + Math.floor(monitor.width / 2 - win.get_frame_rect().width / 2),
        monitor.y + Math.floor(monitor.height / 2 - win.get_frame_rect().height / 2));
}

function init(meta) {
}

function enable() {
    Main.wm.addKeybinding('center-window-shortcut',
         Convenience.getSettings(),
         Meta.KeyBindingFlags.NONE,
         Shell.ActionMode.NORMAL,
         _centerWindow
       );
}

function disable() {
    Main.wm.removeKeybinding('center-window-shortcut');
}
