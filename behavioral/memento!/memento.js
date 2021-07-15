var EditorMemento = /** @class */ (function () {
    function EditorMemento(content) {
        this.content = content;
    }
    EditorMemento.prototype.getContent = function () {
        return this.content;
    };
    return EditorMemento;
}());
var Editor = /** @class */ (function () {
    function Editor() {
        this.content = '';
    }
    Editor.prototype.type = function (words) {
        this.content = this.content + ' ' + words;
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.save = function () {
        return new EditorMemento(this.content);
    };
    Editor.prototype.restore = function (moment) {
        this.content = moment.getContent();
    };
    return Editor;
}());
var editor = new Editor();
editor.type('1- sdfij;dfkgh;lskghskdgl;dfhsj');
editor.type('2- sdfjkghsdfjkghssu');
var saved = editor.save();
editor.type('3- sdfghso;eihgw3489tyw34789t5he49p78ty25-');
console.log(editor.getContent());
editor.restore(saved);
console.log(editor.getContent());
