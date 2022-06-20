declare module '*.scss' {
  const className: Record<string, string>;
  export default className;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
