module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                'useBuiltIns': 'entry',
                'corejs': 3,
            }
        ]
    ],
    plugins: [
        // Don't allow polyfills to pollute global namespace.
        '@babel/plugin-transform-runtime',
        // Support for the experimental syntax 'classPrivateProperties'
        '@babel/plugin-proposal-class-properties',
        // Support for the experimental syntax 'classPrivateMethods'
        '@babel/plugin-proposal-private-methods',
    ]
};
