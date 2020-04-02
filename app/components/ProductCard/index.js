import React from 'react';
import classnames from 'classnames';

const formatPrice = (price) => {
  return `$${(price / 100).toFixed(2)}`;
};

export default ({ className, name, price, image, onClick }) => (
  <div
    className={classnames(
      'br py-1 px-1p5 bgc-white shadow:hover transition-prop-all transition-duration-p4 cursor-pointer',
      className,
    )}
    onClick={onClick}
  >
    <div className="w-12 h-16 flex items-center justify-center">
      <img src={image ? image.publicUrl : '/placeholder.svg'} width="100%" style={{ opacity: image ? 1 : 0.75 }}/>
    </div>
    <div className="ta-center mt-1">
      <strong className="uppercase">{name}</strong>
      <br/>
      <span className="color-grey-500 fs-sm">{formatPrice(price)}</span>
    </div>
  </div>
);
