# Matreshka-binders
custom binders for Matreshka.js

For fast use look at index.html

cssSwitch - switches between *css styles* based on config. U can use array or object(key->value) to set up config.
First option - a config set, second is a default value if not in config(not required):

```javascript
MK.binders.cssSwitch(['first-class','second-class','ultra-class'],'default-class')
```
`MK.binders.cssSwitch({'a':'a-class','b':'b-class'},'default-class')`

`MK.binders.htmlSwitch(['some first text','second text','story about MK.binders'],'default-text')`
`MK.binders.htmlSwitch({'a':'About text','b':'Before read'},'default-text')`

`MK.binders.numRange([{min,max,f(value,oject)},{min,max,f(value,object)}])`
