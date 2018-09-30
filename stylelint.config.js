module.exports = {
  extends: 'stylelint-config-recommended-scss',
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/properties-order': [
      // Special
      'content',

      // Layout
      'display',
      'float',
      'clear',
      'position',
      'top',
      'right',
      'bottom',
      'left',

      // Display & Box model
      'box-sizing',
      'width',
      'height',
      'margin',
      'padding',

      // Colors
      'color',
      'background',
      'background-color',
      'background-image',
      'background-size',
      'background-repeat',
      'border',
      'border-radius',
      'box-shadow',

      // Text
      'font-family',
      'font-size',
      'line-height',
      'text-align',
      'text-transform',

      // other
      'overflow',
      'cursor',
      'z-index',
      'transition',
      'transform',
      'animation',
    ],

    // override rules here
  },
};
