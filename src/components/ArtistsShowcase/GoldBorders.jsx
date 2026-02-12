'use client';

import { forwardRef } from 'react';
import styles from './ArtistsShowcase.module.css';

/**
 * Gold border decorations on left and right edges
 * Full screen height vertical gold stripes
 */
const GoldBorders = forwardRef(function GoldBorders(props, ref) {
  return (
    <div ref={ref} className={styles.goldBordersWrapper}>
      {/* Left border - vertical gold lines */}
      <div className={styles.goldBorderLeft}>
        <div className={styles.verticalLines}>
          <span className={styles.thickLine} />
          <span className={styles.thinLine} />
          <span className={styles.thinLine} />
        </div>
      </div>

      {/* Right border - vertical gold lines */}
      <div className={styles.goldBorderRight}>
        <div className={styles.verticalLines}>
          <span className={styles.thinLine} />
          <span className={styles.thinLine} />
          <span className={styles.thickLine} />
        </div>
      </div>
    </div>
  );
});

export default GoldBorders;
