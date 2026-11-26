# Linked List - The Odin Project

## Assignment

### You will need two classes or factories:

1. `LinkedList` class / factory, which will represent the full list.
2. `Node` class / factory, containing a `value` property and a `nextNode` property, set both as `null` by default.

### Build the following functions in your linked list class / factory:

1. `append(value)` adds a new node containing `value` to the end of the list.
2. `prepend(value)` adds a new node containing `value` to the start of the list.
3. `size()` returns the total number of nodes in the list.
4. `head()` should return the value of the first node in the list. If the list is empty, it should return `undefined`.
5. `tail()` should return the value of the final node in the list. If the list is empty, it should return `undefined`.
6. `at(index)` should return the value of the node at the given index. If there’s no node at the given index, it should return `undefined`.
7. `pop()` should remove the head node from the list and return its value. If it’s used on an empty list, it should just return `undefined`.
8. `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
9. `findIndex(value)` returns the index of the node containing the given value. If the value can’t be found in the list, it should return `-1`. If more than one node has a value matching the given `value`, it should return the index of the first node with the matching value.
10. `toString()` represents your LinkedList objects as strings, so you can print them out and preview them in the console. If the list is empty, it should return an empty string. The format should be: `( value ) -> ( value ) -> ( value ) -> null`.

### Extra Credit

1. `insertAt(index, ...values)` should insert new nodes with the given values at the given `index`. For example:

```javascript
// list that's already set up
console.log(list.toString());
//=> "( 1 ) -> ( 2 ) -> ( 3 ) -> null"

list.insertAt(1, 10, 11);
console.log(list.toString());
//=> "( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null"
```

If the method is called with an index that is out of bounds (below 0 or above the list’s size), throw a `RangeError`. 2. `removeAt(index)` that removes the node at the given index. If the given `index` is out of bounds (below 0 or greater than or equal to the list’s size), throw a `RangeError`

_Extra Credit Tip:_ When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their `nextNode` link updated.

### Test It Out

Let’s test out the Linked List you made!

1. Create a `main.js` file and make sure it imports your `LinkedList` class or factory. This is where we’ll test the list.
2. Create an instance of your `LinkedList` and populate it with nodes:

```javascript
// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
```

3. Add `console.log(list.toString());` to the end of the file and run it.
4. If everything is working, the output should be:

```javascript
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

```

Feel free to use different values to test if you like.

## NPM Packages and Scripts

1. Install dependencies:

```bash
npm install
```

---

2. Available npm run scripts:

Run Jest tests:

```bash
npm run test
```

Run Jest watch:

```bash
npm run watch
```

Run Lint:

```bash
npm run lint
```

Format with Prettier:

```bash
npm run format
```

## Runing Functions with Node REPL

1. Navigate to the folder containing the .js file you are currently working with
2. When in that file location run:

```bash
node
```

3. In Node's console, if using `export default`, run:

```javascript
> let funcName = (await import(`./fileName.js?t=${Date.now()}`)).default;

// If you update the .js file, run this again to load the latest version:
> funcName = (await import(`./fileName.js?t=${Date.now()}`)).default;
```

If using named exports (`export`), run:

```javascript
> let { funcName1, funcName2 } = await import(`./fileName.js?t=${Date.now()}`);

// If you update the .js file, run this to reload the functions:
> ({ funcName1, funcName2 } = await import(`./fileName.js?t=${Date.now()}`));
```

4. You can run the imported functions normally in the console:

```javascript
> funcName("parameters"); // Prints the function's return value
```

5. To exit, use Node's:

```javascript
> .exit
```
