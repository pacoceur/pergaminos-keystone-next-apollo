import React from 'react';
import Link from 'next/link';

export default () => (
  <nav className="navbar navbar-light">
    <Link href='/'>
      <div className="navbar-brand m-auto">Hola</div>
    </Link>
  </nav>
);