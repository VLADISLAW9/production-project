import { classNames } from './classNames'

describe('classNames', () => {
	test('witch only first param', () => {
		expect(classNames('someClass')).toBe('someClass')
	})

	test('witch additional class', () => {
		const expected = 'someClass class1 class2'
		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
	})

	test('witch mods', () => {
		const expected = 'someClass class1 class2 hovered scrollable'
		expect(
			classNames('someClass', { hovered: true, scrollable: true }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})

	test('witch mods false', () => {
		const expected = 'someClass class1 class2 hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: false }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})

	test('witch mods undefined', () => {
		const expected = 'someClass class1 class2 hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: undefined }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})
})
