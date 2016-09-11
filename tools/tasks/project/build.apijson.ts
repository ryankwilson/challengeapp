import * as gulp from 'gulp';
import { APIJSON_SRC, APIJSON_DEST } from '../../config';

export = () => {
    return gulp.src(APIJSON_SRC)
        .pipe(gulp.dest(APIJSON_DEST));
};
