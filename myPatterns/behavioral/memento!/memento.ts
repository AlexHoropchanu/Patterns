class EditorMemento {
	protected content: string

	constructor(content: string) {
		this.content = content
	}

	getContent(): string {
		return this.content
	}
}

class Editor {
	protected content: string = ''
	type(words: string): void {
		this.content = this.content + ' ' + words
	}

	getContent(): string {
		return this.content
	}

	save(): EditorMemento {
		return new EditorMemento(this.content)
	}

	restore(moment: EditorMemento):void {
		this.content = moment.getContent()
	}
}


let editor = new Editor()

editor.type('снимок 1')
editor.type('снимок 2')

let saved = editor.save()

editor.type('снимок 3')

console.log(editor.getContent())

editor.restore(saved)

console.log(editor.getContent())