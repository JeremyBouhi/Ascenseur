module.exports = {
    rootDir: './',
    resetMocks: true,
    moduleFileExtensions: [
        'ts',
        'js',
        'json',
        'vue'
    ],
    testMatch: [
        '<rootDir>/tests/**/*.spec.ts'
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    coverageDirectory: '<rootDir>/test/coverage',
    collectCoverageFrom: [
        'src/**/*.{ts,vue}',
        '!**/node_modules/**'
    ]
}
