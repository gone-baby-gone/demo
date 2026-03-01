// postcss.config.js (ESM, якщо require не працює)
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' }),
  ],
};
