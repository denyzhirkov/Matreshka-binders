# Matreshka-binders
custom binders for Matreshka.js

For fast use look at index.html

**cssSwitch** - switches the *DOM Node* between *css classes* based on config. U can use array or object(key->value) to set up config.
First option - a config set, second is a default value if not in config(not required):

```javascript
MK.binders.cssSwitch(['first-class','second-class','ultra-class'],'default-class');

or

MK.binders.cssSwitch({'a':'a-class','b':'b-class'},'default-class');

this.bindNode('a','.some-object',MK.binders.cssSwitch({a:'A-class',b:'B-class'},'C-class'));
this.a = 'a'; //Set a 'A-class' css on the node
this.a = 'b'; //Set a 'B-class' css on the node
this.a = 18; //Set a default class 'C-class'
```

**htmlSwitch** - makes the same as *cssSwitch* but with *inner html* in object. And of course u can use array or object as config
```javascript
MK.binders.htmlSwitch(['some first text','second text','story about MK.binders'],'default-text');

or

MK.binders.htmlSwitch({'a':'About text','b':'Before read'},'default-text');
```

**numRange** - a magic binder which performs a handler function if the value is in range.
Just set up an array, each element is an object with *min*, *max* values and *f* - handler function. In handler u can use *value* - triggered value and *object* - DOM Node object;

```javascript
MK.binders.numRange([{min,max,f(value,oject)},{min,max,f(value,object)}])
```
