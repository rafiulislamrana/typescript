## What is the use of the `keyof` keyword in TypeScript? Provide an example.**:

keyof operator basically use to get the keys names of a type in a union form. Then we can use it in our code. For example:

```ts
type Coder = {
    laptop = string;
    dualMonitor = boolean;
    bike = string;
}
type frontendDev = keyof Coder;
```

---


## Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

The difference between `any`, `unknown`, and `never` types in TypeScript are,
`any` types are basically when there is no type specified for a vabiable. It can take any types.
`unknown` types used when the type is not known. Typescript will check the type.
`never` types are used for a fuction or variable returns anything.
