// Jest configuration file
// See https://github.com/thymikee/jest-preset-angular#jest-preset-angular

module.exports =
{
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  testPathIgnorePatterns: ['<rootDir>/src/test.ts'],
  transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx|rxjs)',
                            '<rootDir/node_modules/'],
};
