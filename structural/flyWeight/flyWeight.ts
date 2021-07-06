class Cachee {
	type: string
	constructor(type: string = 'image') {
		this.type = type
	}
	setWeight() {
		console.log(`Создан кэш типа ${this.type}.`)
	}
}

class CacheAdd {
	cache: Array <Cachee> = []
	getCacheType(type: string = 'image') {
		for (var i = this.cache.length - 1; i >= 0; i--) {
			if (this.cache[i].type == type) {
				console.log('Возврат закешиорованного объекта.')
				console.log(this.cache[i])
				return this.cache[i]
			}
		}
		console.log('\nСоздание нового и добавление в кеш объекта.\n')
		this.cache.push(new Cachee(type))
	}
}

let factory = new CacheAdd

factory.getCacheType()
factory.getCacheType('image')
factory.getCacheType('login')
factory.getCacheType('password')