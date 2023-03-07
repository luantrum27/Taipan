export default function (api: any) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            src: "./src",
            components: "./src/components",
          },
        },
      ],
    ],
  };
}