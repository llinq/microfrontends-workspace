import { lazy, Suspense } from 'react';
// @ts-expect-error This import is dynamically loaded from the remote module
const Title = lazy(() => import('mfe_react/Title'));

export default function List() {
  return (
    <div>
      <h1>List of Microfrontends</h1>
      <ul>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Title />
        </Suspense>
      </ul>
    </div>
  );
}
