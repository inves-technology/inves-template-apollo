module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    "\\.ts$": "esbuild-runner/jest",
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
