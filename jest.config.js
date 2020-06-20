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
    coverageDirectory: '<rootDir>/tests/coverage',
    collectCoverageFrom: [
        'src/**/*.{ts,vue}',
        '!**/node_modules/**'
    ]
}
