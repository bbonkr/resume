const { src, dest, series } = require('gulp');
const path = require('path');

// const copyDist = () => {
//     return src(path.join('dist/*.*')).pipe(dest(path.normalize('../docs/')));
// };

const copyPublic = () => {
    return src(path.join('public/*.*')).pipe(dest(path.normalize('docs/public/')));
};

// const copyHtml = () => {
//     return src(path.join('index.html')).pipe(dest(path.normalize('docs/')));
// };

exports.default = series(
    //copyDist,
    copyPublic,
    // copyHtml,
);
