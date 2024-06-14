# Expo Tutorial in Typescript

This is the translation to Typescript of Expo Tutorial <https://docs.expo.dev/tutorial/introduction/>

I used this to learn about React, React-Native and Typescript.

Noteworthy: how to get the icon name type in the library @expo/vector-icons/MaterialIcons.

```Typescript
type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

```

or directly in the definition of the type can also be

```typescript
icon: keyof typeof MaterialIcons.glyphMap;
```

and also when there is a `ref`

```typescript
const imageRef = React.useRef<View | null>(null);
```

but you have to use the `ref` in the web version, which returns a `<div>` instead of a `<View>`

```typescript
imageRef.current as unknown as HTMLDivElement;
```

Any comments or corrections are welcome
